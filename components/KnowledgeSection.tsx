
import React from 'react';

const KnowledgeSection: React.FC<{ t: any }> = ({ t }) => {
  const images = [
    "https://res.cloudinary.com/deb7eunq3/image/upload/v1768687328/69484d4ade1f4_6456_ig5him.jpg",
    "https://res.cloudinary.com/deb7eunq3/image/upload/v1768687332/69484d9e26478_IMG_4218_ayly9u.png",
    "https://res.cloudinary.com/deb7eunq3/image/upload/v1768687331/69484d8843bd4_41671_ufkiej.jpg"
  ];

  const items = [
    { tag: t.k_science_tag, title: t.k_science_title, desc: t.k_science_desc },
    { tag: t.k_practice_tag, title: t.k_practice_title, desc: t.k_practice_desc },
    { tag: t.k_opt_tag, title: t.k_opt_title, desc: t.k_opt_desc }
  ];

  return (
    <section id="knowledge" className="py-8 md:py-12 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-ios-text mb-4 tracking-tighter uppercase leading-[0.9]">{t.knowledge_title}</h2>
          <p className="text-lg text-ios-gray font-medium leading-relaxed max-w-2xl">{t.knowledge_desc}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className={`space-y-4 ${idx % 2 === 0 ? 'animate-from-left' : 'animate-from-right'} delay-${idx+1}`}>
              <div className="aspect-[4/5] rounded-[28px] overflow-hidden bg-kaki-50 ios-shadow group hover-zoom">
                <img 
                  src={images[idx]} 
                  className="w-full h-full object-cover transition-all duration-700 contrast-105" 
                  alt={item.title} 
                />
              </div>
              <div className="px-2">
                <span className="text-[9px] font-black text-kaki-400 uppercase tracking-[0.2em] mb-1 block">{item.tag}</span>
                <h3 className="text-xl font-black text-ios-text mb-2 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-ios-gray leading-relaxed font-medium text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
