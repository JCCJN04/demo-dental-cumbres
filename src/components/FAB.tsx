import { motion } from 'framer-motion';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export function FAB() {
  return (
    <motion.a
      href="https://wa.me/528100000000"
      target="_blank"
      rel="noreferrer"
      className="md:hidden fixed bottom-6 right-6 whatsapp-green text-white p-4 rounded-full z-50 cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 300, damping: 20 }}
      whileHover={{ scale: 1.12, boxShadow: '0 0 32px rgba(37,211,102,0.6)' }}
      whileTap={{ scale: 0.93 }}
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </motion.a>
  );
}
