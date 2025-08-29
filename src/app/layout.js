import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Subhajit Chakraborty',
  description: 'Software Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/fav.png" />
      </head>
      <body className={inter.className}>
        {children}
        <Script src="https://cdn.tailwindcss.com" strategy="afterInteractive" />
      </body>
    </html>
  );
}
