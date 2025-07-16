import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pip-Boy Portfolio | Software Engineer",
  description: "Interactive Pip-Boy themed portfolio showcasing software engineering projects and skills",
  keywords: ["software engineer", "portfolio", "developer", "pip-boy", "fallout"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Pip-Boy Portfolio",
    description: "Interactive developer portfolio inspired by Fallout's Pip-Boy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
