import { WhatsAppIcon } from './icons/WhatsAppIcon';

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-8 py-12 w-full max-w-7xl mx-auto gap-8">
        <div className="space-y-4">
          <div className="text-lg font-bold text-blue-800 dark:text-blue-300 font-headline">
            Consultorio Dental Cumbres
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs leading-relaxed">
            © 2024 Consultorio Dental Cumbres. El Curador Clínico. Brindando excelencia dental en Monterrey.
          </p>
          <div className="flex gap-4">
            <a className="text-slate-400 hover:text-green-600 transition-colors" href="https://wa.me/528100000000">
              <WhatsAppIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 font-label text-sm">
          <div>
            <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-4 uppercase tracking-wider">Explorar</h4>
            <ul className="space-y-3 text-slate-500 dark:text-slate-400">
              <li><a className="hover:underline hover:text-green-600 transition-colors" href="#">Inicio</a></li>
              <li><a className="hover:underline hover:text-green-600 transition-colors" href="#servicios">Servicios</a></li>
              <li><a className="hover:underline hover:text-green-600 transition-colors" href="#galeria">Galería</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-4 uppercase tracking-wider">Atención</h4>
            <ul className="space-y-3 text-slate-500 dark:text-slate-400">
              <li>L-V: 9am - 7pm</li>
              <li>Sáb: 9am - 2pm</li>
              <li>Dom: Cerrado</li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-slate-500 dark:text-slate-400">
              <li><a className="hover:underline hover:text-green-600 transition-colors" href="#">Privacidad</a></li>
              <li><a className="hover:underline hover:text-green-600 transition-colors" href="#">Terminos</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
