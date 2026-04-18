import type { Metadata } from 'next';
import { CustomCursor } from '@/components/portfolio/CustomCursor';
import { RobotIntro } from '@/components/portfolio/RobotIntro';
import './globals.css';

export const metadata: Metadata = {
  title: 'Srigan Sivagnanenthirarajah',
  description:
    'Electrical Engineering portfolio for Srigan Sivagnanenthirarajah, focused on robotics, controls, embedded systems, and software.',
  icons: {
    icon: [{ url: '/robot-favicon.svg', type: 'image/svg+xml' }],
    shortcut: ['/robot-favicon.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch (_) {}
})();`,
          }}
        />
        <RobotIntro />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
