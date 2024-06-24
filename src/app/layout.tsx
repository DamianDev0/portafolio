import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google"; // Added Urbanist
import "./globals.css";

import Navbar from "@/components/navbar";
import { Header } from "@/components/header";


const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DameDev Landing Page ",
  description: "Landing Page made by DameDev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <Header />

        {children}</body>
    </html>
  );
}
