import type { Metadata } from "next";

export const meta Metadata = {
  title: "Autopro API",
  description: "Backend API for Autopro platform",
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
