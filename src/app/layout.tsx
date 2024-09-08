import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Dmitrij Sidorkin",
  description: "Portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col justify-between bg-image-dark bg-cover bg-no-repeat">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
