import { Sparkles, SmilePlus, Stethoscope, Wand2, Siren } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export function Services() {
  return (
    <section className="py-24 bg-surface" id="servicios">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-headline font-extrabold text-primary mb-4">Nuestros Servicios</h2>
          <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border-none">
            <Sparkles className="w-10 h-10 text-primary mb-6 block" />
            <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">Limpieza dental</h3>
            <p className="text-on-surface-variant leading-relaxed">Profilaxis profesional para eliminar placa y sarro, manteniendo tus encías sanas.</p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border-none">
            <SmilePlus className="w-10 h-10 text-primary mb-6 block" />
            <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">Ortodoncia</h3>
            <p className="text-on-surface-variant leading-relaxed">Alineación dental con brackets tradicionales o sistemas estéticos avanzados.</p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border-none">
            <Stethoscope className="w-10 h-10 text-primary mb-6 block" />
            <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">Implantes dentales</h3>
            <p className="text-on-surface-variant leading-relaxed">Recupera la funcionalidad y estética de tu boca con tecnología de titanio.</p>
          </div>
          {/* Service Card 4 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border-none">
            <Wand2 className="w-10 h-10 text-primary mb-6 block" />
            <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">Blanqueamiento</h3>
            <p className="text-on-surface-variant leading-relaxed">Devuelve el brillo natural a tus dientes con sesiones rápidas y seguras.</p>
          </div>
          {/* Service Card 5 */}
          <div className="bg-surface-container-lowest p-10 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-lg border-none">
            <Siren className="w-10 h-10 text-primary mb-6 block" />
            <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">Urgencias</h3>
            <p className="text-on-surface-variant leading-relaxed">Atención inmediata para dolor agudo, fracturas o pérdida dental accidental.</p>
          </div>
          {/* Service Card 6 (CTA) */}
          <div className="bg-primary p-10 rounded-xl flex flex-col justify-center items-center text-center">
            <h3 className="text-white text-2xl font-headline font-bold mb-6">¿Necesitas algo más?</h3>
            <a className="whatsapp-green text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform" href="https://wa.me/528100000000">
              <WhatsAppIcon className="w-5 h-5" />
              Consultar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
