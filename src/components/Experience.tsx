"use client";
import React, { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaHistory,
  FaLaptop,
} from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";

interface TimelineItem {
  title: string;
  companyOrInstitution?: string;
  period: string;
  description?: string[];
  technologies?: string[];
  projects?: string[];
}

export default function Experience() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });

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

  const experience: TimelineItem[] = [
    {
      title: "Analista Técnico Funcional .NET y Bantotal",
      companyOrInstitution: "Banco Supervielle",
      period: "Enero 2022 – Presente",
      technologies: [
        "Genexus (Java, RPG)",
        "DB2",
        ".NET",
        "C#",
        "Sql Server",
        "Postman",
      ],
      description: [
        "Módulos de Bantotal: Clearing, ECheq",
        "Módulos de EClearing: Cámara Compensadora, Digitalización de Cheques",
      ],
    },
    {
      title: "Analista Técnico Bantotal",
      companyOrInstitution: "ACCION POINT S.A en Banco Supervielle",
      period: "Julio 2020 – Abril 2021",
      technologies: ["Genexus (Java, RPG)", "DB2"],
      description: [
        "Módulos de Bantotal: Clientes, Plazos Fijos, Núcleo, Contabilidad.",
      ],
    },
    {
      title: "Analista Técnico Bantotal - Modulo Cash Management",
      companyOrInstitution: "ACCION POINT S.A en Banco Formosa",
      period: "Enero 2019 – Julio 2020",
      technologies: ["Genexus (Java, RPG)", "DB2"],
      description: [
        "Módulos de Bantotal: Cash Management, Mantenimiento de Tarjetas de Crédito, Caja y Tesorería.",
      ],
    },
    {
      title: "Software Developer",
      companyOrInstitution: "ACCION POINT S.A",
      period: "Mayo 2018 – Diciembre 2019",
      technologies: ["Genexus (Java, RPG)", "DB2"],
      description: [
        "Módulos de Bantotal: Núcleo, Mantenimiento de Tarjetas de Crédito, Caja y Tesorería, Pasivas, Interfaces, Pago de Sueldos, Recaudaciones de Servicios(Facturas Electrónicas).",
      ],
    },
    {
      title: "Web Developer",
      companyOrInstitution: "JAR SOLUTIONS",
      period: "Diciembre 2017 – Abril 2018",
      technologies: ["PHP", ".NET", "JavaScript", "CSS3", "HTML5", "MYSQL"],
      projects: [
        "Ecommerce",
        "Sistemas Web",
        "Creación de Sitios Webs Estáticos",
      ],
    },
  ];

  const education: TimelineItem[] = [
    {
      title: "Ingeniería en Sistemas de Información",
      companyOrInstitution: "UAI - Universidad Abierta Interamericana Rosario",
      period: "2025 – Presente",
    },
    {
      title: "Tecnicatura Universitaria en Programación",
      companyOrInstitution: "UTN FRSN – Facultad Regional San Nicolás",
      period: "2016 – 2018",
    },
  ];

  const renderTimeline = (items: TimelineItem[], Icon: React.ElementType) =>
    items.map((item, index) => {
      const isLeft = index % 2 === 0;

      return (
        <div
          key={index}
          className="relative w-full flex justify-center mb-12"
          data-aos="fade-up"
          data-aos-easing="ease-in-out-sine"
        >
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-purple-600 z-0"></div>

          <div
            className={`z-10 w-full md:w-1/2 p-4 rounded-md shadow-md ${
              isLeft ? "md:mr-auto md:text-left" : "md:ml-auto md:text-right"
            } ${
              darkMode ? "bg-gray-900 bg-opacity-80 text-white" : "bg-white"
            }`}
            data-aos="fade-up"
          >
            <div
              className={`flex mb-2 ${
                isLeft
                  ? "justify-center md:justify-start"
                  : "justify-center md:justify-end"
              } sm:justify-center`}
            >
              <Icon
                className={`${
                  darkMode ? "text-white" : "text-black"
                } text-2xl md:text-3xl`}
              />
            </div>

            <span
              className={`${
                darkMode ? "text-yellow-400" : "text-yellow-500"
              } font-bold text-sm md:text-base`}
            >
              {item.period}
            </span>
            <h3
              className={`${
                darkMode ? "text-white" : "text-black"
              } text-base md:text-lg font-semibold mt-1`}
            >
              {item.title}
            </h3>
            {item.companyOrInstitution && (
              <p
                className={`${
                  darkMode ? "text-gray-300 italic" : "text-gray-800 italic"
                } mt-1 text-sm md:text-base`}
              >
                {item.companyOrInstitution}
              </p>
            )}
            {item.description &&
              item.description.map((desc, i) => (
                <p
                  key={i}
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } mt-1 text-sm md:text-base leading-snug`}
                >
                  {desc}
                </p>
              ))}
            {item.technologies && (
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } mt-1 text-sm md:text-base`}
              >
                <strong>Tecnologías:</strong> {item.technologies.join(", ")}
              </p>
            )}
            {item.projects && (
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } mt-1 text-sm md:text-base`}
              >
                <strong>Proyectos:</strong> {item.projects.join(", ")}
              </p>
            )}
          </div>
        </div>
      );
    });

  return (
    <section
      id="experience"
      className={`w-full px-6 md:px-12 py-12 border-t-2 ${
        darkMode
          ? "bg-gray-900 bg-opacity-80 border-gray-700"
          : "bg-white border-gray-300"
      }`}
    >
      <div
        className="max-w-4xl mx-auto text-center md:text-left"
        data-aos="fade-up"
      >
        <button className="bg-purple-500 text-white px-4 py-2 text-sm md:text-sm rounded-full hover:bg-purple-700 transition flex items-center justify-center gap-2 mx-auto">
          <FaHistory size={16} /> Trayectoria
        </button>
        <h2
          data-aos="fade-up"
          className={`${
            darkMode ? "text-white" : "text-gray-800"
          } text-2xl md:text-4xl font-bold mt-20 mb-20 flex justify-center items-center gap-2`}
        >
          <FaBriefcase className="text-3xl md:text-xl" /> Experiencia
        </h2>
        {renderTimeline(experience, FaLaptop)}
        <h2
          data-aos="fade-up"
          className={`${
            darkMode ? "text-white" : "text-gray-800"
          } text-2xl md:text-4xl font-bold mt-20 mb-20 flex justify-center items-center gap-2`}
        >
          <FaGraduationCap className="text-2xl md:text-3xl" /> Educación
        </h2>
        {renderTimeline(education, PiStudent)}
      </div>
    </section>
  );
}
