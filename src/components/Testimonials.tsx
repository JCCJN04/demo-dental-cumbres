import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-headline font-extrabold text-center text-primary mb-16">Opiniones de Pacientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-surface-container-high p-8 rounded-2xl relative">
            <span className="absolute top-4 right-8 text-primary/10 text-8xl font-serif">“</span>
            <div className="flex text-yellow-500 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-on-surface-variant italic mb-6 relative z-10">"Excelente trato y profesionalismo. Me hice un blanqueamiento y los resultados superaron mis expectativas. El consultorio es impecable."</p>
            <p className="font-bold text-primary">— Ricardo Salinas</p>
          </div>
          {/* Review 2 */}
          <div className="bg-surface-container-high p-8 rounded-2xl relative">
            <span className="absolute top-4 right-8 text-primary/10 text-8xl font-serif">“</span>
            <div className="flex text-yellow-500 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-on-surface-variant italic mb-6 relative z-10">"La mejor atención en Monterrey. Llevé a mis hijos para ortodoncia y estamos encantados con el avance. 100% recomendados."</p>
            <p className="font-bold text-primary">— Elena Villarreal</p>
          </div>
          {/* Review 3 */}
          <div className="bg-surface-container-high p-8 rounded-2xl relative">
            <span className="absolute top-4 right-8 text-primary/10 text-8xl font-serif">“</span>
            <div className="flex text-yellow-500 mb-4">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-on-surface-variant italic mb-6 relative z-10">"Tenía mucho miedo a los dentistas, pero aquí me sentí muy tranquila. Me atendieron una urgencia de forma rápida y sin dolor."</p>
            <p className="font-bold text-primary">— Martha García</p>
          </div>
        </div>
      </div>
    </section>
  );
}
