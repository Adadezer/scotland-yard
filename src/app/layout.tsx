import type { Metadata } from "next";
import { Advent_Pro } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const advent = Advent_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={advent.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
