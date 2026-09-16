'use client';

import { useEffect, useRef } from 'react';

type Point = [number, number];

type Segment = {
  start: Point;
  end: Point;
  length: number;
  offset: number;
};

type Route = {
  segments: Segment[];
  length: number;
  phase: number;
  speed: number;
};

// Centerlines from the 840px source texture, rendered at the same 420px tile
// scale as the reference background.
const TRACE_PATHS: Point[][] = [
  [[422, 175], [422, 279], [480, 338], [497, 339], [506, 348], [506, 390], [532, 414], [536, 415]],
  [[411, 494], [414, 496], [415, 576], [401, 591], [400, 665], [438, 703], [437, 792], [472, 827], [472, 838]],
  [[479, 531], [457, 552], [456, 577], [440, 594], [440, 630], [479, 669], [479, 755], [525, 802], [525, 839]],
  [[273, 472], [355, 472], [395, 512], [396, 568], [394, 572], [386, 580], [386, 650]],
  [[603, 176], [651, 177], [669, 195], [679, 208], [725, 253], [800, 252], [839, 214]],
  [[181, 424], [204, 401], [210, 400], [266, 400], [274, 408], [322, 408], [342, 389], [342, 362]],
  [[309, 737], [343, 703], [344, 641], [358, 627], [359, 624], [359, 525]],
  [[570, 1], [570, 39], [536, 71], [536, 147], [586, 196], [619, 196]],
  [[280, 736], [321, 694], [320, 631], [343, 608], [343, 525]],
  [[422, 114], [445, 137], [444, 267], [457, 280], [463, 284], [468, 283], [477, 290], [511, 290]],
  [[16, 348], [46, 318], [78, 317], [86, 308], [86, 247], [143, 191], [173, 191]],
];

function pointOnRoute(route: Route, distance: number): Point {
  const segment =
    route.segments.find((part) => distance <= part.offset + part.length) ??
    route.segments[route.segments.length - 1];
  const progress = Math.max(0, Math.min(1, (distance - segment.offset) / segment.length));

  return [
    segment.start[0] + (segment.end[0] - segment.start[0]) * progress,
    segment.start[1] + (segment.end[1] - segment.start[1]) * progress,
  ];
}

function traceRange(context: CanvasRenderingContext2D, route: Route, start: number, end: number) {
  context.beginPath();
  route.segments.forEach((segment) => {
    const from = Math.max(start, segment.offset);
    const to = Math.min(end, segment.offset + segment.length);
    if (to <= from) return;

    const first = pointOnRoute(route, from);
    const last = pointOnRoute(route, to);
    context.moveTo(first[0], first[1]);
    context.lineTo(last[0], last[1]);
  });
}

export function CircuitSignals() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let width = 0;
    let height = 0;
    let routes: Route[] = [];
    let accent = '';
    let head = '';

    const readTheme = () => {
      const styles = getComputedStyle(document.documentElement);
      accent = styles.getPropertyValue('--accent').trim();
      head = styles.getPropertyValue('--text').trim();
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const tileSize = 420;
      const scale = tileSize / 840;
      routes = [];

      for (let row = 0; row * tileSize < height; row += 1) {
        for (let column = 0; column * tileSize < width; column += 1) {
          const base = (column * 3 + row * 5) % TRACE_PATHS.length;
          const indices = [base, (base + 4) % TRACE_PATHS.length];

          indices.forEach((index, slot) => {
            let points = TRACE_PATHS[index].map(
              ([x, y]) => [column * tileSize + x * scale, row * tileSize + y * scale] as Point,
            );
            if ((column + row + slot) % 2) points = points.reverse();

            let length = 0;
            const segments = points.slice(1).map((end, pointIndex) => {
              const start = points[pointIndex];
              const segmentLength = Math.hypot(end[0] - start[0], end[1] - start[1]);
              const segment = { start, end, length: segmentLength, offset: length };
              length += segmentLength;
              return segment;
            });

            routes.push({
              segments,
              length,
              speed: 24 + (index % 4) * 4,
              phase: ((column * 7 + row * 11 + slot * 13) * 0.137) % 1,
            });
          });
        }
      }
    };

    const paint = (time: number) => {
      context.clearRect(0, 0, width, height);

      if (!reduceMotion.matches && !document.hidden) {
        const seconds = time / 1000;
        routes.forEach((route) => {
          const distance = (seconds * route.speed + route.phase * route.length) % route.length;
          const tailStart = Math.max(0, distance - 32);
          const edgeFade = Math.min(1, distance / 14, (route.length - distance) / 14);

          context.save();
          context.lineCap = 'round';
          context.shadowColor = accent;
          context.shadowBlur = 12;
          context.globalAlpha = 0.78 * edgeFade;
          context.strokeStyle = accent;
          context.lineWidth = 1.6;
          traceRange(context, route, tailStart, distance);
          context.stroke();

          const [x, y] = pointOnRoute(route, distance);
          context.beginPath();
          context.arc(x, y, 2.1, 0, Math.PI * 2);
          context.fillStyle = head;
          context.shadowBlur = 15;
          context.globalAlpha = 0.92 * edgeFade;
          context.fill();
          context.restore();
        });
      }

      frame = window.requestAnimationFrame(paint);
    };

    readTheme();
    resize();
    const themeObserver = new MutationObserver(readTheme);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('resize', resize, { passive: true });
    frame = window.requestAnimationFrame(paint);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      themeObserver.disconnect();
    };
  }, []);

  return <canvas aria-hidden="true" className="circuit-signals" ref={canvasRef} />;
}
