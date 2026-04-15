import { MapPin, Phone, Clock } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export function Contact() {
  return (
    <section className="py-24 bg-surface-container-low" id="contacto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl font-headline font-extrabold text-primary mb-6">Contáctanos</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">Estamos listos para atenderte y resolver todas tus dudas sobre tu salud dental.</p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary-fixed p-3 rounded-xl">
                <MapPin className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-on-surface">Dirección</p>
                <p className="text-on-surface-variant">Av. Cumbres, Monterrey, N.L.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary-fixed p-3 rounded-xl">
                <Phone className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-on-surface">Teléfono</p>
                <p className="text-on-surface-variant">81 0000 0000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary-fixed p-3 rounded-xl">
                <Clock className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-on-surface">Horarios</p>
                <p className="text-on-surface-variant">Lun - Sáb: 9:00 am - 7:00 pm</p>
              </div>
            </div>
          </div>
          <a className="whatsapp-green text-white px-10 py-5 rounded-2xl font-headline font-bold text-xl flex items-center justify-center gap-4 ambient-shadow hover:scale-[1.02] transition-all w-full sm:w-max" href="https://wa.me/528100000000">
            <WhatsAppIcon className="w-7 h-7" />
            Hablar por WhatsApp
          </a>
        </div>
        <div className="h-[500px] rounded-3xl overflow-hidden ambient-shadow">
          <iframe title="Map" data-location="Monterrey, N.L." frameBorder="0" height="100%" marginHeight={0} marginWidth={0} scrolling="no" src="https://maps.google.com/maps?q=25.7769,-100.3759&hl=es&z=15&output=embed" width="100%">
          </iframe>
        </div>
      </div>
    </section>
  );
}
