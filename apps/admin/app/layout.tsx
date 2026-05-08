// apps/admin/app/layout.tsx
// Root layout for Autopro 2.0
// Includes basic meta tags and font loading

export const metadata = {
  title: 'Autopro — Automotive Ecosystem',
  description: 'Parts, services, and vehicle management for Algeria & Nigeria',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#00D084',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="font-sans antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
