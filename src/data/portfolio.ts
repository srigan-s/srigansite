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
    role: 'Robotics Engineering Intern',
    company: 'Wiz Robotics',
    // TODO: Replace with the exact internship date range from your resume.
    date: '2025',
    impact: 'Built robotics integrations across IoT software, perception, and hardware validation.',
    image: '/wizrobotics.webp',
    tags: ['Robotics', 'OpenCV', 'Embedded'],
  },
  {
    id: 'baycrest',
    role: 'Software Engineer Intern',
    company: 'Baycrest',
    // TODO: Replace with the exact internship date range from your resume.
    date: '2024',
    impact: "Shipped full-stack product work for Daisy's Journey with usability and reliability in focus.",
    image: '/bay.png',
    tags: ['React', 'TypeScript', 'MongoDB'],
  },
  {
    id: 'miniai',
    role: 'Founding AI Software Engineer',
    company: 'MiniAI',
    // TODO: Replace with the exact role date range from your resume.
    date: '2024 - Present',
    impact: 'Led engineering for a gamified AI learning platform for younger students.',
    image: '/miniAi.png',
    tags: ['AI', 'Product', 'Full-stack'],
  },
  {
    id: 'watonomous',
    role: 'Electrical Engineer',
    company: 'WATonomous',
    // TODO: Replace with the exact design team date range from your resume.
    date: '2024 - Present',
    impact: 'Developed and validated vehicle control hardware for autonomous systems work.',
    image: '/wato.jpeg',
    tags: ['Controls', 'PCB', 'Testing'],
  },
  {
    id: 'uwaterloo-research',
    role: 'Student Researcher',
    company: 'University of Waterloo',
    // TODO: Replace with the exact research date range from your resume.
    date: '2024',
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
  code?: {
    label: string;
    snippet: string;
  };
};

