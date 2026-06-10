import { Reveal } from './Reveal';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      <Reveal className="active mb-12 relative">
        <div className="absolute inset-0 rounded-full blur-[100px] bg-violet-600/20 animate-pulse"></div>
        <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full p-[2px] bg-gradient-to-tr from-violet-500 via-cyan-400 to-fuchsia-500 group liquid-border">
          <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden relative z-10">
            <img 
              src="src/react-app/assets/profile.jpg"
              alt="Sarun" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
            />
            <div className="scanner"></div>
          </div>
        </div>
      </Reveal>
      <div className="text-center max-w-4xl relative z-10">
        <Reveal className="active">
          <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter mb-6 glow-text uppercase leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            SARUN
          </h1>
        </Reveal>
        <Reveal className="active" delay={0.1}>
          <p className="text-cyan-400 mono text-sm md:text-base tracking-[0.4em] uppercase mb-12">
            Liquid_Interfaces // Cosmic_Architect_v5.0
          </p>
        </Reveal>
        <Reveal className="active" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#work" className="px-10 py-4 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all uppercase text-sm tracking-widest relative overflow-hidden group">
              <span className="relative z-10">Access_Archive</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
            <a href="#arsenal" className="px-10 py-4 border border-white/10 hover:border-cyan-500/50 backdrop-blur-md rounded-full transition-all uppercase text-sm tracking-widest bg-white/5">
              Core_Modules
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
