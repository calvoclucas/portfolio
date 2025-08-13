"use client";
import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import {
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaLanguage,
  FaMusic,
  FaHeart,
  FaBook,
  FaGlobe,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-white px-6 md:px-12 py-16 border-t-2 border-gray-300"
    >
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start gap-6">
        {/* Botón */}
        <button className="bg-purple-600 text-white px-4 py-2 text-sm rounded-full hover:bg-purple-700 transition flex items-center gap-2">
          <FaCircleInfo size={16} /> Sobre mí
        </button>

        <div className="w-full">
          <h2 className="text-3xl text-black font-bold mb-4">
            Hola! Soy Lucas Calvo Coltro
          </h2>
          <p className="text-gray-400 mb-4 mt-12">
            Soy estudiante de Ingeniería en Sistemas y Técnico Universitario en
            Programación, con experiencia en desarrollo web. Me apasiona crear
            aplicaciones que faciliten la vida cotidiana, y busco seguir
            creciendo profesionalmente mientras desarrollo mis propios proyectos
            y colaboro en equipos innovadores.
          </p>

          <div className="mt-12 flex flex-wrap text-gray-700 gap-8">
            <div className="flex flex-col">
              <h3 className="font-semibold flex items-center gap-2 text-blue-400 mt-2 mb-2">
                <FaEnvelope /> Contacto
              </h3>
              <a
                href="mailto:calvoclucas@gmail.com"
                className="font-bold hover:text-blue-500"
              >
                calvoclucas@gmail.com
              </a>
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold flex items-center gap-2 text-blue-400 mt-2 mb-2">
                <FaPhone /> Teléfono
              </h3>
              <a
                href="tel:+543364034400"
                className="font-bold hover:text-blue-500"
              >
                +54 (336) 403-4400
              </a>
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold flex items-center gap-2 text-blue-400 mt-2 mb-2">
                <FaBirthdayCake /> Fecha de Cumpleaños
              </h3>
              <p className="font-bold">Enero 28, 1998</p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold flex items-center gap-2 text-blue-400 mt-2 mb-2">
                <FaLanguage /> Idiomas Hablados
              </h3>
              <p className="font-bold">Espa&ntilde;ol - Franc&eacute;s</p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold flex items-center gap-2 text-blue-400 mt-2 mb-2">
                <FaHeart /> Intereses
              </h3>
              <p className="font-bold">
                Programaci&oacute;n, F&uacute;tbol, M&uacute;sica
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="font-semibold flex items-center gap-2 text-blue-400 mt-2 mb-2">
                Redes Sociales
              </h3>
              <div className="flex gap-4 mt-1 text-xl">
                <a
                  href="https://www.linkedin.com/in/lucas-calvo-coltro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/calvoclucas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
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
