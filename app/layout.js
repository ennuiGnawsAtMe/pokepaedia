import './globals.css';

// Layouts must accept a children prop.
// This will be populated with nested layouts or pages

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen">{children}</body>
    </html>
  );
}
