import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cola do Dev",
  description: "Cheat sheets práticos para Docker, Laravel, Git e SQL.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

