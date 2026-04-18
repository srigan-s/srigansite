import type { Metadata } from 'next';
import { CustomCursor } from '@/components/portfolio/CustomCursor';
import { RobotIntro } from '@/components/portfolio/RobotIntro';
import './globals.css';

export const metadata: Metadata = {
  title: 'Srigan Sivagnanenthirarajah',
  description:
    'Electrical Engineering portfolio for Srigan Sivagnanenthirarajah, focused on robotics, controls, embedded systems, and software.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
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
