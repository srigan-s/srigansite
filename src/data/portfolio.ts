import {
  Bot,
  Braces,
  Cpu,
  Github,
  Linkedin,
  Mail,
  RadioTower,
  Wrench,
  FileText,
} from 'lucide-react';

export const profile = {
  name: 'Srigan Sivagnanenthirarajah',
  title: 'Electrical Engineering @ University of Waterloo',
  line: 'Building robotics, controls, embedded systems, and software with a product-minded engineering lens.',
  email: 'srigan.siva@gmail.com',
  githubUsername: 'srigan-s',
  links: [
    {
      label: 'GitHub',
      href: 'https://github.com/srigan-s',
      icon: Github,
      external: true,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/srigan-sivagnanenthirarajah-418601206/',
      icon: Linkedin,
      external: true,
    },
    {
      label: 'Resume',
      href: 'https://drive.google.com/drive/u/0/folders/1Krbx7DbU7BJvlMt0zsL7BW4rIW90jJy-',
      icon: FileText,
      external: true,
    },
    {
      label: 'Email',
      href: 'mailto:srigan.siva@gmail.com',
      icon: Mail,
      external: false,
    },
  ],
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  date: string;
  impact: string;
  image: string;
  tags: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: 'wiz-robotics',
    role: 'Robotics Software Engineer Intern',
    company: 'Wiz Robotics',
    // TODO: Replace with the exact internship date range from your resume.
    date: 'January 2026 - April 2026',
    impact: 'Lead Engineer of client robotics team, built robotics integrations across IoT software, perception, and hardware validation.',
    image: '/wizrobotics.webp',
    tags: ['Robotics','Java', 'C++','OpenCV', 'Python','Embedded'],
  },
  {
    id: 'baycrest',
    role: 'Software Engineer Intern',
    company: 'Baycrest',
    // TODO: Replace with the exact internship date range from your resume.
    date: 'May 2025 - August 2025',
    impact: "Shipped full-stack product work for a hospital volunteer team of 100+ with usability and reliability in focus.",
    image: '/bay.png',
    tags: ['React', 'TypeScript', 'MongoDB', "Gemini API"],
  },
  {
    id: 'watonomous',
    role: 'Hardware Test Engineer',
    company: 'WATonomous',
    // TODO: Replace with the exact design team date range from your resume.
    date: ' September 2025 - December 2025',
    impact: 'Developed and validated vehicle control hardware for autonomous systems work.',
    image: '/wato.jpeg',
    tags: ['Controls', 'PCB', 'Testing'],
  },
  {
    id: 'miniai',
    role: 'Founding Engineer (AI Software)',
    company: 'MiniAI',
    // TODO: Replace with the exact role date range from your resume.
    date: 'February 2024 - Present',
    impact: 'Led engineering for a gamified AI learning platform for younger students.',
    image: '/miniAi.png',
    tags: ['AI', 'Product', 'Full-stack'],
  },
  {
    id: 'learnit',
    role: 'Robotics Engineer Consultant',
    company: 'Learnit',
    date: 'April 2026 - Present',
    impact:
      'Providing insight for robotics workshops exploring ESP32s, sensors, AI, and more, while aiding curriculum development through industry experience.',
    image: '/learnitcanada_logo.jpeg',
    tags: ['Robotics', 'ESP32', 'Sensors', 'AI', 'Curriculum'],
  },
  {
    id: 'uwaterloo-research',
    role: 'Student Researcher',
    company: 'University of Waterloo',
    // TODO: Replace with the exact research date range from your resume.
    date: 'July 2025',
    impact: 'Researched quantum algorithms and software with graduate researchers.',
    image: '/waterloo.png',
    tags: ['Python', 'Qiskit', 'Research'],
  },
];

export type ProjectItem = {
  id: string;
  name: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  media?: {
    type: 'image' | 'video';
    src: string;
    alt: string;
  };
};

