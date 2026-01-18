
import React from 'react';

const Hero: React.FC<{ t: any }> = ({ t }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-8 md:pt-32 md:pb-12 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-center lg:text-left z-10 animate-slide">
            <h1 className="text-4xl md:text-7xl font-black leading-[0.95] text-ios-text mb-6 tracking-tighter uppercase">
              {t.hero_title}
            </h1>
            <p className="text-lg md:text-xl text-ios-gray mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {t.hero_desc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#coaching" 
                onClick={(e) => handleScroll(e, 'coaching')}
                className="w-full sm:w-auto bg-ios-text text-white px-10 py-5 rounded-ios font-black text-[10px] uppercase tracking-[0.2em] text-center hover:bg-kaki-800 transition-all shadow-xl hover-zoom"
              >
                {t.hero_btn_1}
              </a>
              <a 
                href="#plans" 
                onClick={(e) => handleScroll(e, 'plans')}
                className="w-full sm:w-auto px-10 py-5 rounded-ios font-black text-[10px] uppercase tracking-[0.2em] text-ios-text bg-kaki-50 border border-black/[0.05] text-center hover:bg-kaki-100 transition-all hover-zoom"
              >
                {t.hero_btn_2}
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative group animate-slide delay-2">
            <div className="relative z-10">
              <div className="bg-kaki-50 w-full aspect-[4/5] rounded-[48px] overflow-hidden ios-shadow border-[10px] border-white transition-all duration-1000">
                <img 
                  src="https://res.cloudinary.com/deb7eunq3/image/upload/v1768687303/Dise%C3%B1o_sin_t%C3%ADtulo_7_ltmp63.jpg" 
                  alt="Julian Zelaya PT Banner" 
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
