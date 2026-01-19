
import React from 'react';

const Hero: React.FC<{ t: any }> = ({ t }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-4 md:pt-32 md:pb-6 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left z-10 animate-from-left">
            <h1 className="text-4xl md:text-6xl font-black leading-[0.95] text-ios-text mb-12 tracking-tighter uppercase">
              {t.hero_title}
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={() => scrollTo('coaching')}
                className="w-full sm:w-auto bg-ios-text text-white px-8 py-4 rounded-ios font-black text-[10px] uppercase tracking-[0.2em] hover:bg-kaki-800 transition-all shadow-lg hover-zoom"
              >
                {t.hero_btn_1}
              </button>
              <button 
                onClick={() => scrollTo('plans')}
                className="w-full sm:w-auto px-8 py-4 rounded-ios font-black text-[10px] uppercase tracking-[0.2em] text-ios-text bg-kaki-50 border border-black/[0.05] hover:bg-kaki-100 transition-all hover-zoom"
              >
                {t.hero_btn_2}
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative group animate-from-right delay-1">
            <div className="relative z-10">
              <div className="bg-kaki-50 w-full aspect-[4/5] rounded-[40px] overflow-hidden ios-shadow border-[8px] border-white transition-all duration-1000">
                <img 
                  src="https://res.cloudinary.com/deb7eunq3/image/upload/v1768687303/Dise%C3%B1o_sin_t%C3%ADtulo_7_ltmp63.jpg" 
                  alt="Julian Zelaya PT" 
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-kaki-200/20 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-kaki-100/30 blur-[120px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
