import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, MouseEvent } from 'react';
import { Sparkles, SmilePlus, Stethoscope, Wand2, Siren, HeartPulse } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const services = [
  {
    icon: Sparkles,
    title: 'Limpieza Dental',
    desc: 'Profilaxis profesional para eliminar placa y sarro, manteniendo tus encías sanas y tu aliento fresco.',
  },
  {
    icon: SmilePlus,
    title: 'Ortodoncia',
    desc: 'Alineación dental con brackets tradicionales o sistemas estéticos avanzados para una sonrisa perfecta.',
  },
  {
    icon: Stethoscope,
    title: 'Implantes Dentales',
    desc: 'Recupera la funcionalidad y estética de tu boca con tecnología de titanio de última generación.',
  },
  {
    icon: Wand2,
    title: 'Blanqueamiento',
    desc: 'Devuelve el brillo natural a tus dientes con sesiones rápidas, seguras y de resultados visibles.',
  },
  {
    icon: Siren,
    title: 'Urgencias',
    desc: 'Atención inmediata para dolor agudo, fracturas o pérdida dental accidental. Siempre disponibles.',
  },
];

function Card3D({ children, delay }: { children: React.ReactNode; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="cursor-pointer"
      style={{ perspective: 900, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="glass-card rounded-2xl p-8 h-full transition-shadow duration-300 hover:gold-border-glow group"
      >
        {/* Inner depth layer */}
        <div style={{ transform: 'translateZ(20px)' }}>
          {children}
        </div>
        {/* Sheen */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
      </motion.div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section className="py-32 bg-surface" id="servicios">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold text-xs font-body tracking-[0.4em] uppercase mb-4">Lo que ofrecemos</p>
          <h2 className="font-heading font-light text-ivory leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Nuestros <span className="gold-gradient italic">Servicios</span>
          </h2>
          <div className="h-px w-20 mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Card3D key={svc.title} delay={i * 0.1}>
                <div className="mb-6">
                  <div className="inline-flex p-3 rounded-xl mb-2"
                    style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <h3 className="font-heading text-2xl text-ivory font-light mb-3 group-hover:text-gold transition-colors duration-300">
                  {svc.title}
                </h3>
                <p className="text-ivory-muted font-body text-sm leading-relaxed">{svc.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-gold text-xs font-body font-semibold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Saber más</span>
                  <span>→</span>
                </div>
              </Card3D>
            );
          })}

          {/* CTA card */}
          <motion.div
            className="rounded-2xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #9A7A2E 0%, #C9A84C 50%, #E8C97A 100%)' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, boxShadow: '0 24px 60px rgba(201,168,76,0.35)' }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 opacity-20"
              style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white 0%, transparent 60%)' }} />
            <HeartPulse className="w-10 h-10 text-obsidian/70 mb-4" />
            <h3 className="text-obsidian text-2xl font-heading font-semibold mb-2">¿Necesitas algo más?</h3>
            <p className="text-obsidian/70 text-sm font-body mb-6">Consulta personalizada sin costo</p>
            <motion.a
              href="https://wa.me/528100000000"
              className="whatsapp-green text-white px-6 py-3 rounded-full font-body font-semibold text-sm flex items-center gap-2 cursor-pointer tracking-wide"
              whileHover={{ scale: 1.05, boxShadow: '0 0 24px rgba(37,211,102,0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              <WhatsAppIcon className="w-4 h-4" />
              Consultar gratis
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