export const projects: ProjectItem[] = [
  {
    id: 'kiwidock-ros2-ev-charging-dock',
    name: 'KiwiDock',
    description:
      'ROS 2 Jazzy autonomous mobile EV charging dock with RViz simulation, Rust safety supervision, live telemetry, and a React dashboard.',
    stack: ['ROS 2 Jazzy', 'Rust', 'rclpy', 'RViz2', 'React', 'SSE'],
    media: {
      type: 'video',
      src: '/kiwidock.mp4',
      alt: 'KiwiDock ROS 2 autonomous mobile EV charging dock simulation preview',
    },
  },
  {
    id: 'ros2-gnss-nav-demo',
    name: 'ROS2 GNSS RC Car Navigation',
    description: 'Autonomous waypoint navigation simulation with noisy GNSS, IMU telemetry, RViz2, and validation plots.',
    stack: ['ROS2 Jazzy', 'Python', 'GNSS/PNT', 'RViz2'],
    github: 'https://github.com/srigan-s/rc-car-calian',
    media: {
      type: 'video',
      src: '/ros2-gnss-nav-demo.mov',
      alt: 'ROS2 GNSS navigation simulation preview',
    },
  },
  {
    id: 'turret-auto-align',
    name: 'Turret Auto Align',
    description: 'FRC vision and controls project for keeping a turret centered using Limelight, AprilTags, and ML tuning.',
    stack: ['Java', 'Limelight', 'AprilTag', 'Python'],
    github: 'https://github.com/srigan-s/ML-PID-Tuner',
    media: {
      type: 'video',
      src: '/turret-auto-align-field.mov',
      alt: 'Turret auto align field preview',
    },
  },
  {
    id: 'ai-robot-umpire',
    name: 'AI Robot Umpire',
    description:
      "Computer-vision baseball umpire prototype that tracks a batter's pose, estimates a dynamic strike zone, simulates incoming pitches, and calls balls or strikes in real time.",
    stack: ['FastAPI', 'OpenCV', 'MediaPipe', 'React', 'Computer Vision'],
    github: 'https://github.com/srigan-s/AIRoboUmpire',
    media: {
      type: 'video',
      src: '/ai-robot-umpire.mov',
      alt: 'AI Robot Umpire webcam strike-zone prototype preview',
    },
  },
  {
    id: 'martinrea-factorysight-qa',
    name: 'Martinrea FactorySight QA',
    description:
      'Full-stack computer vision inspection station that captures webcam frames, runs an explainable OpenCV QA pipeline, stores results in SQLite, and displays live factory KPIs.',
    stack: ['Python', 'OpenCV', 'FastAPI', 'SQLite', 'React', 'TypeScript', 'TailwindCSS'],
    media: {
      type: 'video',
      src: '/martinrea-factorysight.mp4',
      alt: 'Martinrea FactorySight QA computer vision inspection dashboard preview',
    },
  },
  {
    id: 'miniai-web-app',
    name: 'MiniAI Web App',
    description: 'Gamified AI education platform for younger students, built as a live product experience.',
    stack: ['Next.js', 'React', 'PostgreSQL', 'Education'],
    github: 'https://github.com/srigan-s/MiniAIWebApp',
    demo: 'https://miniai.ca/',
    media: {
      type: 'video',
      src: '/miniai-preview.mov',
      alt: 'MiniAI web app preview',
    },
  },
  {
    id: 'cad-turret-build',
    name: 'Custom Turret CAD Build',
    description: 'Designed and built a turret in Onshape with physics-based iteration, goBILDA motor tuning, CNC plates, and 3D printed mounts.',
    stack: ['Onshape', 'CAD', 'goBILDA', 'CNC', '3D Printing', 'Mechanics'],
    demo: 'https://cad.onshape.com/documents/a19be521f238979b5c8bcd0f/w/52bc6631464a58f3948e8ccc/e/cc89d384c3c5cbe2717bc0b5?renderMode=0&uiState=6a0a5eaa6b77a2ef443cba0e',
    media: {
      type: 'image',
      src: '/onshape.png',
      alt: 'Onshape turret CAD preview',
    },
  },
  {
    id: 'trackqa',
    name: 'TrackQA',
    description:
      'Full-stack engineering dashboard for debugging optical and electromagnetic 3D tracking integrations with live 6D pose visualization.',
    stack: ['Java', 'WebSocket', 'React', 'TypeScript', 'Three.js', 'Gemini API'],
    media: {
      type: 'video',
      src: '/trackqa-demo.mov',
      alt: 'TrackQA 3D tracking dashboard preview',
    },
  },
  {
    id: 'colourmash-ai',
    name: 'ColourMashAI',
    description: "Cognitive support app for Alzheimer's and dementia users through pattern-recognition games.",
    stack: ['Next.js', 'React', 'OpenAI API', 'TensorFlow.js'],
    github: 'https://github.com/srigan-s/ColourMash',
    demo: 'https://colourmash.netlify.app/',
    media: {
      type: 'image',
      src: '/colourmash.png',
      alt: 'ColourMashAI interface preview',
    },
  },
  {
    id: 'lightlink',
    name: 'LightLink',
    description:
      'Browser-based optical modem firmware demo with BPSK modulation, noisy channel simulation, C++ DSP telemetry, and validation dashboards.',
    stack: ['C++', 'FastAPI', 'React', 'DSP', 'BPSK', 'ASIC telemetry'],
    media: {
      type: 'video',
      src: '/lightlink-dsp-firmware-simulator.mov',
      alt: 'LightLink optical modem firmware simulator dashboard preview',
    },
  },
  {
    id: 'kiwibot-hardware-health-monitor',
    name: 'KiwiBot Hardware Health Monitor',
    description:
      'Full-stack robotics diagnostics dashboard for an autonomous mobile EV charging robot, with live telemetry, hardware faults, safety interlocks, and overnight dispatch planning.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts', 'Node.js', 'Express', 'A* Planning'],
    media: {
      type: 'video',
      src: '/kiwibot-hardware-health-monitor.mov',
      alt: 'KiwiBot hardware health monitor robotics diagnostics dashboard preview',
    },
  },
  {
    id: 'arduino-beatsync',
    name: 'Arduino BeatSync',
    description: 'Physical audiovisual system that syncs LED behavior to music timing with Arduino control.',
    stack: ['Arduino', 'C++', 'PWM Timing', 'LED Control'],
    github: 'https://github.com/srigan-s/ArduinoBeatSync',
    demo: 'https://github.com/srigan-s/ArduinoBeatSync',
    media: {
      type: 'image',
      src: '/arduino.jpg',
      alt: 'Arduino BeatSync hardware preview',
    },
  },
  {
    id: 'recruitercall-ai',
    name: 'RecruiterCallAI',
    description: 'Interview simulator that generates recruiter-style prompts and feedback with AI-assisted flows.',
    stack: ['TypeScript', 'OpenAI API', 'React', 'PostgreSQL'],
    github: 'https://github.com/srigan-s/RecruiterCallAI',
    demo: 'https://recruitercallgan.netlify.app/',
    media: {
      type: 'image',
      src: '/recruitercall.png',
      alt: 'RecruiterCallAI preview',
    },
  },
];

