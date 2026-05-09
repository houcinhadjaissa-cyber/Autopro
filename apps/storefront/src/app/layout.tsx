import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Home, Search, ShoppingCart, MessageSquare, User } from "lucide-react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Autopro — Automotive Ecosystem",
  description: "Parts marketplace, service booking, and vehicle garage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} bg-canvas text-gray-800 pb-20`}>
        
        {/* ─── Top Mobile Bar (Matching your live preview) ─── */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between shadow-sm">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-inner">
              A
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">Autopro</span>
          </Link>

          <div className="flex items-center gap-3">
            {/* Live Chat Icon with Badge */}
            <Link href="/chat" className="relative p-2 text-gray-500 hover:text-primary transition-colors">
              <MessageSquare className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                2
              </span>
            </Link>
          </div>
        </header>

        {/* ─── Main Content ─── */}
        <div className="max-w-md mx-auto min-h-screen shadow-sm bg-white">
          {children}
        </div>

        {/* ─── Beautiful Mobile Bottom Navigation Bar ─── */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 py-2 px-4 shadow-lg max-w-md mx-auto">
          <div className="flex items-center justify-between text-gray-400">
            
            <Link href="/" className="flex flex-col items-center gap-1 text-primary">
              <Home className="w-5 h-5" />
              <span className="text-[10px] font-medium">Home</span>
            </Link>

            <Link href="/search" className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
              <span className="text-[10px] font-medium">Search</span>
            </Link>

            <Link href="/cart" className="flex flex-col items-center gap-1 hover:text-primary transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 right-2 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                1
              </span>
              <span className="text-[10px] font-medium">Cart</span>
            </Link>

            <Link href="/services" className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
              <MessageSquare className="w-5 h-5" />
              <span className="text-[10px] font-medium">Chat</span>
            </Link>

            <Link href="/garage" className="flex flex-col items-center gap-1 hover:text-primary transition-colors">
              <User className="w-5 h-5" />
              <span className="text-[10px] font-medium">Profile</span>
            </Link>

          </div>
        </nav>

      </body>
    </html>
  );
}
