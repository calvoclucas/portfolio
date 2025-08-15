"use client";
import React, { useEffect, useState } from "react";
import { GrCertificate } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Certifications() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });

    // Detectar modo dark
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

  return (
    <section
      id="certificate"
      className={`w-full px-6 md:px-12 py-12 border-t-2 ${
        darkMode ? "bg-gray-900" : "bg-yellow-50 border-gray-300"
      }`}
    >
      <div
        className="max-w-4xl mx-auto text-center md:text-left"
        data-aos="fade-up"
        data-aos-easing="ease-in-out-sine"
      >
        <h2
          data-aos="fade-up"
          data-aos-easing="ease-in-out-sine"
          className={`text-2xl md:text-4xl font-bold mb-20 flex flex-wrap justify-center items-center gap-2 ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          <GrCertificate className="text-2xl md:text-3xl" /> Certificaciones
        </h2>

        <div
          className="flex flex-wrap justify-center gap-4"
          data-aos="fade-up"
          data-aos-easing="ease-in-out-sine"
        >
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 p-4 bg-yellow-100 border border-yellow-200 rounded-lg shadow-md hover:shadow-lg hover:bg-yellow-200 transition w-full lg:w-[48%]"
              data-aos="fade-up"
              data-aos-easing="ease-in-out-sine"
            >
              <GrCertificate
                className="text-yellow-600 text-2xl md:text-3xl"
                size={30}
              />
              <span className="text-gray-800 font-bold text-sm md:text-base text-center">
                {cert.title}
              </span>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-2 py-2 bg-yellow-500 text-white text-xs md:text-sm font-semibold hover:bg-yellow-600 transition rounded"
              >
                Ver Certificado
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
