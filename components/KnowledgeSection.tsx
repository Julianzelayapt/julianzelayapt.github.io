
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
    <section id="knowledge" className="py-16 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-slide">
          <h2 className="text-4xl md:text-6xl font-black text-ios-text mb-4 tracking-tighter uppercase leading-[0.9]">{t.knowledge_title}</h2>
          <p className="text-lg text-ios-gray font-medium leading-relaxed max-w-2xl">{t.knowledge_desc}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className={`space-y-6 animate-slide delay-${idx+1}`}>
              <div className="aspect-[4/5] rounded-[32px] overflow-hidden bg-kaki-50 ios-shadow group hover-zoom">
                <img 
                  src={images[idx]} 
                  className="w-full h-full object-cover transition-all duration-700 contrast-105" 
                  alt={item.title} 
                />
              </div>
              <div className="px-4">
                <span className="text-[10px] font-black text-kaki-400 uppercase tracking-[0.25em] mb-2 block">{item.tag}</span>
                <h3 className="text-2xl font-black text-ios-text mb-3 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-ios-gray leading-relaxed font-medium text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
