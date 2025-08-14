"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#about", label: "Sobre mí" },
    { href: "#services", label: "Servicios" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <nav className="bg-[rgb(5,12,23)] fixed top-0 left-0 right-0 z-50 px-6 flex justify-between items-center text-white">
      {/* Logo */}
      <div className="flex items-center lg:ml-34">
        <Link href="/">
          <Image
            src="/logo_rbg.png"
            alt="MiPortfolio Logo"
            width={160}
            height={60}
            className="cursor-pointer 
               w-50 h-30       /* mobile */
               sm:w-50 sm:h-30 /* tablets */
               md:w-50 md:h-30 /* laptops */
               lg:w-100 lg:h-50 /* desktop grande */
              "
            style={{ filter: "invert(100%) brightness(200%)" }}
          />
        </Link>
      </div>

      {/* Botón menú móvil */}
      {/* Botón menú móvil */}
      {/* Botón menú móvil */}
      {/* Botón menú móvil */}
      <button
        className="md:hidden flex flex-col justify-between w-8 h-6 p-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-1 bg-white rounded transform transition-all duration-300 origin-top-right ${
            isOpen ? "rotate-45 w-5 translate-y-1" : "w-full"
          }`}
        ></span>
        <span
          className={`block h-1 bg-white rounded transform transition-all duration-300 ${
            isOpen ? "opacity-0" : "w-4/5 self-end"
          }`}
        ></span>
        <span
          className={`block h-1 bg-white rounded transform transition-all duration-300 origin-bottom-right ${
            isOpen ? "-rotate-45 w-5 -translate-y-1" : "w-3/5 self-end"
          }`}
        ></span>
      </button>

      {/* Menú */}
      <ul
        className={`flex-col md:flex-row text-lg md:flex md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto bg-[rgb(5,12,23)] transition-all duration-300 ease-in-out mr-34 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {menuItems.map(({ href, label }) => (
          <li
            key={href}
            className="border-b border-gray-700 md:border-none px-6 py-4 md:py-2 md:px-4"
          >
            <Link href={href}>
              <span
                className="block font-bold text-base md:text-sm hover:text-gray-300 transition cursor-pointer"
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
