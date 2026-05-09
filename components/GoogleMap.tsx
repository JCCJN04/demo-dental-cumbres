export default function GoogleMap() {
  const mapQuery = encodeURIComponent("Monterrey, Nuevo León, México");

  return (
    <section id="ubicacion" className="py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20">
        <div className="mb-10">
          <h2 className="font-[family-name:var(--font-playfair)] text-[30px] leading-[1.3] font-semibold text-[#002428] mb-2">
            ¿Dónde estamos?
          </h2>
          <p className="text-[16px] text-[#414849]">
            Estamos en San Pedro Garza García, con estacionamiento disponible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Map — wider */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,36,40,0.10)] border border-[#e8e8e8] h-[380px]">
            <iframe
              title="Ubicación Sonrisa Integral Monterrey"
              src={`https://maps.google.com/maps?q=${mapQuery}&output=embed&z=15`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info — compact */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <div className="text-sm font-semibold text-[#002428] mb-1 uppercase tracking-wide">
                Dirección
              </div>
              <p className="text-[15px] text-[#414849] leading-[1.6]">
                Av. Vasconcelos 1234, Col. del Valle
                <br />
                San Pedro Garza García, N.L.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold text-[#002428] mb-1 uppercase tracking-wide">
                Horarios
              </div>
              <table className="text-[15px] text-[#414849] w-full">
                <tbody>
                  <tr>
                    <td className="py-0.5 pr-4">Lunes – Viernes</td>
                    <td className="py-0.5 text-right">9:00 – 19:00</td>
                  </tr>
                  <tr>
                    <td className="py-0.5 pr-4">Sábado</td>
                    <td className="py-0.5 text-right">9:00 – 14:00</td>
                  </tr>
                  <tr className="text-[#717879]">
                    <td className="py-0.5 pr-4">Domingo</td>
                    <td className="py-0.5 text-right">Cerrado</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <div className="text-sm font-semibold text-[#002428] mb-1 uppercase tracking-wide">
                Teléfono
              </div>
              <a
                href="tel:+528112345678"
                className="text-[15px] text-[#414849] hover:text-[#002428] transition-colors"
              >
                +52 (81) 1234-5678
              </a>
            </div>

            <a
              href="https://maps.google.com/?q=Monterrey+Nuevo+León+México"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] text-[#3c656a] font-medium hover:text-[#002428] transition-colors"
            >
              <span className="material-symbols-outlined text-base">
                open_in_new
              </span>
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
