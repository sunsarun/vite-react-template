import { Reveal } from '../components/Reveal';

export const Blog = () => {
  const posts = [
    {
      title: "The Future of Fluid Interfaces",
      date: "JUNE 01, 2026",
      category: "DESIGN",
      excerpt: "Exploring how motion and physics-based interactions are redefining the modern web experience."
    },
    {
      title: "Architecting Scalable Design Systems",
      date: "MAY 24, 2026",
      category: "ENGINEERING",
      excerpt: "Deep dive into the architecture behind enterprise-grade component libraries using Tailwind and React."
    },
    {
      title: "The Rise of AI-Driven UI Components",
      date: "MAY 15, 2026",
      category: "AI",
      excerpt: "How generative models are changing the way we think about user interface development and personalization."
    }
  ];

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter glow-text mb-8">
            THOUGHTS<span className="text-cyan-400">.LOG</span>
          </h1>
          <p className="text-slate-400 text-xl mb-16 mono">
            Regular updates on design, technology, and the intersection of both.
          </p>
        </Reveal>

        <div className="space-y-12">
          {posts.map((post, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="group cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <span className="text-xs text-violet-400 mono tracking-[0.2em]">{post.category} // {post.date}</span>
                </div>
                <h2 className="text-4xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="w-12 h-[1px] bg-white/20 group-hover:w-24 group-hover:bg-cyan-400 transition-all duration-500"></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
