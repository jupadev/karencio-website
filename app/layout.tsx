import { Roboto } from "next/font/google";
import './globals.css';


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
      <body className={`${roboto.className} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>{children}</body>
    </html>
  );
}
