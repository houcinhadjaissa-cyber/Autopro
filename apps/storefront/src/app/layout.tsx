import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Autopro Ecosystem",
  description: "Mobile automotive marketplace and garage.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} bg-canvas text-gray-800 pb-20 antialiased`}>
        
        {/* ─── Sleek Mobile Top Bar ─── */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between shadow-sm max-w-md mx-auto">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#6FB81A] rounded-lg flex items-center justify-center text-white font-bold text-base shadow-sm">
              A
            </div>
            <span className="font-bold text-lg tracking-tight text-gray-900">Autopro</span>
          </Link>

          {/* Native SVG Chat Icon with Badge */}
          <Link href="/services" className="relative p-1 text-gray-500">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-white">
              2
            </span>
          </Link>
        </header>

        {/* ─── Main Mobile Frame ─── */}
        <div className="max-w-md mx-auto min-h-screen bg-white shadow-sm">
          {children}
        </div>

        {/* ─── Indestructible Native SVG Bottom Navigation Bar ─── */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 py-2 px-4 shadow-lg max-w-md mx-auto">
          <div className="flex items-center justify-between text-gray-400 px-2">
            
            <Link href="/" className="flex flex-col items-center gap-0.5 text-[#6FB81A]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <span className="text-[9px] font-medium">Home</span>
            </Link>

            <Link href="/search" className="flex flex-col items-center gap-0.5 hover:text-[#6FB81A]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span className="text-[9px] font-medium">Search</span>
            </Link>

            <Link href="/cart" className="flex flex-col items-center gap-0.5 hover:text-[#6FB81A] relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z"></path></svg>
              <span className="absolute -top-1 right-1 w-3.5 h-3.5 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">1</span>
              <span className="text-[9px] font-medium">Cart</span>
            </Link>

            <Link href="/services" className="flex flex-col items-center gap-0.5 hover:text-[#6FB81A]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>
              <span className="text-[9px] font-medium">Chat</span>
            </Link>

            <Link href="/garage" className="flex flex-col items-center gap-0.5 hover:text-[#6FB81A]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <span className="text-[9px] font-medium">Profile</span>
            </Link>

          </div>
        </nav>

      </body>
    </html>
  );
}
