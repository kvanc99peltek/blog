import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kivanc (Kevanch) Peltek - Blog",
  description: "Personal blog and thoughts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <header className="border-b border-white/10">
          <div className="max-w-2xl mx-auto py-8 px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Kivanc (Kevanch) Peltek</h1>
            <div className="flex gap-6 justify-center">
              <a
                href="https://x.com/kvnc99peltek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://www.youtube.com/@kvancpeltek538"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://www.linkedin.com/in/kivancpltk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
