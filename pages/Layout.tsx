import Food from "@/components/Food";
import Navbar from "@/components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="main">
        <div />
      </div>
      <main className="app">
        <Navbar />
        {children}
        <Food />
      </main>
    </>
  );
}
