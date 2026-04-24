import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

const links = [
  { label: 'Inicio', href: '#' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 w-full z-50 glass-nav transition-all duration-500"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.5)' : 'none' }}
      >
        <div className="flex justify-between items-center w-full px-6 py-5 max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            className="text-lg font-heading font-semibold tracking-widest uppercase"
            whileHover={{ scale: 1.02 }}
          >
            <span className="gold-gradient">Dental</span>
            <span className="text-ivory/70 ml-2 text-sm tracking-[0.3em]">Cumbres</span>
          </motion.div>

          {/* Desktop links */}
          <div className="hidden md:flex gap-10 items-center font-body text-sm tracking-widest uppercase">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="relative text-ivory-muted hover:text-gold transition-colors duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.4, duration: 0.5 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-400 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <motion.a
              href="https://wa.me/528100000000"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex whatsapp-green text-white px-5 py-2.5 rounded-full font-body font-semibold text-sm items-center gap-2 cursor-pointer tracking-wide"
              whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(37,211,102,0.4)' }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </motion.a>
            <button
              className="md:hidden text-ivory cursor-pointer"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col pt-24 px-8 pb-12"
            style={{ background: 'rgba(8,7,6,0.97)', backdropFilter: 'blur(40px)' }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-8 mt-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-3xl font-heading font-light text-ivory hover:text-gold transition-colors cursor-pointer"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/528100000000"
                className="mt-4 whatsapp-green text-white px-8 py-4 rounded-2xl font-body font-semibold flex items-center justify-center gap-3 text-lg cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                whileTap={{ scale: 0.97 }}
              >
                <WhatsAppIcon className="w-6 h-6" />
                Agendar por WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
