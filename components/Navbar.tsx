
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  lang: 'es' | 'en' | 'it';
  setLang: (l: 'es' | 'en' | 'it') => void;
  t: any;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`ios-blur bg-white/80 rounded-full border border-black/[0.03] px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? 'ios-shadow py-3' : 'py-4'}`}>
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('hero')}>
            <div className="w-8 h-8 bg-ios-text rounded-full flex items-center justify-center text-white font-black text-[9px]">JZ</div>
            <span className="text-[11px] font-black tracking-[0.2em] text-ios-text uppercase">JULIAN ZELAYA PT</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollTo('knowledge')} className="text-[10px] font-black text-ios-gray hover:text-kaki-600 transition-colors uppercase tracking-widest">{t.nav_method}</button>
            <button onClick={() => scrollTo('coaching')} className="text-[10px] font-black text-ios-gray hover:text-kaki-600 transition-colors uppercase tracking-widest">{t.nav_coaching}</button>
            <button onClick={() => scrollTo('plans')} className="text-[10px] font-black text-ios-gray hover:text-kaki-600 transition-colors uppercase tracking-widest">{t.nav_plans}</button>
            
            <div className="flex gap-2 border-l border-black/5 pl-6">
              {(['es', 'en', 'it'] as const).map(l => (
                <button key={l} onClick={() => setLang(l)} className={`text-[9px] font-black uppercase px-2 py-1 rounded-md transition-all ${lang === l ? 'bg-kaki-100 text-kaki-800' : 'text-ios-gray'}`}>
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <select value={lang} onChange={(e) => setLang(e.target.value as any)} className="text-[10px] font-black uppercase bg-transparent border-none focus:ring-0">
                <option value="es">ES</option>
                <option value="en">EN</option>
                <option value="it">IT</option>
             </select>
            <button onClick={() => setIsOpen(!isOpen)} className="text-ios-text p-1">
              <div className="w-5 h-0.5 bg-current mb-1.5"></div>
              <div className="w-5 h-0.5 bg-current"></div>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden mx-6 mt-4 ios-blur bg-white/95 rounded-ios-lg border border-black/[0.05] p-8 space-y-6 ios-shadow animate-in fade-in slide-in-from-top-4">
          <button onClick={() => scrollTo('knowledge')} className="block w-full text-left text-xs font-black uppercase tracking-widest">{t.nav_method}</button>
          <button onClick={() => scrollTo('coaching')} className="block w-full text-left text-xs font-black uppercase tracking-widest">{t.nav_coaching}</button>
          <button onClick={() => scrollTo('plans')} className="block w-full text-left text-xs font-black uppercase tracking-widest">{t.nav_plans}</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
