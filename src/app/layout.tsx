import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASCII Frame - ASCII Wireframe Design Tool",
  description:
    "Design and preview ASCII wireframes in real-time. A text-first UI design tool for creating wireframes and mockups using ASCII art syntax.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
