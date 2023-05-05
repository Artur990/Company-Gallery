import Food from "@/components/Food";
import Navbar from "@/components/Navbar";
import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Food />
    </div>
  );
}
