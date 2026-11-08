import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Built with Next.js & Shadcn UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en" suppressHydrationWarning>
  <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
    <Navbar />
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      {children}
    </main>
  </body>
</html>
  );
}