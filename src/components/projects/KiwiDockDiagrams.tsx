import type { ReactNode } from 'react';

const architectureGroups = [
  {
    title: 'ROS 2 Simulation',
    items: ['robot_sim.py', 'sensor_sim.py', 'human_sim.py', 'world_visualizer.py'],
  },
  {
    title: 'Supervisor Adapter',
    items: ['docking_supervisor_adapter.py', '/odom, /scan, /battery_state', '/human/in_safety_zone'],
  },
  {
    title: 'Rust Safety Core',
    items: ['Typed docking state machine', 'Unicycle controller', 'Safety interlocks', 'Cargo unit tests'],
  },
  {
    title: 'Visualization',
    items: ['RViz2 markers', 'dashboard_bridge.py', 'Server-Sent Events', 'React 19 dashboard'],
  },
];

const nodeInputs = ['/odom', '/scan', '/battery_state', '/human/pose', '/human/in_safety_zone'];
const nodeOutputs = ['/cmd_vel', '/dock_state', '/charging_enabled', '/safety_events', '/status_markers'];

const stateFlow = [
  'IDLE',
  'APPROACHING',
  'FINE_ALIGNING',
  'VERIFYING_CLEARANCE',
  'DOCKED',
  'CHARGING',
  'COMPLETE',
];

const runtimeSteps = [
  'Startup pause and telemetry warm-up',
  'Robot leaves depot and approaches target vehicle',
  'Human actor enters the docking safety zone',
  'Supervisor enters SAFE_HOLD, publishes zero velocity, and disables charging',
  'Human clears the zone after the crossing sequence',
  'Robot resumes approach and fine alignment automatically',
  'Clearance, pose, yaw, battery, obstacle, and freshness checks pass',
  'Charging is enabled and the dashboard switches to success state',
];

const dashboardTopics = [
  '/odom',
  '/battery_state',
  '/scan',
  '/dock_state',
  '/charging_enabled',
  '/human/in_safety_zone',
];

const placeholders = [
  {
    title: 'RViz Parking Lot View',
    copy: 'Robot path, Tesla-style vehicle, dock target, safety zone, human actor, status labels.',
  },
  {
    title: 'React Telemetry Dashboard',
    copy: 'Battery, range, connector gap, yaw error, dock state, and charging success view.',
  },
  {
    title: 'ROS Graph Snapshot',
    copy: 'Supervisor-centered topic graph for simulation, telemetry, commands, and safety events.',
  },
  {
    title: 'Safety State Machine',
    copy: 'Nominal docking path with SAFE_HOLD highlighted as the fallback state.',
  },
];

function DiagramShell({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="panel overflow-hidden border-[color:var(--line)] bg-black text-white shadow-none">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="text-xs font-semibold uppercase text-[#7ee86b]">{eyebrow}</p>
        <h3 className="mt-2 text-xl font-semibold leading-tight">{title}</h3>
      </div>
      <div className="p-5">{children}</div>
    </article>
  );
}

function Chip({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'accent' | 'safe' }) {
  const toneClass =
    tone === 'accent'
      ? 'border-[#7ee86b]/60 bg-[#7ee86b]/15 text-[#caffc2]'
      : tone === 'safe'
        ? 'border-amber-300/70 bg-amber-300/15 text-amber-100'
        : 'border-white/12 bg-white/[0.04] text-white/78';

  return <span className={`rounded-md border px-3 py-2 text-xs leading-5 ${toneClass}`}>{children}</span>;
}