const turretTrainingSnippet = `import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error

FEATURE_COLUMNS = [
    "rise_time",
    "settling_time",
    "overshoot_pct",
    "steady_state_error",
    "oscillation_score",
]

LABEL_COLUMNS = ["p_multiplier", "i_multiplier", "d_multiplier"]

df = pd.read_csv("datasets/step_features.csv").dropna(subset=LABEL_COLUMNS)
X = df[FEATURE_COLUMNS].fillna(0.0)

for label in LABEL_COLUMNS:
    X_train, X_test, y_train, y_test = train_test_split(
        X,
        df[label],
        test_size=0.2,
        random_state=42,
    )
    model = RandomForestRegressor(n_estimators=200, max_depth=8)
    model.fit(X_train, y_train)
    print(label, mean_absolute_error(y_test, model.predict(X_test)))`;

const factorySightInspectionSnippet = `if area_ratio < MIN_OBJECT_AREA_RATIO:
    defects.append("undersized_or_too_far")
    status = "FAIL"
elif area_ratio > MAX_OBJECT_AREA_RATIO:
    defects.append("oversized_or_too_close")
    status = "FAIL"
elif _object_touches_border(frame, detection):
    defects.append("partial_part")
    status = "REVIEW"
else:
    status = "PASS"`;

const projectById = (id: string) => projects.find((project) => project.id === id)!;

export type ProjectDetail = ProjectItem & {
  eyebrow: string;
  summary: string;
  year: string;
  role: string;
  heroVideo?: string;
  highlights: Array<{
    title: string;
    copy: string;
  }>;
  sections: Array<{
    title: string;
    copy: string;
  }>;
  videos?: Array<{
    title: string;
    src: string;
  }>;
  images?: Array<{
    title: string;
    src: string;
    alt: string;
  }>;
  code?: {
    label: string;
    snippet: string;
  };
};

