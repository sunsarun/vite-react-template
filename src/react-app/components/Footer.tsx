export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] mono uppercase tracking-[0.4em] text-slate-700">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div>&copy; 2026 // SYSTEM_SARUN_ST_01</div>
        <div className="hidden md:block w-[1px] h-3 bg-white/10"></div>
        <div className="flex items-center gap-2 text-slate-500/50 group cursor-default">
          <span className="group-hover:text-cyan-400/50 transition-colors text-[9px]">Powered by</span>
          <span className="text-slate-500 group-hover:text-cyan-400 transition-colors tracking-[0.6em] text-[10px]">Gemini</span>
          <div className="w-1 h-1 rounded-full bg-cyan-500/30 group-hover:bg-cyan-400 animate-pulse"></div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
        <span>Heartbeat: Operational</span>
      </div>
      <div>LAT: 13.7563 // LON: 100.5018</div>
    </footer>
  );
};
