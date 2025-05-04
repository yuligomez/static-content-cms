import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import { getAllContentPaths } from "@/utils/content/markdown/paths";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const paths = await getAllContentPaths();
  const navLinks = paths.map((parts) => "/" + parts.join("/"));

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col`}
      >
        <Header navLinks={navLinks} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
