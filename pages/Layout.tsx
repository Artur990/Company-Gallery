import Food from "@/components/Food";
import Navbar from "@/components/Navbar";
import { FC } from "react";
// import "../styles/globals.css";
interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <div className="main">
        <div />
      </div>
      <Navbar />
      {children}
      <Food />
    </main>
  );
}
