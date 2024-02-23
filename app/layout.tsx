import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AnalyticsVercel } from "@/components/vercel-analytics";
import { ModeToggle } from "@/components/mode-toggle";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Logo } from "@/components/Logo";
import { Metadata } from "next";
import { SpeedInsightsVercel } from "@/components/SpeedInsightsVercel";
import seoConfig from '@/utils/seoConfig'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dâmocles Gil Marçal",
  description:
    "A blog by a front-end engineer who likes anime, games, vuejs and nextjs.",
    ...seoConfig,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between">
                <Link href="/">
                  <Logo />
                </Link>
                <nav className="flex ml-auto text-sm font-medium space-x-6">
                  <Link href="/" className="text-white">Home</Link>
                  <Link href="/about" className="text-white1">About</Link>
                  <Link href="/setup" className="text-white1">Setup</Link>
                  <ModeToggle />
                </nav>
              </div>
            </header>
            <main>{children}</main>
          </div>

          <footer className="flex justify-center pb-5">
            <a
              href="https://github.com/damoclesgil/"
              target="blank"
              className="mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github "
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a
              className="ml-2"
              href="https://instagram.com/damoclesgil"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram "
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <p className="sr-only">Instagram</p>
            </a>
            <a
              className="ml-4"
              href="https://twitch.tv/the_gandas"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitch "
              >
                <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
              </svg>
              <p className="sr-only">Twitch</p>
            </a>
          </footer>
          <AnalyticsVercel />
          <SpeedInsightsVercel />
          <GoogleAnalytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
