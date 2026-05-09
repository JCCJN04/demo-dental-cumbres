const reasons = [
  {
    number: "01",
    title: "Te decimos la verdad desde el inicio",
    text: "Si no necesitas un tratamiento, te lo decimos. No trabajamos a comisión ni tenemos metas de venta.",
  },
  {
    number: "02",
    title: "Sin tiempos de espera largos",
    text: "Respetamos tu horario. Las citas son puntuales y si hay algún cambio te avisamos con anticipación.",
  },
  {
    number: "03",
    title: "Explicamos todo lo que hacemos",
    text: "Antes de iniciar cualquier procedimiento, te explicamos qué haremos, cuánto tardará y qué esperar después.",
  },
  {
    number: "04",
    title: "Seguimiento real después de tu cita",
    text: "Te contactamos días después para saber cómo vas. No desaparecemos cuando sales del consultorio.",
  },
];

export default function WhyUs() {
  return (
    <section id="por-que-nosotros" className="py-[100px] bg-[#002428]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left text */}
          <div className="lg:col-span-2">
            <h2 className="font-[family-name:var(--font-playfair)] text-[30px] leading-[1.3] font-semibold text-white mb-4">
              ¿Por qué atenderte aquí?
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#a3ced4]">
              Hay muchas clínicas en Monterrey. Esto es lo que nos diferencia,
              según nos dicen nuestros propios pacientes.
            </p>
          </div>

          {/* Right: reasons list */}
          <div className="lg:col-span-3 flex flex-col divide-y divide-[#0d3b40]">
            {reasons.map((r) => (
              <div key={r.number} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                <span className="font-[family-name:var(--font-playfair)] text-[32px] font-bold text-[#3c656a] leading-none flex-shrink-0 w-10 mt-0.5">
                  {r.number}
                </span>
                <div>
                  <div className="font-semibold text-white text-[16px] mb-1.5">
                    {r.title}
                  </div>
                  <p className="text-[15px] leading-[1.65] text-[#7ba5ab]">
                    {r.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
