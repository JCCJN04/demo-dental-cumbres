export default function Contact() {
  return (
    <section id="contacto" className="py-[100px] bg-[#002428]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="text-white">
            <h2 className="font-[family-name:var(--font-playfair)] text-[30px] md:text-[36px] leading-[1.3] font-semibold mb-4">
              Agenda tu cita
            </h2>
            <p className="text-[16px] leading-[1.7] text-[#a3ced4] mb-8">
              Llena el formulario o escríbenos por WhatsApp. Te contactamos
              en menos de 24 horas para confirmar tu cita.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#a3ced4]">
                  phone
                </span>
                <a
                  href="tel:+528112345678"
                  className="text-[#bfeaf0] hover:text-white transition-colors text-[16px]"
                >
                  +52 (81) 1234-5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#a3ced4]">
                  schedule
                </span>
                <span className="text-[#bfeaf0] text-[16px]">
                  Lun–Vie 9–7 pm &nbsp;·&nbsp; Sáb 9–2 pm
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#a3ced4] mt-0.5">
                  location_on
                </span>
                <span className="text-[#bfeaf0] text-[16px] leading-[1.6]">
                  Av. Vasconcelos 1234
                  <br />
                  San Pedro Garza García, N.L.
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
            <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#414849] mb-1.5">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full border border-[#c0c8c9] rounded-lg px-4 py-3 text-[15px] placeholder:text-[#a0a8a9] focus:outline-none focus:border-[#3c656a] focus:ring-2 focus:ring-[#bfeaf0]/60 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#414849] mb-1.5">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="81 1234-5678"
                    className="w-full border border-[#c0c8c9] rounded-lg px-4 py-3 text-[15px] placeholder:text-[#a0a8a9] focus:outline-none focus:border-[#3c656a] focus:ring-2 focus:ring-[#bfeaf0]/60 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#414849] mb-1.5">
                  ¿Qué necesitas?
                </label>
                <select className="w-full border border-[#c0c8c9] rounded-lg px-4 py-3 text-[15px] text-[#1a1c1c] focus:outline-none focus:border-[#3c656a] focus:ring-2 focus:ring-[#bfeaf0]/60 transition bg-white">
                  <option value="">Selecciona un tratamiento</option>
                  <option>Limpieza dental</option>
                  <option>Ortodoncia / Alineadores</option>
                  <option>Blanqueamiento</option>
                  <option>Carillas</option>
                  <option>Implante dental</option>
                  <option>Revisión general</option>
                  <option>Otro / No sé aún</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#414849] mb-1.5">
                  Comentario{" "}
                  <span className="text-[#717879] font-normal">(opcional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Algún detalle que quieras que sepamos antes de tu cita..."
                  className="w-full border border-[#c0c8c9] rounded-lg px-4 py-3 text-[15px] placeholder:text-[#a0a8a9] focus:outline-none focus:border-[#3c656a] focus:ring-2 focus:ring-[#bfeaf0]/60 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#002428] text-white py-3.5 rounded-full text-[16px] font-semibold hover:opacity-85 hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                Mandar solicitud
              </button>

              <p className="text-center text-[13px] text-[#717879]">
                También puedes escribirnos por{" "}
                <a
                  href="https://wa.me/5218112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3c656a] font-medium hover:underline"
                >
                  WhatsApp
                </a>{" "}
                si lo prefieres.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
