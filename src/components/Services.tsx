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
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiPython,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
  SiExpress,
  SiJquery,
  SiPhp,
} from "react-icons/si";

export default function Services() {
  return (
    <section id="services" className="w-full px-6 md:px-12 py-16">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-6">
        {/* Botón */}
        <button className="bg-purple-600 text-white px-4 py-2 text-sm rounded-full hover:bg-purple-700 transition flex items-center gap-2">
          <FaLaptopCode size={16} /> SERVICIOS
        </button>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* Desarrollo Web */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl text-black font-bold mb-2">
              Desarrollo Web FullStack
            </h3>
            <p className="text-gray-600 mb-4">
              Desarrollo aplicaciones web modernas y funcionales, optimizadas
              para usuarios y negocios. Me especializo en crear interfaces
              atractivas, integraciones con APIs y soluciones escalables para
              todo tipo de proyectos.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              {/* Desarrollo Web */}
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiNodedotjs className="text-5xl" />
                <span className="text-sm">Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiPython className="text-5xl" />
                <span className="text-sm">Python</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiReact className="text-5xl" />
                <span className="text-sm">React</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiMongodb className="text-5xl" />
                <span className="text-sm">MongoDB</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiHtml5 className="text-5xl" />
                <span className="text-sm">HTML5</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiCss3 className="text-5xl" />
                <span className="text-sm">CSS3</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiJavascript className="text-5xl" />
                <span className="text-sm">JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiTailwindcss className="text-5xl" />
                <span className="text-sm">Tailwind</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiBootstrap className="text-5xl" />
                <span className="text-sm">Bootstrap</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiNextdotjs className="text-5xl" />
                <span className="text-sm">Next.js</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiExpress className="text-5xl" />
                <span className="text-sm">Express</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiPhp className="text-5xl" />
                <span className="text-sm">PHP</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiJquery className="text-5xl" />
                <span className="text-sm">jQuery</span>
              </div>
            </div>
          </div>

          {/* Graphic Design */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl text-black  font-bold mb-2">
              Desarrollo Desktop Apps
            </h3>
            <p className="text-gray-600 mb-4">
              Experiencia con C#, .NET, WPF y Windows Forms para construir
              aplicaciones de escritorio profesionales, robustas y fáciles de
              usar.
            </p>
            <div className="flex gap-4 text-3xl text-green-600">
              <SiPython title="Python" />
              <SiPython title="C#" />
            </div>
          </div>

          {/* Motion Design */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl text-black  font-bold mb-2">
              An&aacute;lisis Funcional
            </h3>
            <p className="text-gray-600 mb-4">
              Especializado en análisis funcional para el sector bancario,
              identificando requerimientos, optimizando procesos y asegurando
              que los sistemas cumplan con las necesidades del negocio.
            </p>
            <div className="flex gap-4 text-3xl text-blue-600">
              <SiPython title="SQL Server" />
              <SiPython title="Node.js" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
