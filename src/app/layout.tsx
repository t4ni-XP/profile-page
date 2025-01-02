import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "Mizuki TANIGUCHI's Portfolio",
  // description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
