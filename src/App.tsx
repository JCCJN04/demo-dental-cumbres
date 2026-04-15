import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FAB } from './components/FAB';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FAB />
    </div>
  );
}
