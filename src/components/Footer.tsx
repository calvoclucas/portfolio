import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Horario */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FaClock className="text-yellow-300" />
            <h3 className="font-bold text-lg">Horario</h3>
          </div>
          <p className="text-gray-200">Lun-Vie de 8am a 5pm</p>
        </div>

        {/* Teléfono */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt className="text-yellow-300" />
            <h3 className="font-bold text-lg">Teléfono</h3>
          </div>
          <p className="text-gray-200">+54 (336) 403-4400</p>
        </div>

        {/* Email */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FaEnvelope className="text-yellow-300" />
            <h3 className="font-bold text-lg">Email</h3>
          </div>
          <p className="text-gray-200">calvoclucas@gmail.com</p>
        </div>

        {/* Dirección */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FaMapMarkerAlt className="text-yellow-300" />
            <h3 className="font-bold text-lg">Dirección</h3>
          </div>
          <p className="text-gray-200">Rosario, Santa Fe, Argentina</p>
        </div>
      </div>

      {/* Copy */}
      <div className="border-t border-purple-600 text-center py-4 text-sm">
        © Copyright 2025 - Lucas Calvo Coltro - Todos los derechos reservados.
      </div>
    </footer>
  );
}
