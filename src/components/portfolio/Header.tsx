'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
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
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 md:px-4 md:py-4">
      <nav
        aria-label="Primary navigation"
        className="content-shell flex items-center justify-between gap-2 md:gap-4"
      >
        <a
          className="quiet-panel inline-flex px-3 py-2 text-sm font-semibold transition duration-300 hover:border-[color:var(--line-strong)]"
          data-cursor="hover"
          href="#home"
          onClick={() => setOpen(false)}
        >
          SS
        </a>

        <div className="quiet-panel mx-auto hidden items-center gap-1 p-1 backdrop-blur-xl md:flex md:mx-0">
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

        <div className="hidden items-center gap-2 md:flex">
          <a
            className="link-button hidden md:inline-flex"
            data-cursor="hover"
            href={`https://drive.google.com/drive/u/0/folders/1Krbx7DbU7BJvlMt0zsL7BW4rIW90jJy-`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>
          <NavRobot targetId="navigation-robot-desktop" />
          <a
            className="link-button hidden md:inline-flex"
            data-cursor="hover"
            href={`mailto:${profile.email}`}
          >
            Email
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1.5 md:hidden">
          <NavRobot targetId="navigation-robot-mobile" />
          <ThemeToggle />
          <button
            aria-expanded={open}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            className="link-button h-10 w-10 p-0"
            data-cursor="hover"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="content-shell md:hidden">
          <div className="quiet-panel mt-2 grid gap-1 p-2 backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                className="rounded-md px-3 py-2 text-sm font-medium muted-copy transition duration-300 hover:bg-[color:var(--bg-muted)] hover:text-[color:var(--text)]"
                data-cursor="hover"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                className="accent-button"
                data-cursor="hover"
                href="https://drive.google.com/drive/u/0/folders/1Krbx7DbU7BJvlMt0zsL7BW4rIW90jJy-"
                onClick={() => setOpen(false)}
                rel="noopener noreferrer"
                target="_blank"
              >
                Resume
              </a>
              <a className="link-button" data-cursor="hover" href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
                Email
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
