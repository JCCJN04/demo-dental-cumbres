import { motion } from 'framer-motion';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export function Footer() {
  return (
    <footer className="bg-surface border-t" style={{ borderColor: 'rgba(201,168,76,0.1)' }}>
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Brand */}
          <motion.div
            className="space-y-4 max-w-xs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div>
              <span className="font-heading text-xl gold-gradient font-semibold tracking-wider">Dental</span>
              <span className="text-ivory-dim font-body text-sm tracking-[0.3em] ml-2">Cumbres</span>
            </div>
            <p className="text-ivory-dim font-body text-sm leading-relaxed">
              Brindando excelencia dental en Monterrey desde hace más de 15 años.
            </p>
            <p className="text-ivory-dim font-body text-xs">© 2025 Consultorio Dental Cumbres.</p>
            <div className="flex gap-3 pt-1">
              <motion.a
                href="https://wa.me/528100000000"
                className="text-ivory-dim hover:text-gold transition-colors duration-300 cursor-pointer"
                whileHover={{ scale: 1.15 }}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 font-body text-sm">
            {[
              {
                title: 'Explorar',
                links: [
                  { label: 'Inicio', href: '#' },
                  { label: 'Servicios', href: '#servicios' },
                  { label: 'Galería', href: '#galeria' },
                  { label: 'Contacto', href: '#contacto' },
                ],
              },
              {
                title: 'Horarios',
                links: [
                  { label: 'Lun – Vie: 9am – 7pm', href: null },
                  { label: 'Sáb: 9am – 2pm', href: null },
                  { label: 'Dom: Cerrado', href: null },
                ],
              },
              {
                title: 'Legal',
                links: [
                  { label: 'Privacidad', href: '#' },
                  { label: 'Términos', href: '#' },
                ],
              },
            ].map((col, ci) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: ci * 0.1 }}
              >
                <h4 className="font-body font-semibold text-gold text-xs tracking-[0.3em] uppercase mb-5">{col.title}</h4>
                <ul className="space-y-3 text-ivory-dim">
                  {col.links.map((link) =>
                    link.href ? (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="hover:text-gold transition-colors duration-300 cursor-pointer"
                        >
                          {link.label}
                        </a>
                      </li>
                    ) : (
                      <li key={link.label} className="text-ivory-dim/70">{link.label}</li>
                    )
                  )}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom divider */}
        <motion.div
          className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(201,168,76,0.08)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-ivory-dim text-xs font-body tracking-wide">
            Certificados por la Asociación Dental Mexicana
          </p>
          <div className="h-px flex-1 mx-8 hidden sm:block"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)' }} />
          <p className="text-ivory-dim text-xs font-body">Monterrey, Nuevo León</p>
        </motion.div>
      </div>
    </footer>
  );
}
