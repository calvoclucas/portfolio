import Image from "next/image";
import { FaDownload } from "react-icons/fa"; // Font Awesome
import { MdWork } from "react-icons/md"; // Material Design
import { FaRegUser } from "react-icons/fa"; // Font Awesome
import { MdLibraryBooks } from "react-icons/md";

export default function Home() {
  return (
    <section
      id="inicio"
      className="w-full flex flex-col md:flex-row items-center min-h-screen px-6 md:px-12 bg-white mt-28"
    >
      <div className="w-full flex flex-col md:flex-row max-w-[1440px] mx-auto h-full">
        {/* Texto - 1/2 ancho */}
        <article className="w-full md:w-1/2 flex flex-col justify-center h-full z-10 relative">
          <p className="text-3xl md:text-6xl lg:text-4xl font-bold text-yellow-400 mb-4 mt-12">
            Hola!
          </p>
          <p className="text-3xl md:text-6xl lg:text-4xl font-bold text-yellow-400 mb-4">
            Soy Lucas Calvo Coltro
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6">
            Freelance Developer
          </h1>
          <p className="text-gray-500 mb-8">
            Técnico Universitario en Programación y estudiante de Ingeniería en
            Sistemas, apasionado por desarrollo. Me gusta combinar creatividad y
            tecnología para crear aplicaciones funcionales y atractivas.
          </p>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/lucas-calvo-coltro/"
              download
              className="bg-purple-600 text-white border border-gray-300 font-bold px-6 py-3 hover:bg-gray-800 hover:text-white transition flex items-center gap-2"
            >
              <FaRegUser size={20} /> Contratar
            </a>
            <a
              href="/CV_Lucas Calvo Coltro.pdf"
              download
              className="bg-white text-black border border-gray-300 font-bold px-2 py-2 md:py-2 md:px-4 hover:bg-gray-800 hover:text-white transition flex items-center gap-2"
            >
              <MdLibraryBooks size={20} /> Descargar CV
            </a>
          </div>

          <div className="flex flex-wrap mt-12 justify-between gap-6 mr-14 mb-12">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-purple-600">5+</h3>
              <p className="text-black font-bold mt-1">Proyectos Personales</p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-purple-600">8+</h3>
              <p className="text-black font-bold mt-1">Años de Experiencia</p>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-purple-600">6+</h3>
              <p className="text-black font-bold mt-1">Sitios Realizados</p>
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
            className="w-full h-full object-cover "
          />
          <div className="md:flex absolute inset-0 justify-center items-center px-4">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-transparent uppercase bg-gradient-to-b from-white/70 to-white/10 bg-clip-text z-20">
              Lucas Calvo Coltro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
