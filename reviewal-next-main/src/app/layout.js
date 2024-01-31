import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reviewal",
  description: "Testa produkter kostnadsfritt!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="apple-itunes-app" content="app-id=6450650944" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}