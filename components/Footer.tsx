export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f3f3f3] border-t border-[#e8e8e8]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#002428] mb-2">
              Sonrisa Integral
            </div>
            <p className="text-[14px] text-[#414849] leading-[1.7]">
              Clínica dental en Monterrey, N.L.
              <br />
              Lun–Vie 9–7 pm · Sáb 9–2 pm
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <div className="text-[11px] font-semibold text-[#717879] uppercase tracking-widest mb-3">
                Sitio
              </div>
              <ul className="flex flex-col gap-2">
                {[
                  { href: "#servicios", label: "Servicios" },
                  { href: "#testimonios", label: "Testimonios" },
                  { href: "#ubicacion", label: "Cómo llegar" },
                  { href: "#contacto", label: "Agendar cita" },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-[14px] text-[#414849] hover:text-[#002428] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[11px] font-semibold text-[#717879] uppercase tracking-widest mb-3">
                Contacto
              </div>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="tel:+528112345678"
                    className="text-[14px] text-[#414849] hover:text-[#002428] transition-colors"
                  >
                    +52 (81) 1234-5678
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hola@sonrisaintegral.mx"
                    className="text-[14px] text-[#414849] hover:text-[#002428] transition-colors"
                  >
                    hola@sonrisaintegral.mx
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#e2e2e2] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[13px] text-[#717879]">
            © {year} Sonrisa Integral Monterrey
          </p>
          <div className="flex gap-5">
            <a
              href="#"
              className="text-[13px] text-[#717879] hover:text-[#002428] transition-colors"
            >
              Aviso de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
