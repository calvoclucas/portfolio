import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center px-6 py-16 gap-10 bg-white">
      {/* Texto izquierda */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl text-custom-yellow">
          Hi! I'm Mitchell Hancock
        </h1>
        <h2 className="text-2xl text-gray-600">
          Freelance UI/UX Designer
        </h2>
        <p className="text-gray-700">
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>

        {/* Botones */}
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Hire Me
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition">
            Download CV
          </button>
        </div>

        <div className="flex gap-8 mt-10">
          <div>
            <p className="text-3xl font-bold">6+</p>
            <p className="text-dark-600">Worldwide Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold">6+</p>
            <p className="text-gray-600">Project Done</p>
          </div>
          <div>
            <p className="text-3xl font-bold">8+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>

      {/* Imagen derecha */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/logo_dark.png" // Cambia esta ruta por la de tu imagen
          alt="Mitchell Hancock"
          width={400}
          height={400}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
}
