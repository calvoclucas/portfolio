import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";

export default function Home() {
  return (
    <section
      id="inicio"
      className="w-full flex flex-col md:flex-row items-center min-h-screen px-6 md:px-12 bg-white mt-28"
    >
      <div className="w-full flex flex-col md:flex-row max-w-[1440px] mx-auto h-full">
        <article className="w-full md:w-1/2 flex flex-col justify-center h-full z-10 relative">
          <p className="inline-block w-fit text-yellow-400 bg-[rgba(255,196,31,0.14)] font-semibold text-lg p-2.5 mb-12 mt-12">
            Hola! Soy Lucas Calvo Coltro
          </p>

          <h1 className="text-black font-bold text-3xl/normal md:text-[50px]/normal">
            Freelance Developer
          </h1>
          <p className="text-gray-500 mb-12 mt-12 text-base md:text-base">
            Técnico Universitario en Programación y estudiante de Ingeniería en
            Sistemas, apasionado por desarrollo. Me gusta combinar creatividad y
            tecnología para crear aplicaciones funcionales y atractivas.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/lucas-calvo-coltro/"
              download
              className="bg-purple-600 text-white border border-gray-300 font-bold p-5 hover:bg-gray-800 hover:text-white transition flex items-center gap-2"
            >
              <FaRegUser size={20} /> Contratar
            </a>
            <a
              href="/CV_Lucas Calvo Coltro.pdf"
              download
              className="bg-white text-black border border-gray-300 font-bold px-2 p-5 hover:bg-gray-800 hover:text-white transition flex items-center gap-2"
            >
              <MdLibraryBooks size={20} /> Descargar CV
            </a>
          </div>

          <div className="flex flex-row justify-center lg:justify-start gap-6 mt-12 mb-12 flex-wrap">
            <div className="flex flex-col items-center flex-shrink-0">
              <h3 className="text-3xl lg:text-4xl font-bold text-black">5+</h3>
              <p className="text-base md:text-sm lg:text-base text-gray-400 mt-1">
                Proyectos Personales
              </p>
            </div>

            <div className="flex flex-col items-center flex-shrink-0">
              <h3 className="text-3xl lg:text-4xl font-bold text-black">8+</h3>
              <p className="text-base md:text-sm lg:text-base text-gray-400 mt-1">
                Años de Experiencia
              </p>
            </div>

            <div className="flex flex-col items-center flex-shrink-0">
              <h3 className="text-3xl lg:text-4xl font-bold text-black">6+</h3>
              <p className="text-base md:text-sm lg:text-base text-gray-400 mt-1">
                Sitios Realizados
              </p>
            </div>
          </div>
        </article>

        <div
          className="w-full md:w-1/2 flex justify-center items-center relative 
                bg-[radial-gradient(circle_at_center,_#994FF5_0%,_#FFC41F_100%)] overflow-hidden"
        >
          <img
            src="/img_profile.png"
            alt="Lucas Calvo Coltro"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition"
          />
          <div className="md:flex absolute inset-0 justify-center items-center px-4">
            <p className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-extrabold text-center text-transparent uppercase bg-gradient-to-b from-white/70 to-white/10 bg-clip-text z-20 lg:mb-160 lg:-translate-y-20">
              Lucas Calvo Coltro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
