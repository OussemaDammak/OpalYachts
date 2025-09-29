import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Modal from "./components/modals/Modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpalYachts",
  description: "Best place to rent yachts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content=(
      <p>hey bro</p>
    )
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <div className="pt-28">
        {children}
</div>
  
  {/*
    <Modal
      label="Testing"
      content={content}
      isOpen={false}
    /> 
  */}
  
      </body>
    </html>
  );
}
