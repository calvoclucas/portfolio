"use client";
import React from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaTools,
  FaCertificate,
  FaHistory,
} from "react-icons/fa";

interface TimelineItem {
  title: string;
  companyOrInstitution?: string;
  period: string;
  description?: string[];
  technologies?: string[];
  projects?: string[];
}

export default function CV() {
  const experience: TimelineItem[] = [
    {
      title: "Analista Técnico Bantotal",
      companyOrInstitution: "ACCION POINT S.A en Banco Supervielle",
      period: "Julio 2020 – Presente",
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

  const skills = [
    "C++, C, C#, JavaScript, HTML5, CSS3, PHP, MySQL, JQUERY, AJAX, BOOTSTRAP, Genexus, JSON, API REST, SOAP UI, XML, SQL SERVER, NODE JS, ANGULAR, MONGO DB",
  ];

  const certifications = [
    {
      title: "Master en JavaScript: Aprender JS, jQuery, Angular, NodeJS",
      link: "https://www.udemy.com/certificate/UC-c57bbf0e-55fb-4727-b87f-6fdb6f04592b/",
    },

    {
      title: "API/REST con .NET + Swagger + SQL Server",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-ae826f8e-9e67-4775-a545-9e54ad747d3a.pdf",
    },
    {
      title: "C# nivel Básico a intermedio",
      link: "https://ude.my/UC-78be4aea-1dee-4878-ba56-d73379855b79",
    },
    {
      title: "Flutter: Tu guía completa de desarrollo para IOS y Android",
      link: "https://www.udemy.com/certificate/UC-4bba7df0-cd8b-4320-aa8e-41047acdc753/",
    },
    {
      title: "Scrum Fundamentals Certified (SFC)",
      link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=809801",
    },
  ];

  const renderTimeline = (items: TimelineItem[], icon: React.ReactNode) =>
    items.map((item, index) => (
      <div
        key={index}
        className="mb-8 flex flex-col items-center text-center relative"
      >
        {index < items.length - 1 && (
          <div className="absolute left-1/2 -translate-x-1/2 top-10 h-full w-[2px] bg-purple-600 z-0"></div>
        )}
        <div className="z-10 flex flex-col items-center bg-white p-4 rounded-md shadow-md w-full">
          <div className="mb-2">{icon}</div>
          <span className="text-yellow-500 font-bold">{item.period}</span>
          <h3 className="text-lg font-semibold text-black mt-1">
            {item.title}
          </h3>
          {item.companyOrInstitution && (
            <p className="text-gray-800 italic mt-1">
              {item.companyOrInstitution}
            </p>
          )}
          {item.description &&
            item.description.map((desc, i) => (
              <p key={i} className="text-gray-600 mt-1">
                {desc}
              </p>
            ))}
          {item.technologies && (
            <p className="text-gray-600 mt-1">
              <strong>Tecnologías:</strong> {item.technologies.join(", ")}
            </p>
          )}
          {item.projects && (
            <p className="text-gray-600 mt-1">
              <strong>Proyectos:</strong> {item.projects.join(", ")}
            </p>
          )}
        </div>
      </div>
    ));

  return (
    <section
      id="experience"
      className="w-full bg-white px-6 md:px-12 py-12 border-t-2 border-gray-300"
    >
      <div className="max-w-3xl mx-auto text-center">
        <button className="bg-purple-500 text-white px-4 py-2 text-sm rounded-full hover:bg-purple-700 transition flex items-center justify-center gap-2 mx-auto mb-6">
          <FaHistory size={16} /> Trayectoria
        </button>
        {/* Experiencia */}
        <h2 className="text-2xl md:text-4xl text-gray-800 font-bold mb-4 flex justify-center items-center gap-2">
          <FaBriefcase /> Experiencia
        </h2>
        {renderTimeline(
          experience,
          <FaBriefcase className="text-black" size={24} />
        )}

        {/* Educación */}
        <h2 className="text-2xl text-gray-800 md:text-4xl font-bold mt-12 mb-4 flex justify-center items-center gap-2">
          <FaGraduationCap /> Educación
        </h2>
        {renderTimeline(
          education,
          <FaGraduationCap className="text-black" size={24} />
        )}

        {/* Certificaciones */}
        <h2 className="text-2xl md:text-4xl text-gray-800 font-bold mt-12 mb-6 flex justify-center items-center gap-2">
          <FaCertificate /> Certificaciones
        </h2>

        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 justify-center">
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.link}
              target="_blank"
              className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-lg shadow-md hover:shadow-lg hover:bg-purple-100 transition w-full md:w-80"
            >
              <FaCertificate className="text-purple-600" size={24} />
              <span className="text-gray-800 font-medium">{cert.title}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
