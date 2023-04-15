import Head from './head';
import '../styles/globals.css';

export const metadata = {
  title: 'The Blog',
  description: 'Created by TRP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body>{children}</body>
    </html>
  )
}
