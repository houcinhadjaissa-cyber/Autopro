import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Autopro - Automotive Parts & Services Marketplace",
  description: "Find compatible car parts, book services, and manage your vehicle history",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-canvas text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
