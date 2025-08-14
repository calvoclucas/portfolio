"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaAlignRight, FaTimes } from "react-icons/fa"; // íconos de menú y cerrar

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#about", label: "Sobre mí" },
    { href: "#services", label: "Servicios" },
    { href: "#experience", label: "Experiencia" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <nav className="bg-[rgb(5,12,23)] fixed top-0 left-0 right-0 z-50 px-6 flex justify-between items-center text-white ">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo_rbg.png"
            alt="MiPortfolio Logo"
            width={160}
            height={60}
            className="cursor-pointer"
            style={{ filter: "invert(100%) brightness(200%)" }}
          />
        </Link>
      </div>

      {/* Botón menú móvil */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaAlignRight />}
      </button>

      {/* Menú */}
      <ul
        className={`flex-col md:flex-row text-lg md:flex md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-[rgb(5,12,23)] transition-all duration-300 ease-in-out ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {menuItems.map(({ href, label }) => (
          <li
            key={href}
            className="border-b border-gray-700 md:border-none px-4 py-4 md:py-2 md:px-2"
          >
            <Link href={href}>
              <span
                className="block font-bold text-sm md:text-sm hover:text-gray-300 transition cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
