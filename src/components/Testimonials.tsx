import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: '"Excelente trato y profesionalismo. Me hice un blanqueamiento y los resultados superaron mis expectativas. El consultorio es impecable."',
    author: 'Ricardo Salinas',
    role: 'Blanqueamiento Dental',
    rating: 5,
  },
  {
    text: '"La mejor atención en Monterrey. Llevé a mis hijos para ortodoncia y estamos encantados con el avance. 100% recomendados."',
    author: 'Elena Villarreal',
    role: 'Ortodoncia Familiar',
    rating: 5,
  },
  {
    text: '"Tenía mucho miedo a los dentistas, pero aquí me sentí muy tranquila. Me atendieron una urgencia de forma rápida y sin dolor."',
    author: 'Martha García',
    role: 'Atención de Urgencias',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-surface-high overflow-hidden relative">
      {/* Background ornament */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full opacity-10"
          style={{ background: 'linear-gradient(to bottom, transparent, #C9A84C, transparent)' }} />
        <div className="absolute -top-20 left-0 right-0 h-40 opacity-5"
          style={{ background: 'radial-gradient(ellipse at center, #C9A84C 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold text-xs font-body tracking-[0.4em] uppercase mb-4">Experiencias reales</p>
          <h2 className="font-heading font-light text-ivory leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Opiniones de <span className="gold-gradient italic">Pacientes</span>
          </h2>
          <div className="h-px w-20 mx-auto"
            style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.author}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group cursor-default"
              initial={{ opacity: 0, y: 60, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.12)' }}
            >
              {/* Big quote */}
              <span
                className="absolute -top-2 right-6 font-heading text-[8rem] leading-none select-none pointer-events-none"
                style={{ color: 'rgba(201,168,76,0.08)', lineHeight: 1 }}
              >
                "
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.06 + 0.3, duration: 0.3, type: 'spring' }}
                  >
                    <Star className="w-4 h-4 fill-gold text-gold" />
                  </motion.div>
                ))}
              </div>

              {/* Text */}
              <p className="text-ivory-muted font-body text-sm leading-relaxed italic mb-8 relative z-10">
                {review.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-obsidian font-heading font-semibold text-sm"
                  style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C97A)' }}>
                  {review.author[0]}
                </div>
                <div>
                  <p className="text-ivory font-body font-semibold text-sm">{review.author}</p>
                  <p className="text-gold text-xs font-body tracking-wide">{review.role}</p>
                </div>
              </div>

              {/* Bottom shimmer line */}
              <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
            </motion.div>
          ))}
        </div>

        {/* Google rating summary */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-ivory font-body font-semibold">4.9 / 5</span>
          <span className="text-ivory-dim font-body text-sm">basado en más de 120 reseñas en Google</span>
        </motion.div>
      </div>
    </section>
  );
}
