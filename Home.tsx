import { useState, useCallback, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import { useEasterEgg } from '../hooks/useEasterEgg';
import { Confetti } from './Confetti';
import { Language } from '../data';

interface LayoutProps {
  lang: Language;
  onLangChange: (lang: Language) => void;
}

export function Layout({ lang, onLangChange }: LayoutProps) {
  const navigate = useNavigate();
  const { handleThemeClick, showConfetti } = useEasterEgg();
  const [lastLangToggle, setLastLangToggle] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (toastMessage) {
      timeoutId = setTimeout(() => setToastMessage(null), 3000);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [toastMessage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCmdOrCtrl = e.ctrlKey || e.metaKey;
      if (
        e.key === 'F12' ||
        (isCmdOrCtrl && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
        (isCmdOrCtrl && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
        (isCmdOrCtrl && e.shiftKey && (e.key === 'C' || e.key === 'c')) ||
        (isCmdOrCtrl && e.altKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c' || e.key === 'U' || e.key === 'u')) ||
        (isCmdOrCtrl && (e.key === 'U' || e.key === 'u'))
      ) {
        e.preventDefault();
        navigate('/caught');
      }
    };

    // DevTools Algılama (İncele / Inspect Element yapıldığında)
    let devtoolsOpen = false;
    const checkDevTools = () => {
      const widthDiff = window.outerWidth - window.innerWidth > 160;
      const heightDiff = window.outerHeight - window.innerHeight > 160;
      if (widthDiff || heightDiff) {
        if (!devtoolsOpen) {
          devtoolsOpen = true;
          navigate('/caught');
        }
      }
    };

    const devtoolsInterval = setInterval(checkDevTools, 500);
    window.addEventListener('resize', checkDevTools);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(devtoolsInterval);
      window.removeEventListener('resize', checkDevTools);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  useEffect(() => {
    const handleMouseUp = async () => {
      const selection = window.getSelection();
      if (!selection) return;

      const text = selection.toString().trim();
      if (!text) return;

      if (text.length > 10) {
        try {
          await navigator.clipboard.writeText(text);
          setToastMessage(lang === 'tr' ? 'Metin başarıyla kopyalandı 📋' : 'Text copied to clipboard 📋');
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [lang]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
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
      return;
    }
    
    setLastLangToggle(now);
    onLangChange(lang === 'tr' ? 'en' : 'tr');
  }, [lang, lastLangToggle, onLangChange]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {showConfetti && <Confetti />}
      
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 bg-[var(--border)] text-inherit px-6 py-3 rounded-full shadow-lg z-50 animate-in fade-in slide-in-from-top-4 border border-[var(--border)] font-medium tracking-wide">
          {toastMessage}
        </div>
      )}

      <header className="sticky top-0 py-4 sm:h-20 sm:py-0 flex flex-col sm:flex-row items-center justify-between px-4 sm:px-12 border-b border-[var(--border)] z-40 bg-[var(--bg)]/80 backdrop-blur-md print:hidden gap-4 sm:gap-0">
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity text-center sm:text-left">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter uppercase">Emin Baycan</span>
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-50">IT Specialist</span>
          </div>
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