export const projectDetails: ProjectDetail[] = [
  {
    ...projectById('kiwidock-ros2-ev-charging-dock'),
    eyebrow: 'ROS 2 Jazzy / Rust Safety Core / EV Charging Robotics',
    year: '2026',
    role: 'Robotics stack, safety supervisor, simulation, and dashboard',
    summary:
      'KiwiDock is a ROS 2 Jazzy robotics simulation for an autonomous mobile EV charging robot. The stack drives a robot from depot to dock, aligns an end effector with a Tesla Model 3-style charge port, verifies safety interlocks, and only enables charging when the system is safe.',
    heroVideo: '/kiwidock.mp4',
    highlights: [
      {
        title: 'Full Robotics Stack',
        copy:
          'Built as a ROS 2 system with Python rclpy nodes, URDF/Xacro robot description, standard ROS messages, RViz2 world visualization, and live browser telemetry.',
      },
      {
        title: 'Rust Safety Supervisor',
        copy:
          'Safety-critical docking logic lives in Rust with a typed state machine, unicycle control, sensor freshness checks, battery reserve checks, and ROS-free unit tests.',
      },
      {
        title: 'Human-zone SAFE_HOLD',
        copy:
          'A moving human actor crosses the docking area. When the zone is occupied, the robot publishes zero velocity, disables charging, enters SAFE_HOLD, and resumes automatically when clear.',
      },
    ],
    sections: [
      {
        title: 'Project overview',
        copy:
          'The demo starts the robot at a depot, routes it through a parking-lot scene, approaches a parked Tesla Model 3-style vehicle, aligns the end effector with the charging dock, verifies clearance, and enables charging only after the safety supervisor reaches a safe charging state.',
      },
      {
        title: 'ROS 2 simulation nodes',
        copy:
          'robot_sim.py applies a unicycle motion model from /cmd_vel and publishes /odom, /tf, and /robot_path. sensor_sim.py publishes LaserScan and BatteryState data with obstacle, stale-sensor, human-zone, and low-battery fault behavior. human_sim.py publishes the moving actor pose, path, presence, and safety-zone state.',
      },
      {
        title: 'World and supervisor bridge',
        copy:
          'world_visualizer.py renders the parking lot, vehicle, dock target, safety zone, robot path, human actor, faults, and status labels in RViz. docking_supervisor_adapter.py bridges ROS telemetry into the Rust core, then publishes /cmd_vel, /dock_state, /safety_events, /charging_enabled, and /status_markers.',
      },
      {
        title: 'Safety-critical Rust core',
        copy:
          'The Rust supervisor owns the docking state flow from IDLE through APPROACHING, FINE_ALIGNING, VERIFYING_CLEARANCE, DOCKED, CHARGING, and COMPLETE. Any obstacle, human-zone, stale sensor, low battery, pose tolerance, or yaw tolerance issue moves the system into SAFE_HOLD with charging disabled.',
      },
      {
        title: 'Live dashboard telemetry',
        copy:
          'dashboard_bridge.py converts ROS telemetry into JSON snapshots and Server-Sent Events for the React 19 dashboard. The browser view shows robot telemetry, battery state, obstacle range, human-zone status, docking state, connector gap, yaw error, and an SVG close-up of the end effector aligning with the charge port.',
      },
      {
        title: 'Build and validation stack',
        copy:
          'The system targets Ubuntu 24.04 on WSL2, ROS 2 Jazzy, Python rclpy nodes, Cargo for Rust builds and tests, colcon for workspace builds, RViz2 visualization, Vite frontend tooling, HTML/CSS/SVG visualization, and a 60 Hz simulation and telemetry update target.',
      },
    ],
    videos: [
      {
        title: 'KiwiDock autonomous docking and safety-hold walkthrough',
        src: '/kiwidock.mp4',
      },
    ],
  },
  {
    ...projectById('kiwibot-hardware-health-monitor'),
    eyebrow: 'Robotics Diagnostics / EV Charging / Dispatch',
    year: '2026',
    role: 'Full-stack robotics simulation and operations dashboard',
    summary:
      'KiwiBot Hardware Health Monitor models the diagnostic and operations layer for an autonomous mobile EV charging robot. It simulates real-time hardware telemetry, fault injection, charging safety checks, and overnight parking-lot dispatch planning in one full-stack technical demo.',
    heroVideo: '/kiwibot-hardware-health-monitor.mov',
    highlights: [
      {
        title: 'Hardware Health Simulation',
        copy:
          'Simulates battery voltage, state of charge, DC-DC rail health, current draw, PCB temperature, CAN/I2C status, motor driver readiness, robot state, and charging interlocks.',
      },
      {
        title: 'Fault and Safety Workflow',
        copy:
          'Models low battery, overcurrent, thermal fault, CAN heartbeat loss, I2C sensor failure, DC-DC rail sag, and motor driver failure so charging is blocked when safety checks fail.',
      },
      {
        title: 'Overnight Dispatch Planner',
        copy:
          'Generates EV requests, scores route candidates, plans lane-aware A* paths, and animates the robot through charging, skipped, and missed vehicles under time and battery constraints.',
      },
    ],
    sections: [
      {
        title: 'What it simulates',
        copy:
          'The dashboard behaves like a robotics operations console for a mobile EV charging robot. It continuously exposes robot telemetry, charging readiness, safety interlock state, diagnostic events, and active operating scenarios so the system can be inspected like real hardware under test.',
      },
      {
        title: 'Backend simulator',
        copy:
          'A TypeScript Node.js and Express API maintains the simulator state in memory and exposes endpoints for telemetry, scenario selection, system reset, and fault injection. When a hardware fault is triggered, the robot enters a fault state, diagnostic events are logged, and unsafe charging behavior is prevented.',
      },
      {
        title: 'Frontend diagnostics view',
        copy:
          'The React, TypeScript, Vite, TailwindCSS, Lucide, and Recharts frontend includes real-time metric cards, telemetry plots, a charging safety matrix, guided demo mode, pre-flight validation checks, diagnostic log export, and a visual power-path schematic.',
      },
      {
        title: 'Safety validation workflow',
        copy:
          'Fault scenarios are designed to mirror embedded validation thinking: rail sag, overcurrent, thermal limits, sensor bus failures, heartbeat loss, and motor driver readiness all feed into a clear pass/fail charging readiness decision instead of remaining isolated metrics.',
      },
      {
        title: 'Path Planner Beta',
        copy:
          'The overnight planner generates EV charging requests, estimates energy demand, considers deadlines, robot battery capacity, travel distance, charging time, and return-to-base requirements, then builds an optimized dispatch route through a mapped parking lot.',
      },
    ],
    videos: [
      {
        title: 'KiwiBot diagnostics and dispatch walkthrough',
        src: '/kiwibot-hardware-health-monitor.mov',
      },
    ],
  },
  {
    ...projectById('trackqa'),
    eyebrow: '3D Tracking / Java / Three.js',
    year: '2026',
    role: 'Full-stack engineering dashboard',
    summary:
      'TrackQA is a full-stack debugging workflow for OEM engineers integrating optical or electromagnetic 3D tracking systems. A Java backend simulates real-time 6D pose behavior, streams frames over WebSocket, and feeds a React + TypeScript dashboard that visualizes tracking state, detects integration issues, and generates engineering reports.',
    heroVideo: '/trackqa-demo.mov',
    highlights: [
      {
        title: '6D Pose Streaming',
        copy:
          'Built around a custom Java HTTP/WebSocket server that streams live position, orientation, RMS error, latency, dropped-frame, and tracking-state data into the dashboard.',
      },
      {
        title: '3D Debug View',
        copy:
          'Uses Three.js and React Three Fiber to render the tracked tool, measurement volume, target point, coordinate axes, and live path trail so integration failures are visible in context.',
      },
      {
        title: 'Diagnosis Workflow',
        copy:
          'Combines deterministic issue detection, Gemini-powered diagnosis, CSV export, and Markdown report generation for Jira, GitHub, or Confluence handoff.',
      },
    ],
    sections: [
      {
        title: 'What it simulates',
        copy:
          'The backend models both optical and electromagnetic tracking behavior, including line-of-sight obstruction, dropped frames, EM distortion drift, RMS error changes, latency spikes, and measurement-volume warnings. Simulator state is configurable so each scenario can be reproduced instead of treated as a random demo artifact.',
      },
      {
        title: 'Frontend engineering dashboard',
        copy:
          'The React, TypeScript, Vite, and TailwindCSS frontend is styled as a dark-mode engineering console with live metrics, configuration controls, issue detection, calibration results, AI diagnosis, and report generation. The 3D view makes the tracked tool, target, axes, and trail easy to inspect while the numeric panels expose the system health signals.',
      },
      {
        title: 'Issue detection',
        copy:
          'TrackQA uses deterministic rules to classify integration problems such as LINE_OF_SIGHT_OBSTRUCTION, EM_DISTORTION, LATENCY_SPIKE, OUT_OF_VOLUME, and CALIBRATION_FAILED. This gives the dashboard predictable engineering behavior even when the AI diagnosis layer is disabled.',
      },
      {
        title: 'Calibration and logging',
        copy:
          'The Java backend includes calibration logic, in-memory session logging, and CSV export endpoints for raw tracking frames. That lets an engineer move from live observation to reproducible evidence without leaving the tool.',
      },
      {
        title: 'AI diagnosis and reports',
        copy:
          'Gemini API integration turns tracking metrics and detected issues into a root-cause diagnosis, suggested next steps, and a Jira-style issue summary. When no Gemini API key is configured, TrackQA falls back to a local mock diagnosis so the demo stays fully functional.',
      },
    ],
    videos: [
      {
        title: 'TrackQA dashboard walkthrough',
        src: '/trackqa-demo.mov',
      },
    ],
  },
  {
    ...projectById('ros2-gnss-nav-demo'),
    eyebrow: 'ROS2 / GNSS / Linux Robotics',
    year: '2026',
    role: 'Robotics systems demo',
    summary:
      'A full ROS2 Jazzy navigation demo built around an RC-car-style robot that plans waypoint missions, ingests noisy GNSS and IMU measurements, and exposes the entire autonomy loop through RViz2 and post-run telemetry.',
    heroVideo: '/ros2-gnss-nav-demo.mov',
    highlights: [
      {
        title: 'GNSS / PNT',
        copy: 'Injects realistic GNSS noise into the navigation stack, then compares the estimated trajectory against ground truth so localization error is visible instead of hidden.',
      },
      {
        title: 'Mission Planning',
        copy: 'Executes waypoint progression, active-target selection, heading updates, and mission-state transitions in one loop rather than treating motion and visualization as separate demos.',
      },
      {
        title: 'Observability',
        copy: 'Surfaces transforms, obstacle overlays, estimated versus true paths, sensor frames, and run summaries so the system can be debugged like a real robotics stack.',
      },
    ],
    sections: [
      {
        title: 'RViz2 system view',
        copy:
          'The main scene shows the vehicle body, numbered waypoints, current goal, estimated and true trajectories, frame transforms, and obstacle boundaries. It is designed so a reviewer can understand what the robot thinks is happening at every moment.',
      },
      {
        title: 'Telemetry-first workflow',
        copy:
          'Each run exports structured CSV and JSON telemetry, making it easy to inspect path error, mission progress, and state transitions after the demo ends. That turns the project into both a visual showcase and a validation tool.',
      },
      {
        title: 'Stack',
        copy:
          'The stack uses Ubuntu 24.04, ROS2 Jazzy, Python with rclpy, tf2_ros, standard ROS messages, RViz2, Matplotlib, and a lightweight dashboard layer for run outputs.',
      },
    ],
    videos: [
      {
        title: 'Autonomous waypoint mission',
        src: '/ros2-gnss-nav-demo.mov',
      },
    ],
  },
  {
    ...projectById('turret-auto-align'),
    eyebrow: 'FRC / Vision / Controls',
    year: '2026',
    role: 'Controls and ML tuning',
    summary:
      'A vision-assisted FRC turret alignment system that combines Java robot logic, Limelight targeting, AprilTag measurements, and a Python tuning pipeline to keep the turret centered while the robot is moving.',
    heroVideo: '/turret-auto-align-field.mov',
    highlights: [
      {
        title: 'Vision Pipeline',
        copy: 'Combined Limelight values with AprilTag-based measurements to estimate target offset and maintain a stable lock under changing field conditions.',
      },
      {
        title: 'Java Control Loop',
        copy: 'Structured the robot loop around sensor refresh, PID correction, and fallback handling so the turret behaved predictably when targets dropped out.',
      },
      {
        title: 'ML-assisted Tuning',
        copy: 'Turned robot log data into response features and trained regressors that suggested improved PID multipliers from observed motion quality.',
      },
    ],
    sections: [
      {
        title: 'What it did',
        copy:
          'The turret continuously selected a target, computed angular error, and corrected aim while the rest of the robot was in motion. The goal was not just static accuracy, but stable tracking under realistic match movement.',
      },
      {
        title: 'How tuning worked',
        copy:
          'I exported drivetrain and turret logs, extracted rise time, settling time, overshoot, steady-state error, and oscillation metrics, then trained separate regressors for P, I, and D multipliers. That gave the controls workflow a repeatable data loop instead of pure manual tuning.',
      },
    ],
    videos: [
      {
        title: 'Turret view and target lock',
        src: '/turret-auto-align-screen-recording.mov',
      },
      {
        title: 'On-robot field test',
        src: '/turret-auto-align-field.mov',
      },
      {
        title: 'Alignment behavior pass',
        src: '/turret-auto-align-copy.mov',
      },
    ],
    code: {
      label: 'Python training backend',
      snippet: turretTrainingSnippet,
    },
  },
  {
    ...projectById('ai-robot-umpire'),
    eyebrow: 'Computer Vision / Baseball / FastAPI',
    year: '2026',
    role: 'Perception prototype and full-stack demo',
    summary:
      "AI Robot Umpire is a computer-vision prototype that uses a live webcam feed to estimate a batter's strike zone in real time, simulate incoming pitches, and deliver ball or strike calls with visual and audio umpire feedback.",
    heroVideo: '/ai-robot-umpire.mov',
    highlights: [
      {
        title: 'Pose-tracked Strike Zone',
        copy:
          "Uses MediaPipe pose landmarks to identify body reference points and generate a dynamic nipple-to-waist strike-zone overlay that follows the batter's stance.",
      },
      {
        title: 'Vision Backend',
        copy:
          'A FastAPI, OpenCV, and MediaPipe backend processes webcam frames, detects body landmarks, and streams the annotated video feed back to the browser.',
      },
      {
        title: 'Real-time Umpire Feedback',
        copy:
          'The React frontend simulates pitches entering from the left side of the frame, evaluates each crossing against the tracked zone, and calls balls or strikes instantly.',
      },
    ],
    sections: [
      {
        title: 'What it does',
        copy:
          'The prototype turns a webcam into a lightweight umpire assistant. As a batter steps into frame, the system estimates the strike zone from tracked body landmarks, overlays the zone on the video, and keeps updating it as the stance changes.',
      },
      {
        title: 'Backend perception loop',
        copy:
          'FastAPI serves the computer-vision pipeline while OpenCV handles frame capture and image processing. MediaPipe pose tracking provides the landmark data used to anchor the top and bottom of the zone, making the overlay responsive without requiring manual calibration.',
      },
      {
        title: 'Frontend game loop',
        copy:
          'The React interface streams the processed feed, animates incoming pitches from the left side of the frame, compares the pitch path against the live zone, and presents the result with on-screen and audio umpire feedback.',
      },
    ],
    videos: [
      {
        title: 'AI Robot Umpire webcam demo',
        src: '/ai-robot-umpire.mov',
      },
    ],
  },
  {
    ...projectById('martinrea-factorysight-qa'),
    eyebrow: 'Manufacturing QA / Computer Vision / FastAPI',
    year: '2026',
    role: 'Full-stack computer vision inspection system',
    summary:
      'Martinrea FactorySight QA is a full-stack computer vision inspection system that simulates a factory quality-control station. It captures webcam frames, processes them through a Python and OpenCV pipeline, classifies each workpiece as PASS, FAIL, or REVIEW, stores inspection results in SQLite, and displays live KPIs in a React dashboard.',
    heroVideo: '/martinrea-factorysight.mp4',
    highlights: [
      {
        title: 'Explainable Vision Rules',
        copy:
          'Uses a deterministic OpenCV pipeline that segments the part, finds contours, measures size and position, detects shape and material-color cues, and applies readable QA rules.',
      },
      {
        title: 'Factory-style Workflow',
        copy:
          'Models a controlled inspection station with webcam capture, pass/fail/review classification, defect labeling, inspection persistence, and live production metrics.',
      },
      {
        title: 'Full-stack Dashboard',
        copy:
          'FastAPI and SQLite back the inspection loop while a React, TypeScript, and TailwindCSS dashboard exposes recent results, status distribution, and QA KPIs.',
      },
    ],
    sections: [
      {
        title: 'Why I built it',
        copy:
          'I built FactorySight QA to show how edge computer vision can support automotive manufacturing quality control without needing a black-box model for every fixture. In a constrained station, rule-based inspection can be fast, explainable, and practical.',
      },
      {
        title: 'Inspection pipeline',
        copy:
          'Each frame is processed through a Python and OpenCV pipeline that isolates the workpiece, extracts contours, computes the bounding box and center point, checks object scale, flags partial parts, and uses shape plus material-color cues to classify the inspection result.',
      },
      {
        title: 'Pass, fail, or review',
        copy:
          'The system separates hard failures from review cases. Parts that are too small, too large, or incorrectly positioned can fail immediately, while ambiguous cases such as a part touching the frame border are marked for review instead of hidden behind a single confidence score.',
      },
      {
        title: 'Data and KPI layer',
        copy:
          'Inspection results are stored in SQLite so the dashboard can show live factory-style KPIs, recent inspections, defect trends, and the operational state of the station. That makes the project feel like a production support tool rather than just a webcam demo.',
      },
      {
        title: 'How it can extend',
        copy:
          'The architecture leaves room for YOLO or PyTorch defect models, PLC triggers, multi-camera inspection, fixture-specific calibration, and additional stations while keeping the first implementation transparent and easy to debug.',
      },
    ],
    videos: [
      {
        title: 'FactorySight QA inspection walkthrough',
        src: '/martinrea-factorysight.mp4',
      },
    ],
    code: {
      label: 'OpenCV inspection rule snippet',
      snippet: factorySightInspectionSnippet,
    },
  },
  {
    ...projectById('miniai-web-app'),
    eyebrow: 'Live Product / AI Education',
    year: '2026',
    role: 'Founding AI software engineer',
    summary:
      'A live AI learning platform for younger students, built around guided lessons, mini-games, and prompt-based interactions that make abstract AI ideas feel concrete and approachable.',
    heroVideo: '/miniai-preview.mov',
    highlights: [
      {
        title: 'Live Users',
        copy: 'Shaped as a live product with real learners in mind, so the engineering work had to support clarity, usability, and iteration instead of just a one-off demo.',
      },
      {
        title: 'Gamified Onboarding',
        copy: 'Introduced prompting, logic, and AI concepts through short guided flows that felt playful without losing educational structure.',
      },
      {
        title: 'Learning-first UX',
        copy: 'Balanced bright, game-like interactions with enough scaffolding to help students build durable mental models instead of clicking through content.',
      },
    ],
    sections: [
      {
        title: 'Product story',
        copy:
          'MiniAI was built so students could explore AI through structured experiences rather than being dropped into a blank prompt box. The product needed to feel safe, fast, and understandable from the first screen.',
      },
      {
        title: 'Engineering focus',
        copy:
          'Because it was live, the engineering focus extended beyond feature delivery. I had to think about onboarding friction, content pacing, responsiveness, and whether the interface actually made AI easier to understand for younger users.',
      },
    ],
    videos: [
      {
        title: 'MiniAI in action',
        src: '/miniai-preview.mov',
      },
    ],
  },
  {
    ...projectById('cad-turret-build'),
    eyebrow: 'CAD / Fabrication / Mechanisms',
    year: '2026',
    role: 'Mechanical and systems builder',
    summary:
      'A custom turret designed in Onshape and carried through fabrication, assembly, and repeated testing. The build combined CAD, physics calculations, goBILDA motor tuning, CNC-machined plates, and 3D printed mounts to reach a reliable final mechanism.',
    heroVideo: '/turret-auto-align-field.mov',
    highlights: [
      {
        title: 'CAD-first design',
        copy: 'Modeled the full turret in Onshape, using CAD to reason about plate geometry, bearing spacing, mounting locations, and assembly constraints before cutting material.',
      },
      {
        title: 'Motor and flywheel tuning',
        copy: 'Matched the goBILDA motor behavior to the flywheel material and overall mechanism response, tuning the system through repeated testing instead of assuming the first design would behave correctly.',
      },
      {
        title: 'Fabrication workflow',
        copy: 'Moved from digital design to physical build by CNC machining the main plates and 3D printing custom mounts, then iterating on fit, rigidity, and alignment after assembly.',
      },
    ],
    sections: [
      {
        title: 'How the design came together',
        copy:
          'The turret started as a CAD problem, not just a parts problem. I used Onshape to lay out the rotating structure, plate interfaces, and mounting geometry so the final assembly would be manufacturable and mechanically consistent before fabrication began.',
      },
      {
        title: 'Physics and mechanism iteration',
        copy:
          'To make the turret perform properly, I worked through the relationship between motor output, inertia, wheel behavior, and structural stiffness. That meant using calculations to guide the design, then validating those assumptions against real testing and adjusting the mechanism when the hardware disagreed.',
      },
      {
        title: 'Fabrication and assembly',
        copy:
          'The main structural plates were CNC machined for repeatability and rigidity, while custom 3D printed mounts handled geometry that was easier to iterate quickly in printed form. That split let me keep the critical structure strong while still moving quickly on the interfaces and supporting parts.',
      },
      {
        title: 'Why the tuning mattered',
        copy:
          'The goBILDA motor and the selected flywheel material had to be tuned together as one system. Small changes in wheel behavior, spin-up feel, and overall response affected how consistently the turret operated, so the final build came from repeated test cycles rather than a single pass design.',
      },
      {
        title: 'CAD link',
        copy:
          'The Onshape model documents the assembly decisions directly, from plate layout to mount placement, and served as the reference point for fabrication and iteration throughout the build.',
      },
    ],
    videos: [
      {
        title: 'Turret working on hardware',
        src: '/turret-auto-align-field.mov',
      },
      {
        title: 'Mechanism behavior pass',
        src: '/turret-auto-align-copy.mov',
      },
      {
        title: 'Targeting and actuation view',
        src: '/turret-auto-align-screen-recording.mov',
      },
    ],
    images: [
      {
        title: 'Main Onshape assembly',
        src: '/onshape.png',
        alt: 'Main Onshape assembly view of the custom turret',
      },
      {
        title: 'Top assembly view',
        src: '/onshapetop.png',
        alt: 'Top Onshape view of the custom turret assembly',
      },
      {
        title: 'Bottom assembly view',
        src: '/onshapebottom.png',
        alt: 'Bottom Onshape view of the custom turret assembly',
      },
      {
        title: 'Plate layout',
        src: '/onshapeplate.png',
        alt: 'Onshape plate layout for the custom turret build',
      },
      {
        title: 'Side plate geometry',
        src: '/onshapesideplates.png',
        alt: 'Onshape side plate geometry for the custom turret build',
      },
    ],
  },
  {
    ...projectById('colourmash-ai'),
    eyebrow: 'Health / AI / Web',
    year: '2026',
    role: 'Full-stack builder',
    summary:
      "A cognitive support web application for Alzheimer's and dementia users, centered on lightweight pattern-recognition activities and low-friction interactions.",
    highlights: [
      {
        title: 'Accessible Flow',
        copy: 'Kept the interface visual, sparse, and easy to follow so the app could be approached with minimal explanation.',
      },
      {
        title: 'AI-assisted Support',
        copy: 'Explored where AI and browser-based ML could assist with interaction design while keeping the primary experience understandable and calm.',
      },
      {
        title: 'Fast Web Prototype',
        copy: 'Shipped as a focused web product with low setup friction, making it easier to test and iterate on the core support experience.',
      },
    ],
    sections: [
      {
        title: 'What it explored',
        copy:
          'ColourMashAI explored how clear visual patterns, simple feedback, and lightweight interaction loops could support cognitive engagement without overwhelming the user.',
      },
      {
        title: 'Implementation focus',
        copy:
          'The build emphasized accessible navigation, fast browser performance, and simple game-like loops that could be used repeatedly without a complicated learning curve.',
      },
    ],
  },
  {
    ...projectById('lightlink'),
    eyebrow: 'Optical DSP / C++ / FastAPI',
    year: '2026',
    role: 'Firmware simulation and full-stack dashboard',
    summary:
      'LightLink is a browser-based optical modem firmware demo that turns random bits into BPSK symbols, sends them through a noisy optical channel, and runs a C++ firmware-style DSP loop for gain control, FIR filtering, demodulation, SNR, BER, MSE, and ASIC-style lock detection.',
    heroVideo: '/lightlink-dsp-firmware-simulator.mov',
    highlights: [
      {
        title: 'Firmware DSP Loop',
        copy:
          'The C++ simulator generates transmit bits, applies BPSK modulation, injects optical channel impairments, then runs gain control, FIR filtering, demodulation, and validation metrics.',
      },
      {
        title: 'Lab Automation API',
        copy:
          'FastAPI wraps the simulator with endpoints for simulation, sweeps, heatmaps, auto-tuning, telemetry, and generated firmware configuration output.',
      },
      {
        title: 'Validation Dashboard',
        copy:
          'The React dashboard visualizes waveforms, constellation plots, ASIC registers, channel stress presets, BER/SNR heatmaps, and a final PASS/FAIL report.',
      },
    ],
    sections: [
      {
        title: 'What it simulates',
        copy:
          'LightLink works like a small optical modem validation bench. It generates random transmit bits, maps them into BPSK symbols, and pushes the signal through optical impairments such as Gaussian noise, attenuation, phase drift, and burst noise before recovery.',
      },
      {
        title: 'C++ firmware engine',
        copy:
          'The core simulator reads simulated ASIC registers, applies RX gain or AGC, optionally uses fixed-point DSP, filters the received signal, demodulates recovered symbols, and computes SNR, BER, MSE, lock status, and error counters.',
      },
      {
        title: 'Backend automation layer',
        copy:
          'A FastAPI backend builds or runs the C++ simulator and serves structured JSON results for single simulations, parameter sweeps, heatmaps, auto-tuning runs, and telemetry inspection.',
      },
      {
        title: 'Frontend engineering display',
        copy:
          'The browser dashboard turns the telemetry into an interview-friendly lab view with pipeline animation, live signal charts, constellation diagrams, ASIC register monitoring, channel presets, BER/SNR heatmaps, and generated firmware configuration headers.',
      },
      {
        title: 'Validation workflow',
        copy:
          'The final report combines measured SNR, BER, MSE, register state, lock detection, and error counters into a PASS/FAIL validation result so each run feels like a firmware bring-up check instead of a static visualization.',
      },
    ],
    videos: [
      {
        title: 'LightLink firmware simulator walkthrough',
        src: '/lightlink-dsp-firmware-simulator.mov',
      },
    ],
  },
  {
    ...projectById('arduino-beatsync'),
    eyebrow: 'Arduino / Embedded / Audio',
    year: '2026',
    role: 'Embedded systems builder',
    summary:
      'A physical audiovisual build that uses Arduino-based timing and control logic to synchronize LED behavior with music and rhythm changes.',
    highlights: [
      {
        title: 'Timing Logic',
        copy: 'Used microcontroller timing patterns and event handling to coordinate light behavior with changes in audio rhythm.',
      },
      {
        title: 'Physical Build',
        copy: 'Connected software decisions to real hardware output, including LED behavior, wiring limitations, and power constraints.',
      },
      {
        title: 'Embedded C++',
        copy: 'Implemented the logic in Arduino C++ so the interaction felt responsive and stable in a physical build, not just in simulation.',
      },
    ],
    sections: [
      {
        title: 'What it explored',
        copy:
          'Arduino BeatSync explored how code can translate sound into a physical lighting response, turning rhythm into a visible, synchronized output.',
      },
      {
        title: 'System design',
        copy:
          'The project centered on the interaction between timing logic, LED control behavior, and embedded reliability so the final effect stayed in sync and visually readable.',
      },
    ],
  },
  {
    ...projectById('recruitercall-ai'),
    eyebrow: 'AI / Interview Practice',
    year: '2026',
    role: 'Full-stack builder',
    summary:
      'A technical interview simulator that generates recruiter-style prompts, structures practice sessions, and returns feedback through AI-assisted flows.',
    highlights: [
      {
        title: 'Prompt Flow',
        copy: 'Generated recruiter-style questions and follow-up loops so each practice run felt closer to a guided interview than a blank chatbot exchange.',
      },
      {
        title: 'Product Shell',
        copy: 'Wrapped the AI behavior in a usable product shell with a clear session flow, making the tool feel like an application rather than a script.',
      },
      {
        title: 'Practice Feedback',
        copy: 'Focused on fast iteration so users could answer, review, adjust, and retry without losing momentum between attempts.',
      },
    ],
    sections: [
      {
        title: 'What it does',
        copy:
          'RecruiterCallAI packages interview preparation into a guided flow where users receive prompts, respond, and get structured feedback instead of ad hoc AI output.',
      },
      {
        title: 'Engineering focus',
        copy:
          'The engineering work centered on keeping the feedback loop quick, the prompt generation coherent, and the overall experience close to real interview practice.',
      },
    ],
  },
];

export const skillGroups = [
  {
    title: 'Robotics',
    icon: Bot,
    skills: ['ROS2', 'GNSS/PNT', 'controls', 'AprilTags', 'Limelight', 'RViz2'],
  },
  {
    title: 'Embedded',
    icon: Cpu,
    skills: ['C++', 'Arduino', 'microcontrollers', 'sensors', 'PCB validation'],
  },
  {
    title: 'Software',
    icon: Braces,
    skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'SQL'],
  },
  {
    title: 'AI / Perception',
    icon: RadioTower,
    skills: ['OpenCV', 'TensorFlow', 'OpenAI API', 'ML tuning', 'data workflows'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Git', 'Linux', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'oscilloscope'],
  },
];
