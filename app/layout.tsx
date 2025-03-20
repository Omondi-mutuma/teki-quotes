import type { Metadata } from "next";

import "./globals.css";
import { ubuntu, geistMono } from "@/components/ui/fonts";

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
    <html lang="en" >
      <body className={`${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
