import { FC } from "react";

interface layoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: layoutProps) {
  return (
    <html lang="eu">
      <body>
        <main>
          <div className="m-28 bg-slate-700">{children}</div>;
        </main>
      </body>
    </html>
  );
}
