import { Roboto } from "next/font/google";

import Header from './partials/Header';
import Footer from './partials/Footer';

import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Karencio | Web development consultant",
  description: `Let's build your application together. Our company will help to build the best solution for your business`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} font-inter antialiased bg-gray-800 text-gray-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
