import { Reveal } from './Reveal';

export const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'MAR 2026',
      id: 'ID: AWS-SA-9921',
      color: 'from-orange-500/20'
    },
    {
      title: 'Google Cloud Professional Engineer',
      issuer: 'Google Cloud',
      date: 'JAN 2026',
      id: 'ID: GCP-PE-4452',
      color: 'from-blue-500/20'
    },
    {
      title: 'Meta Front-End Developer',
      issuer: 'Meta / Coursera',
      date: 'NOV 2025',
      id: 'ID: META-FE-8812',
      color: 'from-cyan-500/20'
    }
  ];

  return (
    <section id="certifications" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="mb-20">
          <span className="text-violet-400 mono text-xs tracking-[0.5em] uppercase mb-4 block">Validation_Protocols</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase glow-text">Certifications</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, i) => (
            <Reveal key={cert.id} delay={i * 0.1}>
              <div className={`glass-card p-8 rounded-3xl relative overflow-hidden group transition-all duration-500 hover:-translate-y-2`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="text-xs mono text-slate-500">{cert.date}</span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-white/90 group-hover:text-white transition-colors">{cert.title}</h3>
                  <p className="text-cyan-400 text-xs mono tracking-widest uppercase mb-6">{cert.issuer}</p>
                  
                  <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[11px] mono text-slate-600">{cert.id}</span>
                    <div className="w-2 h-2 rounded-full bg-emerald-500/50 group-hover:bg-emerald-400 transition-colors"></div>
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