export const projectDetails: ProjectDetail[] = [
  {
    ...projects[0],
    eyebrow: 'ROS2 / GNSS / Linux Robotics',
    year: '2025',
    role: 'Robotics systems demo',
    summary:
      'A software-only ROS2 Jazzy simulation of an RC-car-style robot running an autonomous waypoint mission with noisy GNSS and IMU data.',
    heroVideo: '/ros2-gnss-nav-demo.mov',
    highlights: [
      {
        title: 'GNSS / PNT',
        copy: 'Simulates noisy GNSS measurements and validates navigation performance against true path data.',
      },
      {
        title: 'Mission Planning',
        copy: 'Runs autonomous waypoint following with active target selection, route state, and mission telemetry.',
      },
      {
        title: 'Observability',
        copy: 'Shows transforms, sensor noise, estimated path, true path, obstacles, and post-run validation plots.',
      },
    ],
    sections: [
      {
        title: 'RViz2 system view',
        copy:
          'The demo opens into a visual robotics scene with the RC car body, numbered waypoints, planned route, active target, GNSS and IMU frames, obstacle overlays, and mission status text.',
      },
      {
        title: 'Telemetry-first workflow',
        copy:
          'The system records CSV and JSON telemetry so each run can be inspected after the mission. That makes it useful as both a robotics demo and a validation artifact.',
      },
      {
        title: 'Stack',
        copy:
          'Ubuntu 24.04 VM, ROS2 Jazzy, Python/rclpy, standard ROS messages, tf2_ros, RViz2, Matplotlib, and a local dashboard layer.',
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
    ...projects[1],
    eyebrow: 'FRC / Vision / Controls',
    year: '2024',
    role: 'Controls and ML tuning',
    summary:
      'A vision-assisted FRC turret alignment system using Java control logic, Limelight values, AprilTag readings, and a Python tuning pipeline.',
    heroVideo: '/turret-auto-align-field.mov',
    highlights: [
      {
        title: 'Vision Pipeline',
        copy: 'Fused Limelight targeting values with AprilTag readings to estimate angle error and keep the turret centered.',
      },
      {
        title: 'Java Control Loop',
        copy: 'Structured the robot loop around sensor updates, PID correction, and safe fallback behavior when targets were lost.',
      },
      {
        title: 'ML-assisted Tuning',
        copy: 'Converted robot logs into response features and trained regressors to suggest better PID multipliers.',
      },
    ],
    sections: [
      {
        title: 'What it did',
        copy:
          'The turret used target readings to choose a lock, correct angle error, and stay centered while the drivetrain was moving.',
      },
      {
        title: 'How tuning worked',
        copy:
          'I exported robot logs, extracted rise time, settling time, overshoot, steady-state error, and oscillation features, then trained separate regressors for P, I, and D multipliers.',
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
    ...projects[2],
    eyebrow: 'Live Product / AI Education',
    year: '2024',
    role: 'Founding AI software engineer',
    summary:
      'A live gamified learning platform that helps younger students explore artificial intelligence through lessons, mini-games, and guided prompts.',
    heroVideo: '/miniai-preview.mov',
    highlights: [
      {
        title: 'Live Users',
        copy: 'Built as a real product rather than a static prototype, with product decisions shaped by ongoing usage.',
      },
      {
        title: 'Gamified Onboarding',
        copy: 'Designed approachable flows for younger learners to build intuition for prompting, logic, and core AI concepts.',
      },
      {
        title: 'Learning-first UX',
        copy: 'Balanced playful interactions with enough structure to teach durable mental models.',
      },
    ],
    sections: [
      {
        title: 'Product story',
        copy:
          'MiniAI was designed so kids can explore AI through structured experiences instead of a blank chat box. The product had to feel approachable, clear, and fast.',
      },
      {
        title: 'Engineering focus',
        copy:
          'Because it was live, I had to think beyond the demo: retention, content flow, load performance, and how understandable the interface felt for younger users.',
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
    ...projects[3],
    eyebrow: 'Health / AI / Web',
    year: '2024',
    role: 'Full-stack builder',
    summary:
      "A cognitive support web app for Alzheimer's and dementia users through lightweight pattern-recognition activities.",
    highlights: [
      {
        title: 'Accessible Flow',
        copy: 'Kept interactions simple and visual so the experience could be used without heavy instruction.',
      },
      {
        title: 'AI-assisted Support',
        copy: 'Explored AI and browser-based ML as part of the support and interaction layer.',
      },
      {
        title: 'Fast Web Prototype',
        copy: 'Shipped as a focused web product with a clean interface and low setup friction.',
      },
    ],
    sections: [
      {
        title: 'What it explored',
        copy:
          'ColourMashAI focuses on clear visual patterns, simple feedback, and approachable exercises for cognitive support contexts.',
      },
      {
        title: 'Edit this later',
        copy:
          'TODO: Replace this placeholder with exact project metrics, user feedback, or implementation details from your final write-up.',
      },
    ],
  },
  {
    ...projects[4],
    eyebrow: 'Arduino / Embedded / Audio',
    year: '2024',
    role: 'Embedded systems builder',
    summary:
      'A physical audiovisual project that uses Arduino control logic to sync LED behavior with music timing.',
    highlights: [
      {
        title: 'Timing Logic',
        copy: 'Used microcontroller timing patterns to coordinate LED behavior with audio rhythm.',
      },
      {
        title: 'Physical Build',
        copy: 'Connected software control to real LED output, wiring, and hardware constraints.',
      },
      {
        title: 'Embedded C++',
        copy: 'Implemented the control behavior with Arduino and C++ for a responsive physical interaction.',
      },
    ],
    sections: [
      {
        title: 'What it explored',
        copy:
          'Arduino BeatSync connects code to a physical audiovisual experience, using timing and LED control to make music feel visible.',
      },
      {
        title: 'Edit this later',
        copy:
          'TODO: Add exact circuit details, LED strip type, audio input approach, and demo results from the final build notes.',
      },
    ],
  },
  {
    ...projects[5],
    eyebrow: 'AI / Interview Practice',
    year: '2024',
    role: 'Full-stack builder',
    summary:
      'A technical interview simulator that generates recruiter-style prompts and feedback through AI-assisted flows.',
    highlights: [
      {
        title: 'Prompt Flow',
        copy: 'Generated recruiter-style questions and feedback loops for practice sessions.',
      },
      {
        title: 'Product Shell',
        copy: 'Structured the experience as a usable app rather than a one-off script.',
      },
      {
        title: 'Practice Feedback',
        copy: 'Focused on quick iteration so users could practice, adjust, and retry.',
      },
    ],
    sections: [
      {
        title: 'What it does',
        copy:
          'RecruiterCallAI packages interview practice into a guided flow with AI-generated prompts and response feedback.',
      },
      {
        title: 'Edit this later',
        copy:
          'TODO: Replace this placeholder with the exact architecture, database model, or product metrics from your final project notes.',
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
