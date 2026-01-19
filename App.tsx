
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KnowledgeSection from './components/KnowledgeSection';
import CoachingSection from './components/CoachingSection';
import PlansSection from './components/PlansSection';
import Footer from './components/Footer';
import { translations } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<'es' | 'en' | 'it'>('es');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white selection:bg-kaki-100 selection:text-ios-text">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        
        <KnowledgeSection t={t} />

        {/* Testimonios: Solo fotos antes/después específicas */}
        <section className="py-8 md:py-12 px-6 bg-kaki-50 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 animate-fade-up text-center md:text-left">
              <h3 className="text-4xl md:text-5xl font-black text-ios-text uppercase tracking-tighter leading-none">{t.testimonials}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Asesorado 1 */}
              <div className="bg-white p-4 md:p-6 rounded-[40px] ios-shadow border border-black/[0.01] hover-zoom animate-from-left">
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-[3/4] rounded-[24px] overflow-hidden bg-kaki-100">
                    <img src="https://res.cloudinary.com/deb7eunq3/image/upload/v1768687269/2_ecwv6k.jpg" className="w-full h-full object-cover grayscale" alt="Asesorado 1 Antes" />
                  </div>
                  <div className="aspect-[3/4] rounded-[24px] overflow-hidden bg-kaki-100 border-2 border-kaki-200">
                    <img src="https://res.cloudinary.com/deb7eunq3/image/upload/v1768687274/3_ktbxse.jpg" className="w-full h-full object-cover" alt="Asesorado 1 Después" />
                  </div>
                </div>
              </div>

              {/* Asesorado 2 - Actualizado con links de Ari */}
              <div className="bg-white p-4 md:p-6 rounded-[40px] ios-shadow border border-black/[0.01] hover-zoom animate-from-right">
                <div className="grid grid-cols-2 gap-3">
                  <div className="aspect-[3/4] rounded-[24px] overflow-hidden bg-kaki-100">
                    <img src="https://res.cloudinary.com/deb7eunq3/image/upload/v1768703744/ari_antes_e9j80j.jpg" className="w-full h-full object-cover grayscale" alt="Asesorado 2 Antes" />
                  </div>
                  <div className="aspect-[3/4] rounded-[24px] overflow-hidden bg-kaki-100 border-2 border-kaki-200">
                    <img src="https://res.cloudinary.com/deb7eunq3/image/upload/v1768703750/ari_despues_wkazfa.jpg" className="w-full h-full object-cover" alt="Asesorado 2 Después" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CoachingSection t={t} />
        
        <PlansSection t={t} />

        <section className="py-16 md:py-20 px-6 text-center bg-ios-text text-white overflow-hidden">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <span className="text-kaki-500 font-black text-[9px] uppercase tracking-[0.5em] mb-6 block">Training Logic</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">{t.cta_title}</h2>
            <button className="bg-white text-ios-text px-14 py-5 rounded-ios font-black text-[10px] uppercase tracking-[0.3em] hover:bg-kaki-50 transition-all shadow-2xl hover-zoom">
              {t.cta_btn}
            </button>
          </div>
        </section>
      </main>
      <Footer t={t} />
    </div>
  );
};

export default App;
