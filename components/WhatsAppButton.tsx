// Número de WhatsApp con código de país (México +52)
// Cambia este valor por el número real de la clínica
const WHATSAPP_NUMBER = "5218112345678";
const WHATSAPP_MESSAGE =
  "Hola, me gustaría agendar una cita en Sonrisa Integral. ¿Podrían darme más información?";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip label */}
      <span className="hidden sm:block bg-[#002428] text-white text-sm font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 shadow-lg whitespace-nowrap">
        ¡Escríbenos!
      </span>

      {/* Button */}
      <div className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)] hover:scale-110 transition-all duration-300 whatsapp-pulse">
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.821.733 5.47 2.013 7.775L0 32l8.437-2.013A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 01-6.773-1.853l-.48-.285-4.987 1.187 1.2-4.88-.32-.507A13.275 13.275 0 012.667 16C2.667 8.64 8.64 2.667 16 2.667S29.333 8.64 29.333 16 23.36 29.333 16 29.333zm7.28-9.867c-.4-.2-2.347-1.16-2.707-1.28-.36-.133-.627-.2-.893.2-.267.4-1.027 1.28-1.253 1.547-.227.267-.453.293-.853.093-.4-.2-1.693-.627-3.227-2A12.065 12.065 0 0112.08 16.4c-.227-.4-.027-.613.173-.813.187-.187.4-.48.6-.72.2-.24.267-.4.4-.667.133-.267.067-.507-.033-.707-.1-.2-.893-2.147-1.227-2.933-.32-.773-.653-.667-.893-.68H10.4c-.24 0-.627.093-.947.453-.32.36-1.227 1.2-1.227 2.92s1.253 3.387 1.427 3.627c.173.24 2.467 3.76 5.973 5.28.84.36 1.493.573 2 .733.84.267 1.607.227 2.213.133.68-.107 2.08-.853 2.373-1.68.293-.827.293-1.533.2-1.68-.08-.147-.32-.227-.72-.427z" />
        </svg>
      </div>
    </a>
  );
}
