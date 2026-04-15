import { Menu } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 glass-nav border-none shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tighter text-blue-800 font-headline">
          Consultorio Dental Cumbres
        </div>
        <div className="hidden md:flex gap-8 items-center font-headline font-semibold tracking-tight">
          <a className="text-blue-700 border-b-2 border-blue-700 pb-1" href="#">Home</a>
          <a className="text-slate-600 hover:text-green-500 transition-colors duration-300" href="#servicios">Servicios</a>
          <a className="text-slate-600 hover:text-green-500 transition-colors duration-300" href="#galeria">Galeria</a>
          <a className="text-slate-600 hover:text-green-500 transition-colors duration-300" href="#contacto">Contacto</a>
        </div>
        <div className="flex items-center gap-4">
          <a className="whatsapp-green text-white px-5 py-2.5 rounded-xl font-headline font-bold flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all" href="https://wa.me/528100000000" target="_blank" rel="noreferrer">
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp
          </a>
          <Menu className="md:hidden text-on-surface w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}
