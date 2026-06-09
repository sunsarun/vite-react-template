import { useEffect, useState, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-liquid-space relative min-h-screen">
      <div className="fixed inset-0 bg-stars pointer-events-none z-0"></div>
      
      <Navbar />
      
      <main key={location.pathname} className="relative z-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
        {children}
      </main>

      <Footer />

      {/* Progress Bar */}
      <div 
        className="fixed bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 via-cyan-400 to-fuchsia-500 shadow-[0_0_20px_rgba(139,92,246,0.5)] z-50 transition-all duration-300" 
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};
