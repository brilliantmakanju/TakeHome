import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="xl:mx-auto  xl:container">{children}</body>
    </html>
  );
}
