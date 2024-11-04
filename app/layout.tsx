import type { Metadata } from "next";
import { Saira } from "next/font/google";
import Provider from "@/redux/provider";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";

const saira = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hatch project",
  description: "Generated by create next app",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
