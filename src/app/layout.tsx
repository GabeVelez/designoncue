import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const questrial = Questrial({
  weight: "400",
  variable: "--font-questrial",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DesignOnCue - Your on-call web design partner",
  description: "We plan, design, and build websites in WordPress, Webflow, and Framer—with bold type, dark-mode aesthetics, and kinetic moments that make people feel your brand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${questrial.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
