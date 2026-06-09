import { Reveal } from './Reveal';

export const Arsenal = () => {
  const modules = [
    { id: '01/', title: 'Frontend_Engine', desc: 'React, Next.js, TypeScript, TailwindCSS, Three.js' },
    { id: '02/', title: 'Backend_Core', desc: 'Node.js, Rust, Go, PostgreSQL, GraphQL' },
    { id: '03/', title: 'System_Design', desc: 'Figma, Motion Graphics, Shader-Coding, UI/UX' },
    { id: '04/', title: 'Dev_Ops', desc: 'Docker, AWS, Vercel, CI/CD, Git_Actions' },
  ];

  return (
    <section id="arsenal" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-20 text-center">
          <span className="text-cyan-400 mono text-xs tracking-[0.5em] uppercase mb-4 block">System_Components</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase glow-text">Technical_Arsenal</h2>
        </Reveal>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {modules.map((module, i) => (
            <Reveal key={module.id} className="glass-card glass-card-hover p-8 rounded-[2rem] relative overflow-hidden group" delay={i * 0.1}>
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-cyan-400 mb-6 text-3xl font-light">{module.id}</div>
              <h3 className="font-bold tracking-widest uppercase text-base mb-4 text-white/90">{module.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mono group-hover:text-slate-200 transition-colors">{module.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
