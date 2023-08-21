import SiderBar from "@/components/SiderBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photo App",
  description: "A Photo App built with Next.js and Cloudinary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="darkMode:media">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex">
            <div className="w-[20vw]">
            <SiderBar/>
            </div>
            {children}
          </div>
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}
