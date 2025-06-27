import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dopetrope - HTML5 UP Template",
  description: "A responsive template by HTML5 UP converted to Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
