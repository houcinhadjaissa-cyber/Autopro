import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const meta Metadata = {
  title: "Autopro Admin - Dashboard",
  description: "Manage your Autopro platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-canvas text-white`}>
        {children}
      </body>
    </html>
  );
}
