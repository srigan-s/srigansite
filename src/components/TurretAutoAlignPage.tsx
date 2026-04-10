import React from 'react';
import { ArrowLeft, ChevronRight, Code2, Crosshair, Film, Sparkles } from 'lucide-react';
import { navigateTo } from '../lib/navigation';

const trainingSnippet = `import os
import pandas as pd
import joblib
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error

DATASET_PATH = "datasets/step_features.csv"
MODEL_DIR = "models"

FEATURE_COLUMNS = [
    "current_p",
    "current_i",
    "current_d",
    "target_step",
    "move_direction",
    "rise_time",
    "settling_time",
    "overshoot_pct",
    "steady_state_error",
    "oscillation_score",
    "mae",
    "power_sat_ratio",
    "time_to_first_movement",
]

LABEL_COLUMNS = ["p_multiplier", "i_multiplier", "d_multiplier"]

os.makedirs(MODEL_DIR, exist_ok=True)

def load_training_data():
    if not os.path.exists(DATASET_PATH):
        raise FileNotFoundError(f"Dataset not found: {DATASET_PATH}")

    df = pd.read_csv(DATASET_PATH)
    df = df.dropna(subset=LABEL_COLUMNS)

    if len(df) < 20:
        raise ValueError("Not enough labeled rows to train a model.")

    df[FEATURE_COLUMNS] = df[FEATURE_COLUMNS].fillna(0.0)
    return df

def train_one_model(X, y, name):
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2, random_state=42
    )

    model = RandomForestRegressor(
        n_estimators=200,
        max_depth=8,
        random_state=42
    )

    model.fit(X_train, y_train)
    preds = model.predict(X_test)
    mae = mean_absolute_error(y_test, preds)
    print(f"{name} MAE: {mae:.6f}")
    return model`;

const videos = [
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
];

const TurretAutoAlignPage = () => {
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
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="reveal reveal-visible">
              <span className="accent-pill">
                <Sparkles className="mr-2 h-3.5 w-3.5 fill-current" />
                Featured Project
              </span>
              <h1 className="mt-7 text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl" style={{ fontFamily: 'Syne, sans-serif' }}>
                Turret Auto Align
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)]">
                A vision-assisted turret alignment system for an FRC robot that used Java on the
                robot, Limelight values and AprilTag readings for target acquisition, and a Python
                machine learning pipeline to tune PID behavior from robot logs.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Java', 'Limelight', 'AprilTag', 'PID Control', 'Python', 'Scikit-Learn', 'NumPy'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:var(--line)] bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="section-card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)]/10 via-transparent to-white/5" />
              <video
                className="relative h-[24rem] w-full rounded-[1.5rem] object-cover"
                src="/turret-auto-align-field.mov"
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

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="section-card">
            <Crosshair className="h-8 w-8 text-[color:var(--accent)]" />
            <h2 className="mt-4 text-2xl font-bold text-white">Vision pipeline</h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
              The robot fused Limelight targeting values with AprilTag readings to estimate angle
              error, choose a target lock, and keep the turret centered even while the drivetrain was moving.
            </p>
          </div>
          <div className="section-card">
            <Code2 className="h-8 w-8 text-[color:var(--accent)]" />
            <h2 className="mt-4 text-2xl font-bold text-white">Java control loop</h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
              I implemented the turret logic in Java and structured the control loop around sensor
              updates, PID correction, and safe fallback behavior when a target was lost.
            </p>
          </div>
          <div className="section-card">
            <ChevronRight className="h-8 w-8 text-[color:var(--accent)]" />
            <h2 className="mt-4 text-2xl font-bold text-white">ML-assisted tuning</h2>
            <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
              I exported robot logs, extracted response features, and trained regressors to predict
              better PID multipliers so tuning moved faster than manual trial and error alone.
            </p>
          </div>
        </section>

        <section className="section-shell">
          <div className="section-intro">
            <span className="section-kicker">Embedded Video</span>
            <h2 className="section-title">Three looks at how the turret behaved in testing.</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {videos.map((video, index) => (
              <div
                key={video.src}
                className="section-card overflow-hidden"
                style={{ animation: `slide-up 900ms ease ${index * 120}ms both` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <Film className="h-5 w-5 text-[color:var(--accent)]" />
                  <h3 className="text-lg font-bold text-white">{video.title}</h3>
                </div>
                <video
                  className="h-[28rem] w-full rounded-[1.25rem] object-cover"
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="section-kicker">How It Worked</span>
              <h2 className="section-title">Logs in, features out, PID suggestions back to the robot.</h2>
              <p className="section-copy">
                The workflow was built around recorded step-response data from the robot. I used
                Python to clean log exports, compute response features like rise time and overshoot,
                then trained separate regressors for P, I, and D multipliers.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--muted)]">
                That let me compare each run, measure control quality, and generate more informed
                tuning recommendations before the next hardware test session.
              </p>
            </div>

            <div className="section-card overflow-hidden p-0">
              <div className="border-b border-white/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--accent-soft)]">
                Python training backend
              </div>
              <pre className="overflow-x-auto p-6 text-xs leading-6 text-white/80">
                <code>{trainingSnippet}</code>
              </pre>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TurretAutoAlignPage;
