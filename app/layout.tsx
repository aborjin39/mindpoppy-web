import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MindPoppy — Mind Balloons",
  description: "Capture your ideas as floating balloons. Repeat ideas grow bigger, pop the rest. Personal & group brainstorming.",
  keywords: "idea capture, brainstorming, mind map, productivity, balloon, mindpoppy",
  openGraph: {
    title: "MindPoppy — Mind Balloons",
    description: "Capture your ideas as floating balloons.",
    url: "https://mindpoppy.com",
    siteName: "MindPoppy",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,500;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen">
        {children}
        <footer className="border-t border-white/5 py-10 px-6 text-center">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm" style={{color:'var(--text-muted)'}}>
              © 2025 MindPoppy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-sm hover:text-white transition" style={{color:'var(--text-muted)'}}>Privacy</a>
              <a href="/terms" className="text-sm hover:text-white transition" style={{color:'var(--text-muted)'}}>Terms</a>
              <a href="/support" className="text-sm hover:text-white transition" style={{color:'var(--text-muted)'}}>Support</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
