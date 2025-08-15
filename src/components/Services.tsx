"use client";
import React from "react";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BsClipboardData,
  BsDiagram2,
  BsFileEarmarkText,
  BsFileText,
} from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
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
  SiDotnet,
  SiPostman,
  SiLiquibase,
  SiGitforwindows,
  SiGit,
  SiFirebase,
  SiTypescript,
  SiRedux,
} from "react-icons/si";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section id="services" className="w-full px-6 py-16">
      <div
        className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-6"
        data-aos="fade-up"
      >
        <button className="bg-purple-500 text-white px-4 py-2 text-sm rounded-full hover:bg-purple-700 transition flex items-center gap-2">
          <FaLaptopCode size={16} /> Servicios
        </button>

        <div className="mt-12 flex flex-col gap-8 w-full">
          <div className="flex-1 border text-center border-white/20 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col max-w-6xl w-full mx-auto">
            <h3 className="text-2xl text-white font-bold mb-2">
              Desarrollo Web FullStack
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Desarrollo aplicaciones web modernas y funcionales, optimizadas
              para usuarios y negocios. Me especializo en interfaces atractivas,
              integraciones con APIs y soluciones escalables.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiNodedotjs className="text-4xl" />
                <span className="text-sm">Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiPython className="text-4xl" />
                <span className="text-sm">Python</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiReact className="text-4xl" />
                <span className="text-sm">React</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiMongodb className="text-4xl" />
                <span className="text-sm">MongoDB</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiHtml5 className="text-4xl" />
                <span className="text-sm">HTML5</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiCss3 className="text-4xl" />
                <span className="text-sm">CSS3</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiJavascript className="text-4xl" />
                <span className="text-sm">JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiTailwindcss className="text-4xl" />
                <span className="text-sm">Tailwind</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiBootstrap className="text-4xl" />
                <span className="text-sm">Bootstrap</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiNextdotjs className="text-4xl" />
                <span className="text-sm">Next.js</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiFirebase className="text-4xl" />
                <span className="text-sm">FireBase</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiGit className="text-4xl" />
                <span className="text-sm">Git</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiTypescript className="text-4xl" />
                <span className="text-sm">TypeScript</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiRedux className="text-4xl" />
                <span className="text-sm">Redux</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiExpress className="text-4xl" />
                <span className="text-sm">Express</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiPhp className="text-4xl" />
                <span className="text-sm">PHP</span>
              </div>{" "}
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiJquery className="text-4xl" />
                <span className="text-sm">jQuery</span>
              </div>
            </div>
          </div>

          <div className="flex-1 border text-center  border-white/20 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col max-w-6xl w-full mx-auto">
            <h3 className="text-2xl lg:text-center text-white font-bold mb-2">
              Desarrollo Desktop Apps
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Experiencia con C#, .NET, WPF y Windows Forms para construir
              aplicaciones de escritorio profesionales, robustas y fáciles de
              usar.
            </p>
            <div className="mt-6 flex justify-center flex-wrap gap-4">
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiDotnet className="text-4xl" />
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiPostman className="text-4xl" />
                <span className="text-sm">PostMan</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiLiquibase className="text-4xl" />
                <span className="text-sm">Liquibase</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <img
                  src="/sql-server.png"
                  alt="SQL Server"
                  className="w-15 h-15"
                  style={{
                    filter:
                      "invert(30%) sepia(100%) saturate(500%) hue-rotate(180deg)",
                  }}
                />
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <SiGitforwindows className="text-4xl" />
                <span className="text-sm">Git</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <img
                  src="/c-sharp.png"
                  alt="C#"
                  className="w-9 h-9"
                  style={{
                    filter:
                      "invert(30%) sepia(100%) saturate(500%) hue-rotate(180deg)",
                  }}
                />
                <span className="text-sm">C#</span>
              </div>
            </div>
          </div>

          <div className="flex-1 border text-center border-white/20 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col max-w-6xl w-full mx-auto">
            <h3 className="text-2xl text-white font-bold mb-2">
              Análisis Funcional
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Especializado en análisis funcional para el sector bancario,
              identificando requerimientos, optimizando procesos y asegurando
              que los sistemas cumplan con las necesidades del negocio.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <div className="flex flex-col items-center gap-1 text-blue-500">
                <BsFileText className="text-4xl" />
                <span className="text-sm">Reportes</span>
              </div>

              <div className="flex flex-col items-center gap-1 text-blue-500">
                <BsFileEarmarkText className="text-4xl" />
                <span className="text-sm">Documentación</span>
              </div>

              <div className="flex flex-col items-center gap-1 text-blue-500">
                <BsDiagram2 className="text-4xl" />
                <span className="text-sm">UML</span>
              </div>

              <div className="flex flex-col items-center gap-1 text-blue-500">
                <BsClipboardData className="text-4xl" />
                <span className="text-sm">Requerimientos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
