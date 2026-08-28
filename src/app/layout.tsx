import type { Metadata } from 'next';
import { CustomCursor } from '@/components/portfolio/CustomCursor';
import { RobotIntro } from '@/components/portfolio/RobotIntro';
import { GameHUD } from '@/components/robot-game/GameHUD';
import { RobotGameProvider } from '@/components/robot-game/RobotGameProvider';
import { UnlockNotification } from '@/components/robot-game/UnlockNotification';
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
    const hour = new Date().getHours();
    const timeTheme = hour >= 7 && hour < 19 ? 'light' : 'dark';
    const theme = stored === 'light' || stored === 'dark' ? stored : timeTheme;
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch (_) {}
})();`,
          }}
        />
        <RobotGameProvider>
          <RobotIntro />
          <CustomCursor />
          <GameHUD />
          <UnlockNotification />
          {children}
        </RobotGameProvider>
      </body>
    </html>
  );
}
