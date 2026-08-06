import { useState, useCallback, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Lenis from 'lenis';
import { useEasterEgg } from '../hooks/useEasterEgg';
import { Confetti } from './Confetti';
import { Language } from '../data';

interface LayoutProps {
  lang: Language;
  onLangChange: (lang: Language) => void;
}

export function Layout({ lang, onLangChange }: LayoutProps) {
  const { handleThemeClick, showConfetti } = useEasterEgg();
  const [lastLangToggle, setLastLangToggle] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    let animationFrameId: number;
    
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleLangToggle = useCallback(() => {
    const now = Date.now();
    if (now - lastLangToggle < 3000) {
      setToastMessage(lang === 'tr' ? 'Lütfen 3 saniye bekleyin.' : 'Please wait 3 seconds.');
      setTimeout(() => setToastMessage(null), 1500);
      return;
    }
    
    setLastLangToggle(now);
    onLangChange(lang === 'tr' ? 'en' : 'tr');
  }, [lang, lastLangToggle, onLangChange]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {showConfetti && <Confetti />}
      
      {toastMessage && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-[var(--border)] text-inherit px-4 py-2 rounded shadow-md z-50 animate-in fade-in slide-in-from-top-4 border border-[var(--border)]">
          {toastMessage}
        </div>
      )}

      <header className="py-4 sm:h-20 sm:py-0 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-12 border-b border-[var(--border)] z-40 bg-[var(--bg)]/80 backdrop-blur-md print:hidden gap-4 sm:gap-0">
        <Link to="/" className="flex flex-col hover:opacity-80 transition-opacity text-center sm:text-left">
          <span className="text-xl font-bold tracking-tighter uppercase">Emin Baycan</span>
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-50">IT Specialist</span>
        </Link>
          
        <nav className="flex items-center gap-3 sm:gap-6 flex-wrap justify-center">
          <Link to="/" className="text-[10px] sm:text-xs uppercase tracking-widest font-medium hover:opacity-70 transition-opacity">
            {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
          </Link>
          <Link to="/blog" className="text-[10px] sm:text-xs uppercase tracking-widest font-medium hover:opacity-70 transition-opacity">
            Blog
          </Link>
          <Link to="/cv" className="text-[10px] sm:text-xs uppercase tracking-widest font-medium hover:opacity-70 transition-opacity">
            CV
          </Link>
            
          <div className="w-px h-4 bg-[var(--border)] mx-1 sm:mx-2" />
          
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center bg-[var(--border)] rounded-full p-1 gap-1">
              <button
                onClick={handleLangToggle}
                className="px-4 py-1.5 rounded-full text-[11px] font-bold transition-all hover:opacity-80"
                aria-label="Toggle Language"
              >
                {lang.toUpperCase()}
              </button>
            </div>
              
            <button
              onClick={handleThemeClick}
              className="w-10 h-10 border border-[var(--border)] rounded-full flex items-center justify-center hover:bg-[var(--border)] transition-all"
              aria-label="Theme toggle (Secret)"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"/>
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-1 w-full mx-auto p-6 sm:p-12">
        <Outlet />
      </main>

      <footer className="border-t border-[var(--border)] py-8 mt-auto text-center print:hidden">
        <span className="text-[10px] uppercase tracking-widest opacity-40">
          eminbaycan.com © {new Date().getFullYear()} {lang === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
        </span>
      </footer>
    </div>
  );
}
