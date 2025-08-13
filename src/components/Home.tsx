import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center px-6 py-16 gap-10 bg-white">
      {/* Texto izquierda */}
      <article className="md:w-1/2 space-y-6">
        <header>
          <h1 className="text-xl font-bold text-yellow-500 bg-blue-600 inline-block px-2 py-1 rounded">
            Hola! Soy Lucas Calvo Coltro
          </h1>
          <h2 className="text-2xl text-gray-600 font-medium">
            Freelance UI/UX Designer
          </h2>
        </header>

        <p className="text-gray-700 leading-relaxed">
          It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>

        {/* Botones */}
        <div className="flex flex-wrap gap-4">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            aria-label="Hire me"
          >
            Hire Me
          </button>
          <a
            href="/cv.pdf"
            download="LucasCalvoColtro_CV.pdf"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-colors inline-block text-center"
            aria-label="Download CV"
          >
            Download CV
          </a>
        </div>

        {/* Métricas */}
        <div className="flex flex-wrap gap-8 mt-10 text-black-600">
          {[
            { value: "6+", label: "Worldwide Clients" },
            { value: "6+", label: "Projects Done" },
            { value: "8+", label: "Years Experience" },
          ].map(({ value, label }, index) => (
            <div key={index}>
              <p className="text-3xl font-bold">{value}</p>
              <p className="text-black-600">{label}</p>
            </div>
          ))}
        </div>
      </article>

      {/* Imagen derecha */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/logo_dark.png"
          alt="Portrait of Mitchell Hancock"
          width={400}
          height={400}
          className="rounded-full object-cover shadow-lg"
          priority
        />
      </div>
    </section>
  );
}