export function KiwiDockDiagrams() {
  return (
    <section className="section-shell">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Diagrams</p>
          <h2 className="section-title mt-3">KiwiDock technical system map.</h2>
        </div>
        <p className="max-w-sm text-sm leading-6 muted-copy">
          ROS 2 nodes, Rust safety logic, RViz visualization, and browser telemetry in one stack.
        </p>
      </div>

      <div className="grid gap-5">
        <article className="panel overflow-hidden p-3">
          <div className="border-b border-[color:var(--line)] px-2 pb-3">
            <p className="eyebrow">Reference Architecture</p>
            <h3 className="mt-2 text-xl font-semibold">KiwiDock full system architecture</h3>
          </div>
          <img
            alt="KiwiDock system architecture diagram showing ROS 2 Python nodes, Rust safety core, dashboard bridge, React dashboard, key topics, URDF package, launch scripts, and build setup"
            className="mt-3 max-h-[52rem] w-full rounded-md bg-white object-contain"
            src="/kiwidock-system-architecture.png"
          />
        </article>

        <DiagramShell eyebrow="01 / System Architecture" title="ROS 2 simulation, Rust safety core, RViz, and React dashboard">
          <div className="grid gap-3 lg:grid-cols-4">
            {architectureGroups.map((group, index) => (
              <div className="relative rounded-lg border border-white/10 bg-white/[0.035] p-4" key={group.title}>
                {index > 0 ? (
                  <span className="absolute -left-4 top-1/2 hidden -translate-y-1/2 text-[#7ee86b] lg:block">-&gt;</span>
                ) : null}
                <h4 className="text-sm font-semibold text-[#7ee86b]">{group.title}</h4>
                <div className="mt-4 grid gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </DiagramShell>

        <div className="grid gap-5 lg:grid-cols-2">
          <DiagramShell eyebrow="02 / ROS 2 Node Graph" title="docking_supervisor_adapter.py centered topic graph">
            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
              <div className="grid gap-2">
                {nodeInputs.map((topic) => (
                  <Chip key={topic}>{topic}</Chip>
                ))}
              </div>
              <div className="rounded-lg border border-[#7ee86b]/60 bg-[#7ee86b]/15 p-4 text-center">
                <p className="text-xs uppercase text-[#caffc2]">Adapter</p>
                <p className="mt-2 text-sm font-semibold">docking_supervisor_adapter.py</p>
                <p className="mt-3 text-xs leading-5 text-white/70">ROS telemetry in, Rust safety decision out</p>
              </div>
              <div className="grid gap-2">
                {nodeOutputs.map((topic) => (
                  <Chip key={topic} tone={topic === '/charging_enabled' ? 'accent' : 'neutral'}>
                    {topic}
                  </Chip>
                ))}
              </div>
            </div>
          </DiagramShell>

          <DiagramShell eyebrow="03 / Docking State Machine" title="Nominal flow with SAFE_HOLD fallback">
            <div className="grid gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {stateFlow.map((state, index) => (
                  <div className="flex items-center gap-2" key={state}>
                    <Chip tone={state === 'CHARGING' ? 'accent' : 'neutral'}>{state}</Chip>
                    {index < stateFlow.length - 1 ? <span className="text-[#7ee86b]">-&gt;</span> : null}
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-amber-300/70 bg-amber-300/15 p-4">
                <p className="text-sm font-semibold text-amber-100">SAFE_HOLD</p>
                <p className="mt-2 text-xs leading-5 text-white/72">
                  Triggered by obstacle, human-zone, stale sensor, low battery, pose tolerance, or yaw tolerance failures.
                  Publishes zero velocity and keeps charging disabled until the hold condition clears.
                </p>
              </div>
            </div>
          </DiagramShell>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <DiagramShell eyebrow="04 / Runtime Sequence" title="Human-zone hold and automatic resume">
            <ol className="grid gap-3">
              {runtimeSteps.map((step, index) => (
                <li className="grid grid-cols-[2.5rem_1fr] gap-3" key={step}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-[#7ee86b]/50 bg-[#7ee86b]/10 text-xs font-semibold text-[#caffc2]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm leading-6 text-white/78">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </DiagramShell>

          <DiagramShell eyebrow="05 / Dashboard Data Flow" title="ROS topics to Server-Sent Events to React">
            <div className="grid gap-4">
              <div className="flex flex-wrap gap-2">
                {dashboardTopics.map((topic) => (
                  <Chip key={topic}>{topic}</Chip>
                ))}
              </div>
              <div className="grid gap-3 text-center text-sm font-semibold md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">ROS 2 topics</div>
                <span className="text-[#7ee86b]">-&gt;</span>
                <div className="rounded-lg border border-[#7ee86b]/50 bg-[#7ee86b]/10 p-4">dashboard_bridge.py</div>
                <span className="text-[#7ee86b]">-&gt;</span>
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">React dashboard via SSE</div>
              </div>
              <p className="text-xs leading-5 text-white/62">
                JSON snapshots carry robot telemetry, battery state, obstacle range, human-zone status, docking state,
                connector gap, yaw error, and charging status at a 60 Hz target.
              </p>
            </div>
          </DiagramShell>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {placeholders.map((placeholder) => (
            <article className="quiet-panel overflow-hidden bg-black p-5 text-white" key={placeholder.title}>
              <div className="aspect-[16/9] rounded-md border border-dashed border-[#7ee86b]/50 bg-[linear-gradient(90deg,rgba(126,232,107,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(126,232,107,0.12)_1px,transparent_1px)] bg-[size:28px_28px] p-4">
                <div className="flex h-full flex-col justify-end rounded border border-white/10 bg-black/45 p-4">
                  <p className="text-sm font-semibold text-[#7ee86b]">{placeholder.title}</p>
                  <p className="mt-2 text-xs leading-5 text-white/68">{placeholder.copy}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
