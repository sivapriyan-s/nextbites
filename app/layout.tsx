import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Find your next bite",
  description: "Simple, delicious recipes for whatever you're craving.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="nav-shell" aria-label="Main navigation">
            <Link className="brand" href="/">
              <span className="brand-mark" aria-hidden="true">n</span>
              <span>next<span className="brand-accent">bites</span></span>
            </Link>
            <Link className="nav-link" href="#recipes">
              Explore recipes <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <p>Made with a little appetite. <span aria-hidden="true">♥</span></p>
        </footer>
      </body>
    </html>
  );
}
