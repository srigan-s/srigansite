type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

export default function imageLoader({ src, width }: ImageLoaderProps) {
  const name = src.replace(/^\//, '').replaceAll('/', '-').replace(/\.[^.]+$/, '');
  const size = width <= 96 ? 96 : width <= 384 ? 384 : 768;
  return `/responsive/${name}-${size}.webp`;
}
