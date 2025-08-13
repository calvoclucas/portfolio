"use client";
import React from "react";
import { FaCircleInfo } from "react-icons/fa6";
import { FaEnvelope, FaPhone, FaBirthdayCake, FaLanguage, FaMusic, FaBook, FaGlobe } from "react-icons/fa";

export default function About() {
  return (

    
    <section
  id="about"
  className="w-full bg-white px-6 md:px-12 py-16 border-t-2 border-gray-100"
>
  <div className="w-full max-w-[1440px] mx-auto flex flex-col items-start gap-6">
    
    {/* Botón */}
    <button className="bg-purple-600 text-white px-4 py-2 text-sm rounded-full hover:bg-purple-700 transition flex items-center gap-2">
      <FaCircleInfo size={16} /> Sobre mí
    </button>

    {/* Contenido principal */}
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-4">Hola! Soy Lucas Calvo Coltro</h2>
      <p className="text-gray-600 mb-4">
        Técnico en Programación y estudiante de Ingeniería en Sistemas, apasionado por desarrollo.
        Me gusta combinar creatividad y tecnología para crear aplicaciones funcionales y atractivas.
      </p>
    </div>

  </div>
</section>





  );
}
