"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

interface Project {
  title: string;
  image: string;
  link: string;
  description: string;
  technologies: string[];
}

export default function Projects() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });

    // Inicializar darkMode según la clase en html
    setDarkMode(document.documentElement.classList.contains("dark"));

    // Escuchar cambios en la clase del html
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: "Portfolio Personal",
      image: "/images/web_portfolio.png",
      link: "https://portfolio-six-red-72.vercel.app/",
      description:
        "Sitio web personal para mostrar mis trabajos y habilidades.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
    {
      title: "Transporte Scropranich",
      image: "/images/web_transcrop.png",
      link: "https://transportescropanich.com/",
      description:
        "Transporte Scropranich - Cargas Generales - Servicio Directo a Capital Federal - C.A.B.A / Vedia",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      title: "Jar Solutions",
      image: "/images/web_jars.png",
      link: "https://jarsolutionssrl.com/",
      description:
        "Jarsolutions es una empresa de ingeniería con una fuerte vocación en la provisión de soluciones, productos y servicios en el área de sistemas.",
      technologies: ["PHP", "JavaScript", "CSS", "Bootstrap", "jQuery"],
    },
    {
      title: "GSN Mutual",
      image: "/images/web_mutual.png",
      link: "https://www.gruposannicolas.com.ar/",
      description:
        "MUTUAL GSN nace con la intención y el compromiso de trabajar en el desarrollo de planes de Salud para que sus asociados puedan tener una cobertura de excelencia. Contamos también con una serie de servicios mutuales teniendo como premisa aportar valores, experiencias y apoyo al deporte, la educación y el cuidado del medio ambiente.",
      technologies: ["PHP", "JavaScript", "CSS", "Bootstrap", "jQuery", "PHP"],
    },
  ];

  return (
    <section
      id="projects"
      className={`w-full px-6 md:px-12 py-12 border-t-2 ${
        darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-300"
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        <button
          className="bg-purple-500 text-white px-4 py-2 text-sm rounded-full hover:bg-purple-700 transition flex items-center justify-center gap-2 mx-auto mb-6"
          data-aos="fade-up"
          data-aos-easing="ease-in-out-sine"
        >
          <FaCode size={16} /> Proyectos
        </button>

        <h2
          className={`text-2xl md:text-4xl font-bold mb-8 ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
          data-aos="fade-up"
        >
          Mis Proyectos
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition w-full sm:w-[45%] lg:w-[30%] justify-center ${
                darkMode
                  ? "bg-gray-800 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                width={500}
                height={200}
              />
              <div className="p-4 flex flex-col h-full">
                <h3 className="text-lg font-bold text-purple-500">
                  {project.title}
                </h3>
                <p
                  className={`text-sm mt-2 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                <p
                  className={`text-xs mt-12 ${
                    darkMode ? "text-gray-100" : "text-black"
                  }`}
                >
                  <strong>Tecnologías:</strong>{" "}
                  {project.technologies.join(", ")}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition justify-center"
                >
                  Ir <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
