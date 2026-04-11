import React from 'react';
import {
  Activity,
  ArrowLeft,
  BarChart3,
  Car,
  Cpu,
  Gauge,
  MapPinned,
  RadioTower,
  Route,
  Satellite,
} from 'lucide-react';
import { navigateTo } from '../lib/navigation';

const techStack = [
  ['Ubuntu 24.04 VM', 'Recommended ROS2 Jazzy runtime on Mac for a reliable Linux robotics environment.'],
  ['ROS2 Jazzy', 'Nodes, topics, launch files, TF, RViz2, and standard robotics message passing.'],
  ['Python / rclpy', 'Simulation, noisy sensors, estimator, controller, obstacle logic, visualization, and logging.'],
  ['Standard ROS2 messages', 'geometry_msgs, sensor_msgs, nav_msgs, std_msgs, and visualization_msgs.'],
  ['tf2_ros', 'Publishes map -> base_link plus GNSS and IMU frame transforms for RViz2.'],
  ['RViz2', 'Live visualization of the RC car, paths, waypoint markers, obstacles, odometry, and TF.'],
  ['Matplotlib', 'Post-run performance plots generated from CSV telemetry logs.'],
  ['FastAPI + React', 'Local dashboard stack that serves logs and displays mission metrics and charts.'],
];

const visualDetails = [
  'RC car body with chassis, wheels, and heading arrow',
  'Dynamic map -> base_link TF and static GNSS / IMU frame links',
  'Numbered waypoint markers and highlighted active target',
  'Planned route in blue, true path in green, estimated path in orange',
  'Obstacle bodies, labels, safety radius overlays, and proximity highlighting',
  'Mission status text for live demo narration',
];

const ROS2GNSSNavPage = () => {
  return (
    <main className="relative px-6 pb-20 pt-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <button
          onClick={() => navigateTo('/')}
          className="inline-flex items-center gap-3 rounded-full border border-[color:var(--line)] bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </button>

        <section className="section-shell pb-16 pt-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="reveal reveal-visible">
              <span className="accent-pill">
                <Satellite className="mr-2 h-3.5 w-3.5" />
                ROS2 • GNSS • Linux Robotics
              </span>
              <h1
                className="mt-7 text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                ROS2 GNSS RC Car Navigation Demo
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
                <span className="font-semibold text-white">ros2_gnss_nav_demo</span> is a
                software-only ROS2 Jazzy simulation of an RC-car-style robot running an autonomous
                waypoint mission with noisy GNSS and IMU data.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[color:var(--muted)]">
                It is built as an interview-ready robotics systems demo: the car moves visibly in
                RViz2, follows a route, reacts to simple obstacles, logs telemetry, and produces
                validation plots for mission performance.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['ROS2 Jazzy', 'Ubuntu Linux', 'Python', 'rclpy', 'GNSS/PNT', 'IMU', 'RViz2', 'TF2'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:var(--line)] bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="section-card overflow-hidden p-3">
              <video
                className="h-[25rem] w-full rounded-[1.5rem] object-cover"
                src="/ros2-gnss-nav-demo.mov"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="metadata"
              />
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-4">
          {[
            [Satellite, 'GNSS / PNT', 'Simulates noisy GNSS measurements and validates navigation performance against true path data.'],
            [Route, 'Mission Planning', 'Runs autonomous waypoint following with an active target, planned route, and mission state.'],
            [Car, 'Robotic Platform', 'RC-car-style body, transforms, heading, odometry, and platform visualization in RViz2.'],
            [BarChart3, 'Validation', 'Collects CSV and JSON telemetry, then generates plots for post-run analysis.'],
          ].map(([Icon, title, copy]) => (
            <div key={title as string} className="section-card">
              <Icon className="h-8 w-8 text-[color:var(--accent)]" />
              <h2 className="mt-4 text-xl font-bold text-white">{title as string}</h2>
              <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{copy as string}</p>
            </div>
          ))}
        </section>

        <section className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="section-kicker">Visual Demo</span>
              <h2 className="section-title">RViz2 opens ready to use and tells the full robotics story.</h2>
              <p className="section-copy">
                The demo is designed to look like a real ROS2 robotics system immediately. It shows
                the robot, route, estimates, noisy sensors, transforms, obstacle context, and mission
                status in one interview-friendly view.
              </p>
            </div>

            <div className="section-card">
              <div className="grid gap-3">
                {visualDetails.map((detail, index) => (
                  <div
                    key={detail}
                    className="flex items-start gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4"
                    style={{ animation: `slide-up 750ms ease ${index * 80}ms both` }}
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent)] text-xs font-bold text-black">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-7 text-[color:var(--muted)]">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="section-intro">
            <span className="section-kicker">Tech Stack</span>
            <h2 className="section-title">Linux, ROS2, Python, GNSS simulation, and validation tooling.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {techStack.map(([name, description], index) => (
              <div
                key={name}
                className="section-card"
                style={{ animation: `slide-up 800ms ease ${index * 70}ms both` }}
              >
                <div className="flex items-center gap-3">
                  {index % 4 === 0 && <Cpu className="h-5 w-5 text-[color:var(--accent)]" />}
                  {index % 4 === 1 && <RadioTower className="h-5 w-5 text-[color:var(--accent)]" />}
                  {index % 4 === 2 && <Activity className="h-5 w-5 text-[color:var(--accent)]" />}
                  {index % 4 === 3 && <Gauge className="h-5 w-5 text-[color:var(--accent)]" />}
                  <h3 className="text-lg font-bold text-white">{name}</h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="section-card overflow-hidden">
              <div className="mb-4 flex items-center gap-3">
                <MapPinned className="h-5 w-5 text-[color:var(--accent)]" />
                <h3 className="text-lg font-bold text-white">Demo video</h3>
              </div>
              <video
                className="h-[34rem] w-full rounded-[1.25rem] object-cover"
                src="/ros2-gnss-nav-demo.mov"
                controls
                playsInline
                preload="metadata"
              />
            </div>

            <div>
              <span className="section-kicker">What It Demonstrates</span>
              <h2 className="section-title">A robotics systems demo built around observability.</h2>
              <p className="section-copy">
                This project highlights skills relevant to GNSS/PNT systems, autonomous mission
                planning, Linux-based robotics development, ROS2 visualization, data collection,
                and performance validation.
              </p>
              <p className="mt-5 text-base leading-8 text-[color:var(--muted)]">
                The important part is not just that the simulated car moves. The system is designed
                so each layer can be inspected: transforms, sensor noise, estimated versus true path,
                waypoint progress, obstacle proximity, telemetry logs, and post-run plots.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ROS2GNSSNavPage;
