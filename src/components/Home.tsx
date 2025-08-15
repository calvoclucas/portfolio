"use client";
import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });

    setDarkMode(document.documentElement.classList.contains("dark"));

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
      id="inicio"
      className={`w-full flex flex-col md:flex-row items-center min-h-screen px-6 md:px-12 pt-[80px] ${
        darkMode ? "bg-purple" : "bg-white"
      }`}
    >
      <div className="w-full flex flex-col md:flex-row max-w-[1440px] mx-auto h-full">
        <article
          className="w-full md:w-1/2 flex flex-col justify-center h-full z-10 relative"
          data-aos="fade-up"
          data-aos-easing="ease-in-out-sine"
        >
          <p
            className={`inline-block w-fit font-semibold text-lg p-2.5 mt-18 ${
              darkMode
                ? "text-yellow-400 bg-[rgba(255,196,31,0.14)]"
                : "text-yellow-400 bg-[rgba(255,196,31,0.14)]"
            }`}
          >
            Hola! Soy Lucas Calvo Coltro
          </p>

          <h1
            className={`font-bold mt-8 text-3xl/normal md:text-[50px]/normal ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Freelance Developer
          </h1>

          <p
            className={`mb-12 mt-12 text-base md:text-base ${
              darkMode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Técnico Universitario en Programación y estudiante de Ingeniería en
            Sistemas, apasionado por desarrollo. Me gusta combinar creatividad y
            tecnología para crear aplicaciones funcionales y atractivas.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/lucas-calvo-coltro/"
              className="bg-purple-600 text-white border-gray-300 hover:bg-gray-800 font-bold p-5 flex items-center gap-2 transition"
            >
              <FaRegUser size={20} /> Contratar
            </a>
            <a
              href="/CV_Lucas Calvo Coltro.pdf"
              download
              className="border bg-white text-black border-gray-300 hover:bg-gray-800 hover:text-white font-bold p-5 flex items-center gap-2 transition"
            >
              <MdLibraryBooks size={20} /> Descargar CV
            </a>
          </div>

          <div className="flex flex-row justify-center lg:justify-start gap-6 mt-12 mb-12 flex-wrap">
            <div className="flex flex-col items-center flex-shrink-0">
              <h3
                className={`text-3xl lg:text-4xl font-bold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                5+
              </h3>
              <p className="text-base md:text-sm lg:text-base text-gray-400 mt-1">
                Proyectos Personales
              </p>
            </div>

            <div className="flex flex-col items-center flex-shrink-0">
              <h3
                className={`text-3xl lg:text-4xl font-bold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                8+
              </h3>
              <p className="text-base md:text-sm lg:text-base text-gray-400 mt-1">
                Años de Experiencia
              </p>
            </div>

            <div className="flex flex-col items-center flex-shrink-0">
              <h3
                className={`text-3xl lg:text-4xl font-bold ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                6+
              </h3>
              <p className="text-base md:text-sm lg:text-base text-gray-400 mt-1">
                Sitios Realizados
              </p>
            </div>
          </div>
        </article>

        <div className="w-full md:w-1/2 flex justify-center items-center relative bg-[radial-gradient(circle_at_center,_#994FF5_0%,_#FFC41F_100%)] overflow-hidden">
          <img
            src="/img_profile.png"
            alt="Lucas Calvo Coltro"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition"
          />
          <div className="md:flex absolute inset-0 justify-center items-center px-4">
            <p className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-extrabold text-center text-transparent uppercase bg-gradient-to-b from-white/70 to-white/10 bg-clip-text z-20 lg:mb-155 lg:-translate-y-20">
              Lucas Calvo Coltro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
