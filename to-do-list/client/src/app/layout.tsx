import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AppContext, AppProvider } from "@/context/AppContext";
import { useContext } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To-Do-Now",
  description: "Make yourself creative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const {mode} = useContext(AppContext)!
  // if (!mode)
  //     throw new Error("error!")
  return (
    <html lang="en">
      <AppProvider>
      <body className={`${inter.className}`}>{children}
      <Toaster/>
      </body>
      </AppProvider>
    </html>
  );
}
