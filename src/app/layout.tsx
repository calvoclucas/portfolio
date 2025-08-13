import React from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "@/components/About";
import Services from "@/components/Services";

export const metadata = {
  title: "Portfolio - Lucas Calvo Coltro",
  description: "Portfolio de Lucas Calvo Coltro",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Sora&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <Home />
        <About />
        <Services />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
