"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
<nav className="fixed top-0 left-0 right-0 z-50 bg-dark px-6 py-4 mb-4 flex justify-between items-center text-white">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
              <Image
                src="/logo_dark.png"
                alt="MiPortfolio Logo"
                width={180}
                height={70}
                className="cursor-pointer opacity-70"
              />
          </Link>
        </div>
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-300 hover:border-gray-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // Icono "X" para cerrar menú
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              // Icono hamburguesa
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            )}
          </svg>
        </button>

      <ul
  className={`flex-col md:flex-row md:flex md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-dark md:bg-transparent transition-all duration-300 ease-in-out ${
    isOpen ? "flex" : "hidden"
  }`}
>
  {[
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre mí" },
    { href: "/services", label: "Servicios" },
    { href: "/projects", label: "Proyectos" },
    { href: "/contact", label: "Contacto" },
  ].map(({ href, label }) => (
    <li
      key={href}
      className="border-b border-gray-700 md:border-none px-6 py-3 md:p-0"
    >
      <Link href={href}>
        <span
          className="block hover:text-gray-300 transition cursor-pointer"
          onClick={() => setIsOpen(false)} 
        >
          {label}
        </span>
      </Link>
    </li>
  ))}
</ul>
      </nav>

      {/* Espacio para que el contenido no quede oculto detrás del navbar fijo */}
      <div className="pt-28" />
    </>
  );
}
