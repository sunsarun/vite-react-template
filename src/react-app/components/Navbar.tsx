import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  hash?: boolean;
  isHome: boolean;
  currentPath: string;
}

const NavLink = ({ to, children, hash, isHome, currentPath }: NavLinkProps) => {
  if (hash && isHome) {
    return (
      <a href={to} className="hover:text-cyan-400 transition-colors">
        {children}
      </a>
    );
  }
  
  const destination = hash ? `/${to}` : to;
  
  return (
    <Link to={destination} className={`hover:text-cyan-400 transition-colors ${currentPath === to ? 'text-cyan-400' : ''}`}>
      {children}
    </Link>
  );
};

export const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter glow-text flex items-center gap-2">
          SARUN<span className="text-cyan-400">.DEV</span>
        </Link>
        <nav className="hidden md:flex gap-10 text-[12px] uppercase tracking-[0.3em] font-medium text-slate-300">
          <NavLink to="#home" hash isHome={isHome} currentPath={location.pathname}>Start</NavLink>
          <NavLink to="#arsenal" hash isHome={isHome} currentPath={location.pathname}>Arsenal</NavLink>
          <NavLink to="#work" hash isHome={isHome} currentPath={location.pathname}>Archive</NavLink>
          <NavLink to="#certifications" hash isHome={isHome} currentPath={location.pathname}>Certs</NavLink>
          <NavLink to="/lab" isHome={isHome} currentPath={location.pathname}>Labs</NavLink>
          <NavLink to="/blog" isHome={isHome} currentPath={location.pathname}>Blog</NavLink>
        </nav>
        <a href="mailto:contact@sarun.dev" className="hidden sm:block px-6 py-2 text-[12px] border border-cyan-400/30 rounded-full hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all uppercase tracking-widest bg-white/5">Connect</a>
      </div>
    </header>
  );
};
