'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const getTimeBasedTheme = (): Theme => {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19 ? 'light' : 'dark';
};

const getPreferredTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';

  const storedTheme = window.localStorage.getItem('theme');
  if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;

  return getTimeBasedTheme();
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);
    setMounted(true);
    document.documentElement.classList.toggle('dark', preferredTheme === 'dark');
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [mounted, theme]);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const Icon = theme === 'dark' ? Moon : Sun;

  return (
    <button
      aria-label={`Switch to ${nextTheme} mode`}
      className="link-button h-10 w-10 p-0"
      data-cursor="hover"
      onClick={() => {
        window.localStorage.setItem('theme', nextTheme);
        setTheme(nextTheme);
      }}
      type="button"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
