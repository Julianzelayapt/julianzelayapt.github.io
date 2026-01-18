
import React from 'react';

// Fix: Define PlanCard as a React.FC to allow standard React props like 'key' and avoid type errors during array mapping.
interface PlanCardProps {
  plan: any;
  t: any;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, t }) => (
  <div className="relative flex flex-col p-8 rounded-[32px] border border-black/[0.02] overflow-hidden group hover-zoom h-[400px] shadow-lg">
    {/* Background Image Overlay */}
    <div className="absolute inset-0 z-0">
      <img src={plan.image} alt={plan.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
    </div>

    <div className="relative z-10 flex flex-col h-full text-white">
      <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight mb-2">{plan.name}</h3>
      <div className="w-12 h-0.5 bg-kaki-400 mb-auto"></div>
      
      <p className="text-base font-medium text-white/90 mb-8 leading-relaxed italic drop-shadow-md">
        {t[plan.descKey]}
      </p>
      
      <a 
        href={plan.link} 
        target="_blank" 
        className="w-full py-4 rounded-ios bg-white text-ios-text font-black text-[11px] uppercase tracking-[0.2em] text-center transition-all hover:bg-kaki-100"
      >
        {t.select}
      </a>
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
    <section id="plans" className="py-12 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-slide">
          <h2 className="text-4xl md:text-7xl font-black text-ios-text mb-4 tracking-tighter uppercase leading-none">{t.plans_title}</h2>
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-8 animate-slide">
            <div className="h-px flex-grow bg-black/5"></div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-kaki-500">{t.gymbro}</h3>
            <div className="h-px flex-grow bg-black/5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide delay-1">
            {gymbroPlans.map((plan, i) => <PlanCard key={i} plan={plan} t={t} />)}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8 animate-slide">
            <div className="h-px flex-grow bg-black/5"></div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-kaki-500">{t.gymgirl}</h3>
            <div className="h-px flex-grow bg-black/5"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-slide delay-2">
            {gymgirlPlans.map((plan, i) => <PlanCard key={i} plan={plan} t={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
