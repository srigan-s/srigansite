'use client';

import { profile } from '@/data/portfolio';
import { NavRobot } from './NavRobot';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#github', label: 'GitHub' },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <nav
        aria-label="Primary navigation"
        className="content-shell flex items-center justify-between gap-4"
      >
        <a
          className="quiet-panel hidden px-3 py-2 text-sm font-semibold transition duration-300 hover:border-[color:var(--line-strong)] md:inline-flex"
          data-cursor="hover"
          href="#home"
        >
          SS
        </a>

        <div className="quiet-panel mx-auto flex items-center gap-1 p-1 backdrop-blur-xl md:mx-0">
          {navItems.map((item) => (
            <a
              className="px-3 py-2 text-sm font-medium muted-copy transition duration-300 hover:text-[color:var(--text)]"
              data-cursor="hover"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            className="link-button hidden md:inline-flex"
            data-cursor="hover"
            href={`https://drive.google.com/drive/u/0/folders/1Krbx7DbU7BJvlMt0zsL7BW4rIW90jJy-`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>
          <NavRobot />
          <a
            className="link-button hidden md:inline-flex"
            data-cursor="hover"
            href={`mailto:${profile.email}`}
          >
            Email
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
