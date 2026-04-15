import { WhatsAppIcon } from './icons/WhatsAppIcon';

export function Hero() {
  return (
    <header className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-container to-primary opacity-5"></div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tight text-primary leading-tight">
            Tu sonrisa merece el <br/><span className="text-secondary">mejor cuidado</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
            Atención personalizada en Cumbres, Monterrey. Combinamos tecnología de vanguardia con un trato humano excepcional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a className="whatsapp-green text-white px-8 py-4 rounded-xl font-headline font-bold text-lg flex items-center justify-center gap-3 ambient-shadow hover:opacity-90 active:scale-95 transition-all" href="https://wa.me/528100000000">
              <WhatsAppIcon className="w-6 h-6" />
              Agendar Cita
            </a>
            <a className="px-8 py-4 rounded-xl border border-outline-variant font-headline font-bold text-lg text-primary hover:bg-surface-container-low transition-all text-center" href="#servicios">
              Ver Servicios
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl overflow-hidden ambient-shadow rotate-2 hover:rotate-0 transition-transform duration-500">
            <img className="w-full h-[500px] object-cover" alt="Modern dental office with bright clinical lighting and advanced medical equipment in a welcoming boutique setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmLLLxTbhsQGz1GWZQxFU17vRJ5__M3NHQ-kUDFQMgpzczrcsm1VDu8rJkt2mgrA42OYiJXPXz6nXsIwwP_uMW921HOFEop5t05QBBla7ODUuOqUd2euJ0J8dkhTyCqr8Ef7fthWl-8jm7PaY19oMt_SHKqUo6HvA4HxRuGRCzvE5CX9-ok325_GG2ZNCI0pht4nGeVyKDrlbAwaAstIqqSJ4urwzHDQBdTKa2JJkR9xBforPebw623FG-8TBKwiErPws7iBo34OSB"/>
          </div>
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl ambient-shadow max-w-[200px]">
            <p className="text-sm font-bold text-primary font-headline">Certificados por la ADM</p>
            <p className="text-xs text-on-surface-variant">Calidad médica garantizada para tu familia.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
