const testimonials = [
  {
    name: "Mariana G.",
    location: "San Nicolás, N.L.",
    initials: "MG",
    bgColor: "bg-[#bfeaf0]",
    rating: 5,
    treatment: "Ortodoncia con alineadores",
    date: "Enero 2025",
    text: "Llevaba mucho tiempo considerando los alineadores pero no me decidía. El doctor me explicó bien el proceso y el tiempo estimado desde la primera consulta, sin presionarme. Quedé contenta con el resultado.",
  },
  {
    name: "Roberto C.",
    location: "Monterrey, N.L.",
    initials: "RC",
    bgColor: "bg-[#ffe088]",
    rating: 4,
    treatment: "Implante dental",
    date: "Marzo 2025",
    text: "El proceso tardó un poco más de lo planeado por un tema de cicatrización, pero me avisaron a tiempo y ajustaron la cita sin cobrarme extra. El resultado final está muy bien.",
  },
  {
    name: "Laura V.",
    location: "Guadalupe, N.L.",
    initials: "LV",
    bgColor: "bg-[#ffdbc8]",
    rating: 5,
    treatment: "Limpieza y carillas",
    date: "Febrero 2025",
    text: "Vine por limpieza y aproveché para preguntar por las carillas. Me dijeron cuáles aplican para mi caso y cuáles no. Nada de querer venderme todo el catálogo, eso me dio mucha confianza.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`material-symbols-outlined text-lg ${
            i < rating ? "fill text-[#735c00]" : "text-[#c0c8c9]"
          }`}
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-[100px] bg-[#f3f3f3]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20">
        {/* Header */}
        <div className="mb-12 max-w-lg">
          <h2 className="font-[family-name:var(--font-playfair)] text-[30px] leading-[1.3] font-semibold text-[#002428] mb-3">
            Lo que nos han dicho
          </h2>
          <p className="text-[16px] leading-[1.6] text-[#414849]">
            Opiniones reales de pacientes que pasaron por aquí.
          </p>
        </div>

        {/* Cards — variados, no idénticos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={`bg-white rounded-xl border border-[#e8e8e8] flex flex-col gap-4 hover:shadow-[0_4px_20px_rgba(0,36,40,0.08)] transition-all duration-300 ${
                idx === 1 ? "md:mt-6" : ""
              } ${idx === 2 ? "md:mt-2" : ""}`}
            >
              {/* Top color strip */}
              <div className={`h-1.5 rounded-t-xl ${t.bgColor}`} />

              <div className="px-6 pb-6 flex flex-col gap-4 flex-grow">
                {/* Treatment + Date */}
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-semibold text-[#3c656a] uppercase tracking-wide">
                    {t.treatment}
                  </span>
                  <span className="text-[12px] text-[#717879]">{t.date}</span>
                </div>

                <StarRating rating={t.rating} />

                <p className="text-[15px] leading-[1.7] text-[#414849] flex-grow">
                  {t.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-[#f3f3f3]">
                  <div
                    className={`w-9 h-9 rounded-full ${t.bgColor} flex items-center justify-center font-bold text-[#002428] text-sm flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a1c1c] text-[14px]">
                      {t.name}
                    </div>
                    <div className="text-[12px] text-[#717879]">
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[13px] text-[#717879]">
          * Nombres abreviados con permiso de los pacientes.
        </p>
      </div>
    </section>
  );
}
