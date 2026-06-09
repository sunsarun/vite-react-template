import { Reveal } from './Reveal';

export const History = () => {
  return (
    <section id="history" className="relative py-32 px-6 border-y border-white/5 bg-slate-950/40">
      <div className="max-w-4xl mx-auto">
        <Reveal className="mb-20 text-center">
          <span className="text-cyan-400 mono text-[10px] tracking-[0.5em] uppercase mb-4 block">System_Timeline</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase glow-text">Experience_Logs</h2>
        </Reveal>
        
        <div className="relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-violet-500/50 to-transparent -translate-x-1/2"></div>
          
          {/* Entry 1 */}
          <Reveal className="relative mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-center">
            <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0">
              <div className="text-cyan-400 mono text-xs mb-2">2024 — PRESENT</div>
              <h3 className="text-xl font-bold uppercase text-white">Senior_Developer @ Tech_Forge</h3>
              <p className="text-slate-400 text-sm mt-2">Leading the architecture of high-performance data visualization tools and neural interfaces.</p>
            </div>
            <div className="absolute left-[-17px] md:left-1/2 w-8 h-8 rounded-full border border-cyan-500/50 bg-slate-950 z-10 md:-translate-x-1/2 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            </div>
            <div className="md:w-1/2 md:pl-12"></div>
          </Reveal>
          
          {/* Entry 2 */}
          <Reveal className="relative mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-center" delay={0.2}>
            <div className="md:w-1/2 md:pr-12"></div>
            <div className="absolute left-[-17px] md:left-1/2 w-8 h-8 rounded-full border border-white/10 bg-slate-950 z-10 md:-translate-x-1/2 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-violet-500/40"></div>
            </div>
            <div className="md:w-1/2 md:pl-12 text-left">
              <div className="text-slate-500 mono text-xs mb-2">2022 — 2024</div>
              <h3 className="text-xl font-bold uppercase text-white/80">Interface_Designer @ Void_Labs</h3>
              <p className="text-slate-400 text-sm mt-2">Specialized in immersive 3D web experiences and generative design systems.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
