import type { Metadata } from "next";

import "./globals.css";
import { ubuntu, geistMono } from "@/components/ui/fonts";

// const ubuntuSans = Ubuntu_Sans({
//   variable: "--font-ubuntu-sans",
//   subsets: ["latin"],
// });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Teki Quotes",
  description: "Generate quotes for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
