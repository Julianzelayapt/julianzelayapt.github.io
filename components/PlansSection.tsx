
import React from 'react';

// Componente de tarjeta de plan con animaciones deslizantes
const PlanCard: React.FC<{ plan: any; t: any; index: number }> = ({ plan, t, index }) => (
  <div className={`relative flex flex-col p-8 rounded-[32px] border border-black/[0.05] overflow-hidden group hover-zoom h-[450px] shadow-lg ${index % 2 === 0 ? 'animate-from-left' : 'animate-from-right'}`}>
    {/* Background Image Overlay */}
    <div className="absolute inset-0 z-0">
      <img src={plan.image} alt={plan.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
    </div>

    <div className="relative z-10 flex flex-col h-full text-white">
      {/* Routine Name on Top */}
      <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight mb-2 drop-shadow-lg">{plan.name}</h3>
      <div className="w-12 h-1 bg-kaki-400 mb-auto rounded-full"></div>
      
      {/* Description at the bottom */}
      <div className="mt-auto">
        <p className="text-base font-semibold text-white/95 mb-6 leading-snug italic drop-shadow-md">
          {t[plan.descKey]}
        </p>
        
        <a 
          href={plan.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full inline-block py-4 rounded-ios bg-white text-ios-text font-black text-[11px] uppercase tracking-[0.2em] text-center transition-all hover:bg-kaki-50"
        >
          {t.select}
        </a>
      </div>
    </div>
  </div>
);

const PlansSection: React.FC<{ t: any }> = ({ t }) => {
  const gymbroPlans = [
    {
      name: "PPL x UL 5 days",
      descKey: "desc_ppl",
      link: "https://www.paypal.com/ncp/payment/5B4KEDF6BXBRJ",
      image: "https://res.cloudinary.com/deb7eunq3/image/upload/v1768690147/ppl_uuyoaj.png"
    },
    {
      name: "FULL BODY",
      descKey: "desc_fullbody",
      link: "https://www.paypal.com/ncp/payment/M6YAGQUPCY2PA",
      image: "https://res.cloudinary.com/deb7eunq3/image/upload/v1768690154/fb_ulasbd.png"
    },
    {
      name: "UPPER LOWER",
      descKey: "desc_ul",
      link: "https://www.paypal.com/ncp/payment/BFTQR6PV7L7XQ",
      image: "https://res.cloudinary.com/deb7eunq3/image/upload/v1768690156/ul_e1jojg.png"
    }
  ];

  const gymgirlPlans = [
    {
      name: "Grow & glow 5 DIAS",
      descKey: "desc_grow",
      link: "https://www.paypal.com/ncp/payment/XGVFNANY8S8T6",
      image: "https://res.cloudinary.com/deb7eunq3/image/upload/v1768690135/sol_yn6pvu.jpg"
    },
    {
      name: "FULL BODY",
      descKey: "desc_fullbody",
      link: "https://www.paypal.com/ncp/payment/8HQQDXRDUTZYN",
      image: "https://res.cloudinary.com/deb7eunq3/image/upload/v1768690137/sol_2_farqtc.jpg"
    }
  ];

  return (
    <section id="plans" className="py-8 md:py-12 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 animate-fade-up">
          <h2 className="text-4xl md:text-6xl font-black text-ios-text mb-2 tracking-tighter uppercase leading-none">{t.plans_title}</h2>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6 animate-fade-up">
            <div className="h-px flex-grow bg-black/5"></div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-kaki-500">{t.gymbro}</h3>
            <div className="h-px flex-grow bg-black/5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gymbroPlans.map((plan, i) => <PlanCard key={i} plan={plan} t={t} index={i} />)}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-6 animate-fade-up">
            <div className="h-px flex-grow bg-black/5"></div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-kaki-500">{t.gymgirl}</h3>
            <div className="h-px flex-grow bg-black/5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {gymgirlPlans.map((plan, i) => <PlanCard key={i} plan={plan} t={t} index={i + 1} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
