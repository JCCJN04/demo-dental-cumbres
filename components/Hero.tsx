export default function Hero() {
  return (
    <section className="relative w-full min-h-[820px] flex items-center justify-center bg-[#f3f3f3] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKOsnQi8eVW7VC6db22tMwyNQA9V2ynCNRyFaYDB-DabDC-l0lT43bxaVxllvFZ-OEv3yCKSmBCz7urcvjnE_SQaz5gmqp0QQkZRunE5R7iVqvgnG1NN_NScWCjZNEPlflsR5dmKtL17u0Dg1b8x-SgKi0w_zWvI9Z2oOWbyuscW5AunDdTMjDXxXa8GpmoiEAgY8IVjbqzZtl-DVEDyMe9Jv54HO0hIBNmsCYqRJZD7OUZhXzmEFEJ52TwplW1LsUI6U1bkk8Qd8l"
          alt="Consultorio dental Sonrisa Integral Monterrey"
          className="w-full h-full object-cover opacity-55 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f9f9f9]/95 via-[#f9f9f9]/65 to-[#f9f9f9]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 md:px-20 py-[120px]">
        <div className="max-w-xl">
          <h1 className="font-[family-name:var(--font-playfair)] text-[30px] md:text-[44px] leading-[1.25] font-bold text-[#002428] mb-5">
            Cuida tu salud dental en un lugar donde te tratan bien.
          </h1>

          <p className="text-[17px] leading-[1.7] text-[#414849] mb-8">
            En Sonrisa Integral atendemos desde limpiezas de rutina hasta
            tratamientos estéticos. Sin carreras, sin letra chica — solo
            atención honesta y resultados que se notan.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contacto"
              className="bg-[#002428] text-white px-7 py-3.5 rounded-full text-[16px] font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-center"
            >
              Agendar una cita
            </a>
            <a
              href="#servicios"
              className="bg-white text-[#002428] border border-[#c0c8c9] px-7 py-3.5 rounded-full text-[16px] font-semibold hover:bg-[#f3f3f3] transition-colors duration-300 text-center"
            >
              Ver servicios
            </a>
          </div>

          {/* Simple trust line */}
          <p className="mt-8 text-sm text-[#717879] flex items-center gap-2">
            <span className="material-symbols-outlined text-base text-[#3c656a]">
              verified
            </span>
            Más de 10 años atendiendo a familias en Monterrey
          </p>
        </div>
      </div>
    </section>
  );
}
