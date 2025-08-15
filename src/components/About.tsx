"use client";
import React, { useEffect, useState } from "react";
import { FaCircleInfo } from "react-icons/fa6";
import {
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaHeart,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });

    // Detecta el modo oscuro inicial
    setDarkMode(document.documentElement.classList.contains("dark"));

    // Observa cambios en el class del <html>
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className={`w-full px-6 md:px-12 py-16 border-t-1 border-b-1 ${
        darkMode ? "bg-gray-900 bg-opacity-80" : "bg-white border-gray-300"
      }`}
    >
      <div
        className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-6"
        data-aos="fade-up"
        data-aos-easing="ease-in-out-sine"
      >
        <button className="bg-purple-500 text-white px-4 py-2 text-sm rounded-full hover:bg-purple-700 transition flex items-center gap-2">
          <FaCircleInfo size={16} /> Sobre M&iacute;
        </button>

        <div className="w-full lg:text-center">
          <h2
            className={`md:text-2xl text-3xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Hola! Soy Lucas Calvo Coltro
          </h2>
          <p
            className={`text-base md:text-sm lg:text-base mb-4 mt-12 ${
              darkMode ? "text-gray-300" : "text-gray-400"
            }`}
          >
            Soy estudiante de Ingeniería en Sistemas y Técnico Universitario en
            Programación, con experiencia en desarrollo web. Me apasiona crear
            aplicaciones que faciliten la vida cotidiana, y busco seguir
            creciendo profesionalmente mientras desarrollo mis propios proyectos
            y colaboro en equipos innovadores.
          </p>

          <div className="mt-12 flex flex-col md:flex-row flex-wrap gap-8 lg:items-center lg:justify-center">
            <div className="flex flex-col min-w-[200px] lg:items-center">
              <h3 className="font-semibold flex items-center gap-2 text-blue-400 mb-2">
                <FaEnvelope /> Contacto
              </h3>
              <a
                href="mailto:calvoclucas@gmail.com"
                className={`font-bold text-gray-900 break-all ${
                  darkMode ? "text-white" : "hover:text-blue-500"
                }`}
              >
                calvoclucas@gmail.com
              </a>
            </div>

            <div className="flex flex-col min-w-[200px] lg:items-center">
              <h3 className="font-semibold flex items-center gap-2 text-blue-400 mb-2">
                <FaPhone /> Teléfono
              </h3>
              <a
                href="tel:+543364034400"
                className={`font-bold text-gray-900 ${
                  darkMode ? "text-white" : "hover:text-blue-500"
                }`}
              >
                +54 (336) 403-4400
              </a>
            </div>

            <div className="flex flex-col min-w-[200px] lg:items-center">
              <h3 className="font-semibold flex items-center gap-2 text-blue-400 mb-2">
                <FaBirthdayCake /> Fecha de Cumpleaños
              </h3>
              <p
                className={`font-bold text-gray-900 ${
                  darkMode ? "text-white" : ""
                }`}
              >
                Enero 28, 1998
              </p>
            </div>

            <div className="flex flex-col min-w-[200px] lg:items-center">
              <h3 className="font-semibold flex items-center gap-2 text-blue-400 mb-2">
                <FaHeart /> Intereses Personales
              </h3>
              <p
                className={`font-bold text-gray-900 ${
                  darkMode ? "text-white" : ""
                }`}
              >
                Programación, Fútbol, Música
              </p>
            </div>

            <div className="flex flex-col min-w-[200px] lg:items-center">
              <h3 className="font-semibold  text-blue-400 mb-2">
                Redes Sociales
              </h3>
              <div className="flex gap-4 mt-1 text-xl">
                <a
                  href="https://www.linkedin.com/in/lucas-calvo-coltro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode
                      ? "hover:text-blue-300"
                      : "text-gray-900 hover:text-blue-500"
                  }`}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/calvoclucas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode
                      ? "text-white hover:text-blue-300"
                      : "text-gray-900 hover:text-blue-500"
                  }`}
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
