import { Reveal } from './Reveal';

export const Work = () => {
  const projects = [
    {
      title: 'Neural_Dashboard',
      desc: 'Cognitive telemetry interface for high-frequency data streams.',
      year: '2026',
      img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Void_Engine',
      desc: 'Lightweight 3D rendering pipeline for the modern web.',
      year: '2025',
      img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  return (
    <section id="work" className="relative py-32 px-6 max-w-7xl mx-auto">
      <Reveal className="mb-20">
        <span className="text-cyan-400 mono text-xs tracking-[0.5em] mb-4 block">Archive_Index</span>
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase glow-text">Featured_Deployments</h2>
      </Reveal>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {projects.map((project, i) => (
          <Reveal key={project.title} className="group relative" delay={i * 0.2}>
            <div className="aspect-video rounded-[2.5rem] overflow-hidden glass-card mb-8 p-2">
              <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                <img 
                  src={project.img} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-violet-950/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
            <div className="flex justify-between items-start px-4">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-cyan-400 transition-colors uppercase">{project.title}</h3>
                <p className="text-slate-400 text-base md:text-lg max-w-md">{project.desc}</p>
              </div>
              <span className="text-xs mono border border-white/10 px-4 py-1.5 rounded-full text-slate-500 bg-white/5">
                {project.year}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
