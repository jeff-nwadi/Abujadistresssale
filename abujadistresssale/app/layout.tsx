import type { Metadata } from "next";
import {Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dm_sans = DM_Sans ({
  variable : "--font-dm-sans",
  subsets : ["latin"],
})

export const metadata: Metadata = {
  title: "Abuja distress sales",
  description: "where sales meet strategy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
