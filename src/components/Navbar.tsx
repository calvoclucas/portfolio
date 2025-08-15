"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaAlignRight, FaTimes, FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [fadeLogo, setFadeLogo] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setFadeLogo(true);
    setTimeout(() => {
      if (darkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setDarkMode(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setDarkMode(true);
      }
      setFadeLogo(false);
    }, 400);
  };

  const menuItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#about", label: "Sobre mí" },
    { href: "#services", label: "Servicios" },
    { href: "#experience", label: "Experiencia" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <nav className="bg-[rgb(5,12,23)] text-white fixed top-0 left-0 right-0 z-50 px-6 flex items-center transition-colors duration-500">
      {/* Logo */}
      <div className="flex items-center lg:ml-20 transition-opacity duration-200">
        <Link href="/">
          <Image
            src="/logo_rbg.png"
            alt="MiPortfolio Logo"
            width={160}
            height={60}
            className={`cursor-pointer transition-opacity duration-200 ${
              fadeLogo ? "opacity-0" : "opacity-100"
            }`}
            style={{
              filter: "invert(100%) brightness(200%)",
            }}
          />
        </Link>
      </div>

      <ul
        className={`bg-[rgb(5,12,23)] text-white flex-col lg:flex-row text-lg lg:flex lg:space-x-8 absolute lg:static top-16 left-0 w-full lg:w-auto overflow-hidden transition-all duration-700 ease-in-out transform ${
          isOpen
            ? "flex opacity-100 scale-y-100"
            : "flex opacity-0 scale-y-0 lg:opacity-100 lg:scale-y-100"
        } lg:ml-auto`}
      >
        {menuItems.map(({ href, label }) => (
          <li
            key={href}
            className={`border-b border-gray-700 lg:border-none px-4 py-4 lg:py-2 lg:px-2`}
          >
            <Link href={href}>
              <span
                className="block font-bold text-sm hover:text-gray-500 dark:hover:text-gray-300 transition cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Botón hamburguesa (solo mobile) */}
      <div className="flex lg:hidden ml-auto items-center gap-4">
        <button
          className="text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaAlignRight />}
        </button>
      </div>

      {/* Botón tema (siempre al final) */}
      <button
        onClick={toggleTheme}
        className="ml-4 text-xl p-2 rounded-full hover:bg-gray-300/20 transition"
        aria-label="Toggle dark mode"
      >
        {darkMode ? <GoSun /> : <FaMoon />}
      </button>
    </nav>
  );
}
