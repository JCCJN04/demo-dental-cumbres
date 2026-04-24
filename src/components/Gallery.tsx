import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const images = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfGo6arqrcnsaXJ8Vky1hXGKvc4esMhvJOr4APg1R3q643Ht_-EZIs8eG7yjObculB-uVEFXAziw_5pTDfqIHdUpK8XgGaCMPqARvs928ZnXXQ2exP5MFWUgHfXCh06ZWPoUyTdMYZMfUfKC1bJu-If30_xsZnx3jNl1x42DsX-OkFtDCT9EQrIUx07tuCz3rc7hulUzHVhG4kB8vpJjkLCUeuu9hKxq7m6pUZjHFMoGd7-lP-1QHR6UF4Rw5psz0jXjWzWaWbI_Br',
    alt: 'Sonrisa perfecta resultado tratamiento dental',
    h: 'h-72',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMVG6nliIVkcJhq7vtp1OcS_d90p6Pp3ae7qDqgp_37vVDpbN7XSPPUPgJPMck2rVgvawcoj0R-Wya3xW-n-_atjpZ8nXCXzZv-634JXFg2QeXPLTbRLfJeBA7wlOxgvhgiZWV4URGzuefUn1-0i_0lckgIjgBo3qtj9KfHsneB9EgVHgLUr6cDCo-q-vaMm9vi_8TvIyBQyrRr66LY6MedJIXU1_vzQa3JCbKFX3T_rHK-PSqduBxIdBux6J2Qv-00kAAhQn4NS8X',
    alt: 'Paciente satisfecho resultado dental',
    h: 'h-56',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC03h_fd1QxhYGsuNO0_2PvaPLYpx4Cs-A5n5SUOL2tAVeU2XJ0K5y0qiyjk3gZ8W2SiSPW46GxxTkzhiaTskWvdv1D5Lh-XYtl0cHFDSPsJAPMofb_Di6DhiyiK0Ake0mAf4y_0DJzFqVhikP2KQ-kgKFnYv9HSvFzAwCVwyR9HR3ztfXI669YxVmB72wNYSF7WJmsMvBhRCwAKSrzz6pNPTPy62-eXBtRFn6v0BR-voGOREc3Z6ii2jIHX_y3xeFwTs1mqh0HKW0',
    alt: 'Dentista en consulta con tecnología avanzada',
    h: 'h-56',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmLLLxTbhsQGz1GWZQxFU17vRJ5__M3NHQ-kUDFQMgpzczrcsm1VDu8rJkt2mgrA42OYiJXPXz6nXsIwwP_uMW921HOFEop5t05QBBla7ODUuOqUd2euJ0J8dkhTyCqr8Ef7fthWl-8jm7PaY19oMt_SHKqUo6HvA4HxRuGRCzvE5CX9-ok325_GG2ZNCI0pht4nGeVyKDrlbAwaAstIqqSJ4urwzHDQBdTKa2JJkR9xBforPebw623FG-8TBKwiErPws7iBo34OSB',
    alt: 'Equipo dental moderno y tecnología avanzada',
    h: 'h-72',
  },
];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yLeft  = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);
  const yRight = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section ref={ref} className="py-32 bg-obsidian overflow-hidden" id="galeria">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <motion.div
            className="space-y-8"
            style={{ y: yLeft }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-gold text-xs font-body tracking-[0.4em] uppercase">Resultados reales</p>
            <h2 className="font-heading font-light text-ivory leading-tight text-balance"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}>
              Resultados que hablan{' '}
              <span className="gold-gradient italic">por nosotros</span>
            </h2>
            <p className="text-ivory-muted font-body text-lg leading-relaxed font-light">
              Transformaciones reales creadas con precisión clínica y sentido estético. Cada caso es único.
            </p>

            {/* Stats */}
            <div className="flex gap-12 pt-4">
              {[
                { value: 500, suffix: '+', label: 'Sonrisas Transformadas' },
                { value: 15, suffix: '', label: 'Años de Experiencia' },
              ].map(({ value, suffix, label }) => (
                <div key={label}>
                  <span className="block font-heading gold-gradient font-semibold"
                    style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                    <AnimatedCounter target={value} suffix={suffix} />
                  </span>
                  <span className="text-ivory-dim text-xs tracking-[0.2em] uppercase font-body mt-1 block">{label}</span>
                </div>
              ))}
            </div>

            {/* Separator */}
            <div className="h-px w-full mt-4"
              style={{ background: 'linear-gradient(90deg, rgba(201,168,76,0.5), transparent)' }} />

            <motion.p className="text-ivory-muted font-body text-sm italic leading-relaxed">
              "Certificados por la Asociación Dental Mexicana — calidad garantizada para toda tu familia."
            </motion.p>
          </motion.div>

          {/* Image masonry */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            style={{ y: yRight }}
          >
            <div className="space-y-4">
              {[images[0], images[1]].map((img, i) => (
                <motion.div
                  key={i}
                  className={`relative rounded-2xl overflow-hidden ${img.h} group cursor-pointer`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.03, zIndex: 10 }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ filter: 'brightness(0.8) saturate(0.85)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Gold shimmer border on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(201,168,76,0.4)' }} />
                </motion.div>
              ))}
            </div>
            <div className="space-y-4 pt-8">
              {[images[2], images[3]].map((img, i) => (
                <motion.div
                  key={i}
                  className={`relative rounded-2xl overflow-hidden ${img.h} group cursor-pointer`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.15 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.03, zIndex: 10 }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ filter: 'brightness(0.8) saturate(0.85)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(201,168,76,0.4)' }} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
