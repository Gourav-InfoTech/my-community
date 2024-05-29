import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import ProjectContext from "@/context/ProjectContext";
import Appbar from "@/components/Appbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProjectContext>
          <Appbar />
          <div className="h-[calc(100vh_-_var(--appbar-height))] max-w-screen flex">
            <Sidebar />
            {children}
          </div>
        </ProjectContext>
      </body>
    </html>
  );
}
