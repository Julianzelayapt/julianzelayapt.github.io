
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
  const wspLink = "https://wa.me/393515122826";

  return (
    <div className="min-h-screen bg-white selection:bg-kaki-100 selection:text-ios-text">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        
        <KnowledgeSection t={t} />

        {/* Testimonios: Padding inferior eliminado para pegar a la sección de asesoría */}
        <section className="pt-12 pb-0 md:pt-16 md:pb-0 px-6 bg-kaki-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="flex-1 space-y-8 animate-slide">
                <h3 className="text-4xl md:text-6xl font-black text-ios-text uppercase tracking-tighter leading-none mb-8">{t.testimonials}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Asesorado 1 */}
                  <div className="bg-white p-6 md:p-8 rounded-[40px] ios-shadow border border-black/[0.01] hover-zoom">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-[3/4] rounded-[24px] overflow-hidden bg-kaki-100">
                        <img src="https://res.cloudinary.com/deb7eunq3/image/upload/v1768687269/2_ecwv6k.jpg" className="w-full h-full object-cover grayscale" alt="Asesorado 1 Before" />
                      </div>
                      <div className="aspect-[3/4] rounded-[24px] overflow-hidden bg-kaki-100 border-2 border-kaki-200">
                        <img src="https://res.cloudinary.com/deb7eunq3/image/upload/v1768687274/3_ktbxse.jpg" className="w-full h-full object-cover" alt="Asesorado 1 After" />
                      </div>
                    </div>
                  </div>

                  {/* Asesorado 2 - Updated with new photos */}
                  <div className="bg-white p-6 md:p-8 rounded-[40px] ios-shadow border border-black/[0.01] hover-zoom">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-[3/4] rounded-[24px] overflow-hidden bg-kaki-100">
                        <img src="https://res.cloudinary.com/deb7eunq3/image/upload/v1768703744/ari_antes_e9j80j.jpg" className="w-full h-full object-cover grayscale" alt="Asesorado 2 Before" />
                      </div>
                      <div className="aspect-[3/4] rounded-[24px] overflow-hidden bg-kaki-100 border-2 border-kaki-200">
                        <img src="https://res.cloudinary.com/deb7eunq3/image/upload/v1768703750/ari_despues_wkazfa.jpg" className="w-full h-full object-cover" alt="Asesorado 2 After" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CoachingSection t={t} />
        
        <PlansSection t={t} />

        <section className="py-20 px-6 text-center bg-ios-text text-white">
          <div className="max-w-4xl mx-auto animate-slide">
            <span className="text-kaki-500 font-black text-[9px] uppercase tracking-[0.5em] mb-8 block">Training Logic</span>
            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter uppercase">{t.cta_title}</h2>
            <a href={wspLink} target="_blank" className="inline-block bg-white text-ios-text px-16 py-6 rounded-ios font-black text-[10px] uppercase tracking-[0.3em] hover:bg-kaki-50 transition-all shadow-2xl hover-zoom">
              {t.cta_btn}
            </a>
          </div>
        </section>
      </main>
      <Footer t={t} />
    </div>
  );
};

export default App;
