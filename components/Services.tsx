const services = [
  {
    icon: "sentiment_satisfied",
    iconColor: "text-[#002428]",
    iconBg: "bg-[#bfeaf0]/40",
    title: "Estética Dental",
    description:
      "Carillas, diseño de sonrisa y blanqueamiento. Trabajamos con el laboratorio para que el resultado luzca natural, no artificial.",
    tag: null,
  },
  {
    icon: "align_horizontal_center",
    iconColor: "text-[#735c00]",
    iconBg: "bg-[#ffe088]/40",
    title: "Ortodoncia",
    description:
      "Brackets y alineadores invisibles. Te explicamos cada etapa del tratamiento y ajustamos el plan según cómo va avanzando.",
    tag: "Más solicitado",
  },
  {
    icon: "health_and_safety",
    iconColor: "text-[#002428]",
    iconBg: "bg-[#bfeaf0]/40",
    title: "Limpieza y Prevención",
    description:
      "Limpieza profunda, revisión y diagnóstico completo. Recomendamos visitas cada 6 meses para evitar problemas mayores.",
    tag: null,
  },
  {
    icon: "healing",
    iconColor: "text-[#361805]",
    iconBg: "bg-[#ffdbc8]/40",
    title: "Implantes Dentales",
    description:
      "Colocamos implantes de titanio con seguimiento post-tratamiento incluido. Te orientamos sobre tiempos y cuidados desde el inicio.",
    tag: null,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20">
        {/* Section Header — sin badge genérico */}
        <div className="mb-12 max-w-lg">
          <h2 className="font-[family-name:var(--font-playfair)] text-[30px] leading-[1.3] font-semibold text-[#002428] mb-3">
            ¿Qué tratamos?
          </h2>
          <p className="text-[16px] leading-[1.6] text-[#414849]">
            Desde la primera consulta te decimos qué necesitas y qué no.
            Nada que no sea necesario.
          </p>
        </div>

        {/* Cards — 2 columns on md, 4 on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative bg-[#f9f9f9] rounded-xl p-7 border border-[#e8e8e8] hover:border-[#a3ced4] hover:shadow-[0_4px_24px_rgba(0,36,40,0.08)] transition-all duration-300 flex gap-5"
            >
              {service.tag && (
                <span className="absolute top-4 right-4 bg-[#ffe088] text-[#574500] text-[11px] font-semibold px-2.5 py-1 rounded-full">
                  {service.tag}
                </span>
              )}
              <div
                className={`w-12 h-12 rounded-full ${service.iconBg} flex items-center justify-center flex-shrink-0 ${service.iconColor} mt-0.5`}
              >
                <span className="material-symbols-outlined text-2xl">
                  {service.icon}
                </span>
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-[20px] font-semibold text-[#002428] mb-2">
                  {service.title}
                </h3>
                <p className="text-[15px] leading-[1.65] text-[#414849]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-[14px] text-[#717879] flex items-start gap-2">
          <span className="material-symbols-outlined text-base text-[#3c656a] mt-0.5">
            info
          </span>
          ¿No encuentras lo que buscas? Escríbenos, también atendemos urgencias
          y otros tratamientos no listados aquí.
        </p>
      </div>
    </section>
  );
}
