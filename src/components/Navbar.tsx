"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaAlignRight, FaTimes } from "react-icons/fa";

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
    <nav className="bg-[rgb(5,12,23)] fixed top-0 left-0 right-0 z-50 px-6 flex justify-between items-center text-white">
      <div className="flex items-center lg:ml-20">
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
      <button
        className="lg:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaAlignRight />}
      </button>
      <ul
        className={`flex-col lg:flex-row text-lg lg:flex lg:space-x-8 absolute lg:mr-20 lg:static top-16 left-0 w-full lg:w-auto bg-[rgb(5,12,23)] overflow-hidden transition-all duration-700 ease-in-out transform text-white
    ${
      isOpen
        ? "flex opacity-100 scale-y-100"
        : "flex opacity-0 scale-y-0 lg:opacity-100 lg:scale-y-100"
    }`}
      >
        {menuItems.map(({ href, label }) => (
          <li
            key={href}
            className="border-b border-gray-700 lg:border-none px-4 py-4 lg:py-2 lg:px-2"
          >
            <Link href={href}>
              <span
                className="block font-bold text-sm hover:text-gray-300 transition cursor-pointer"
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
