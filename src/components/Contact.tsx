import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const info = [
  {
    icon: MapPin,
    label: 'Dirección',
    value: 'Av. Cumbres, Monterrey, N.L.',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '81 0000 0000',
  },
  {
    icon: Clock,
    label: 'Horarios',
    value: 'Lun - Sáb: 9:00 am – 7:00 pm',
  },
];

export function Contact() {
  return (
    <section className="py-32 bg-obsidian relative overflow-hidden" id="contacto">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold text-xs font-body tracking-[0.4em] uppercase mb-4">Estamos aquí</p>
          <h2 className="font-heading font-light text-ivory leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="gold-gradient italic">Contáctanos</span>
          </h2>
          <div className="h-px w-20 mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-ivory-muted font-body text-lg leading-relaxed font-light">
              Estamos listos para atenderte y resolver todas tus dudas sobre tu salud dental.
            </p>

            <div className="space-y-6">
              {info.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className="flex items-start gap-5 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12 }}
                  >
                    <div className="flex-shrink-0 p-3 rounded-xl glass-card transition-all duration-300 group-hover:gold-border-glow">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div className="pt-1">
                      <p className="text-ivory-dim text-xs font-body tracking-widest uppercase mb-1">{item.label}</p>
                      <p className="text-ivory font-body font-light text-base">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/528100000000"
              className="whatsapp-green text-white px-8 py-4 rounded-full font-body font-semibold tracking-widest uppercase text-sm flex items-center gap-3 w-full sm:w-max justify-center cursor-pointer"
              whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(37,211,102,0.45)' }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              Hablar por WhatsApp
            </motion.a>
          </motion.div>

          {/* Right: map */}
          <motion.div
            className="h-[460px] rounded-3xl overflow-hidden relative"
            style={{ border: '1px solid rgba(201,168,76,0.15)' }}
            initial={{ opacity: 0, x: 40, rotateY: -8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ boxShadow: '0 0 60px rgba(201,168,76,0.12)' }}
          >
            {/* Gold border overlay on hover */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none z-10"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(201,168,76,0.1)' }} />
            <iframe
              title="Mapa Consultorio Dental Cumbres"
              frameBorder="0"
              height="100%"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?q=25.7769,-100.3759&hl=es&z=15&output=embed"
              width="100%"
              style={{ filter: 'grayscale(100%) invert(92%) contrast(90%) brightness(0.88) sepia(20%)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
