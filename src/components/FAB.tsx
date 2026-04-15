import { WhatsAppIcon } from './icons/WhatsAppIcon';

export function FAB() {
  return (
    <a className="md:hidden fixed bottom-6 right-6 whatsapp-green text-white p-4 rounded-full ambient-shadow z-50" href="https://wa.me/528100000000" target="_blank" rel="noreferrer">
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
}
