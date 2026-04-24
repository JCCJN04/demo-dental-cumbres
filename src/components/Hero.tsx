import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const yText   = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const yImage  = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <header ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-obsidian">
      {/* Background ambient orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full animate-orb-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          className="absolute -bottom-60 -right-20 w-[600px] h-[600px] rounded-full animate-orb-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
            animationDelay: '2s',
          }}
        />
        {/* Floating 3D shapes */}
        <motion.div
          className="absolute top-1/3 left-1/2 w-4 h-4 rounded-full bg-gold/40 animate-float-slow"
          style={{ animationDelay: '0s', boxShadow: '0 0 20px rgba(201,168,76,0.6)' }}
        />
        <motion.div
          className="absolute top-1/4 right-1/3 w-2 h-2 rounded-full bg-gold/60 animate-float-slower"
          style={{ animationDelay: '1s', boxShadow: '0 0 12px rgba(201,168,76,0.8)' }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-gold-light/30 animate-float-slow"
          style={{ animationDelay: '3s', boxShadow: '0 0 16px rgba(232,201,122,0.5)' }}
        />
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#C9A84C" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Text column */}
        <motion.div className="space-y-8 z-10" style={{ y: yText, opacity }}>
          <motion.p
            className="text-gold text-sm font-body tracking-[0.4em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Excelencia Dental · Monterrey
          </motion.p>

          <motion.h1
            className="font-heading font-light leading-[1.1] text-balance"
            style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Tu sonrisa merece{' '}
            <span className="shimmer-text italic">el mejor</span>
            <br />
            <span className="text-ivory">cuidado</span>
          </motion.h1>

          <motion.p
            className="text-ivory-muted font-body text-lg leading-relaxed max-w-md font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Atención personalizada en Cumbres. Combinamos tecnología de vanguardia con un trato humano excepcional.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="https://wa.me/528100000000"
              className="whatsapp-green text-white px-8 py-4 rounded-full font-body font-semibold text-sm tracking-widest uppercase flex items-center justify-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(37,211,102,0.45)' }}
              whileTap={{ scale: 0.97 }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              Agendar Cita
            </motion.a>

            <motion.a
              href="#servicios"
              className="px-8 py-4 rounded-full border border-gold/30 font-body font-semibold text-sm tracking-widest uppercase text-gold hover:bg-gold/8 hover:border-gold/60 transition-all duration-300 text-center cursor-pointer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Ver Servicios
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-10 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            {[['500+', 'Sonrisas'], ['15', 'Años'], ['100%', 'Garantía']].map(([num, label]) => (
              <div key={label} className="text-center">
                <span className="block font-heading text-3xl gold-gradient font-semibold">{num}</span>
                <span className="text-ivory-dim text-xs tracking-[0.25em] uppercase font-body mt-1 block">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image column with 3D depth effect */}
        <motion.div
          className="relative z-10"
          style={{ y: yImage }}
          initial={{ opacity: 0, x: 60, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main image with 3D perspective frame */}
          <motion.div
            className="relative"
            whileHover={{ rotateY: 3, rotateX: -2, scale: 1.01 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
          >
            <div className="rounded-3xl overflow-hidden ambient-dark gold-border-glow"
              style={{ border: '1px solid rgba(201,168,76,0.2)' }}>
              <img
                className="w-full h-[520px] object-cover"
                alt="Modern dental office with bright clinical lighting and advanced medical equipment"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmLLLxTbhsQGz1GWZQxFU17vRJ5__M3NHQ-kUDFQMgpzczrcsm1VDu8rJkt2mgrA42OYiJXPXz6nXsIwwP_uMW921HOFEop5t05QBBla7ODUuOqUd2euJ0J8dkhTyCqr8Ef7fthWl-8jm7PaY19oMt_SHKqUo6HvA4HxRuGRCzvE5CX9-ok325_GG2ZNCI0pht4nGeVyKDrlbAwaAstIqqSJ4urwzHDQBdTKa2JJkR9xBforPebw623FG-8TBKwiErPws7iBo34OSB"
                style={{ filter: 'brightness(0.85) contrast(1.05) saturate(0.9)' }}
              />
              {/* Gold overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
            </div>

            {/* Floating badge — 3D depth layer */}
            <motion.div
              className="absolute -bottom-6 -left-6 glass-card p-5 rounded-2xl max-w-[200px]"
              style={{ translateZ: 40 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <p className="text-gold text-xs font-body font-semibold tracking-widest uppercase">Certificados</p>
              </div>
              <p className="text-ivory-muted text-xs font-body leading-relaxed">Calidad médica garantizada por la ADM</p>
            </motion.div>

            {/* Floating top-right badge */}
            <motion.div
              className="absolute -top-4 -right-4 glass-card p-4 rounded-2xl"
              style={{ translateZ: 30 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.7 }}
              whileHover={{ y: 4 }}
            >
              <p className="text-gold font-heading text-2xl font-semibold">4.9</p>
              <p className="text-ivory-dim text-xs font-body">Google Reviews</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ opacity }}
      >
        <span className="text-ivory-dim text-xs tracking-[0.3em] uppercase font-body">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-gold to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </header>
  );
}
