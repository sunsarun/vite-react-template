import { Reveal } from '../components/Reveal';

export const Lab = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter glow-text mb-8">
            THE <span className="text-violet-400">LAB</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mb-12 mono">
            [EXPERIMENTS_LOG_V1.0] - Where code meets curiosity. A collection of digital sketches, 
            interactive prototypes, and experimental UI components.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                <div className="scanner opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-xs text-cyan-400 mb-4 mono tracking-widest uppercase">Experiment_{i.toString().padStart(3, '0')}</div>
                  <h3 className="text-3xl font-bold mb-4">Neural Mesh Visualizer</h3>
                  <p className="text-slate-400 mb-6 text-lg">A real-time WebGL experiment exploring organic particle movement and neural connectivity patterns.</p>
                  <div className="flex gap-3">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs mono">THREE.JS</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs mono">SHADERS</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
