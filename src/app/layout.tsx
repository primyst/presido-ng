import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-slate-900 text-white">{children}</body>
    </html>
  );
}
