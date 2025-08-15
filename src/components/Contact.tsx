"use client";
import { useState } from "react";
import React, { useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          toast.success("Mensaje enviado correctamente!", {
            style: { fontWeight: "bold", color: "black" },
          });
          setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
          setIsModalOpen(false);
        },
        () => {
          toast.error("Error al enviar el mensaje. Intenta de nuevo.", {
            style: { fontWeight: "bold", color: "red" },
          });
        }
      );
  };

  return (
    <>
      <section
        id="contact"
        className="w-full px-6 md:px-12 py-12 border-t-2 border-gray-300"
      >
        <div className="py-16 px-6">
          <div
            className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
            data-aos="fade-up"
          >
            <div className="flex-1 text-left md:text-left">
              <h2 className="text-2xl lg:text-5xl font-bold mb-8">
                Tienes un proyecto en mente? Vamos a ponernos a trabajar.
              </h2>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-purple-600 text-white px-4 py-4 text-xl hover:bg-purple-700 transition flex items-center gap-2 mt-4"
              >
                Cont&aacute;ctame <BsArrowUpRight />
              </button>
            </div>

            <div className="flex-1 flex justify-center">
              <img
                src="/contact-cartoon.png"
                alt="Project illustration"
                className="rounded-lg shadow-lg w-full max-w-sm object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h3 className="text-2xl text-black font-bold mb-2">
              Tienes Ideas?
            </h3>
            <p className="text-gray-600 mb-6">
              Trabajemos juntos. C&oacute;ntame más sobre vos y tus ideas.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full border border-gray-300 text-black rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 text-black rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <input
                type="text"
                name="asunto"
                placeholder="Asunto"
                value={formData.asunto}
                onChange={handleChange}
                className="w-full border border-gray-300 text-black rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              />
              <textarea
                name="mensaje"
                placeholder="Mensaje"
                rows={4}
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full border border-gray-300 text-black rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-700 transition w-full"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
