import SiderBar from "@/components/SiderBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PicPerfect",
  description: "A Photo App for all your photos needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex">
            <div className="w-[20vw] hidden lg:flex">
              <SiderBar />
            </div>
            <div className="w-[100vw] flex justify-center">{children}</div>
          </div>
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
