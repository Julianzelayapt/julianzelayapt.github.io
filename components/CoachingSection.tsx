
import React from 'react';

const CoachingSection: React.FC<{ t: any }> = ({ t }) => {
  const wspLink = "https://wa.me/393515122826";

  return (
    <section id="coaching" className="py-8 md:py-12 px-6 bg-kaki-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[40px] p-6 md:p-12 relative ios-shadow border border-black/[0.02]">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 animate-from-left">
              <span className="text-kaki-500 font-black text-[9px] uppercase tracking-[0.4em] mb-4 block">Premium Mentorship</span>
              <h2 className="text-3xl md:text-5xl font-black text-ios-text mb-6 leading-[0.9] uppercase tracking-tighter">{t.coaching_title}</h2>
              <p className="text-lg text-ios-gray mb-8 leading-relaxed font-medium">
                {t.coaching_desc}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Basic Pack */}
                <div className="p-6 rounded-[24px] bg-kaki-50 border border-black/[0.02] hover-zoom animate-from-left delay-1">
                   <h3 className="text-lg font-black uppercase mb-3 tracking-tighter">{t.pack_basic}</h3>
                   <ul className="space-y-2 mb-6 text-[10px] font-bold text-ios-gray uppercase tracking-wider">
                     <li className="flex gap-2"><span>•</span> {t.pack_feature_routine}</li>
                     <li className="flex gap-2"><span>•</span> {t.pack_feature_nutri}</li>
                     <li className="flex gap-2"><span>•</span> {t.pack_feature_wsp_1}</li>
                     <li className="flex gap-2"><span>•</span> {t.pack_feature_support}</li>
                   </ul>
                   <a href={wspLink} target="_blank" className="inline-block w-full text-center bg-ios-text text-white py-3 rounded-ios font-black text-[9px] uppercase tracking-widest hover:bg-kaki-800 transition-all">
                     {t.more_info}
                   </a>
                </div>

                {/* Premium Pack */}
                <div className="p-6 rounded-[24px] bg-ios-text text-white border border-black/[0.02] hover-zoom shadow-xl animate-from-right delay-1">
                   <h3 className="text-lg font-black uppercase mb-3 tracking-tighter text-kaki-300">{t.pack_premium}</h3>
                   <ul className="space-y-2 mb-6 text-[10px] font-bold text-white/70 uppercase tracking-wider">
                     <li className="flex gap-2"><span>•</span> {t.pack_feature_routine}</li>
                     <li className="flex gap-2"><span>•</span> {t.pack_feature_nutri}</li>
                     <li className="flex gap-2"><span>•</span> {t.pack_feature_wsp_all}</li>
                     <li className="flex gap-2"><span>•</span> {t.pack_feature_calls}</li>
                   </ul>
                   <a href={wspLink} target="_blank" className="inline-block w-full text-center bg-white text-ios-text py-3 rounded-ios font-black text-[9px] uppercase tracking-widest hover:bg-kaki-100 transition-all">
                     {t.more_info}
                   </a>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-sm animate-from-right delay-2">
              <div className="relative group">
                <div className="bg-kaki-100 p-2 rounded-[32px] ios-shadow border-2 border-white transition-all duration-700">
                  <img 
                    src="https://res.cloudinary.com/deb7eunq3/image/upload/v1768702107/c60c0612-a726-4341-ac6c-a27fffcb6127_y5n6vh.jpg" 
                    alt="Asesoría 1 a 1 con Julián" 
                    className="rounded-[24px] w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingSection;
