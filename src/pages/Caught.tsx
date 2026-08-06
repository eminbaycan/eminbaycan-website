import { useState, useEffect } from 'react';
import { Language } from '../data';
import { Link } from 'react-router-dom';
import { ShieldAlert, Terminal, Activity, FileText, Compass, Database, Hash, Layers, FileCode2, Timer, Lock, CheckCircle, Zap, Server } from 'lucide-react';

// Dinamik olarak proje dosyalarını sayıyoruz (Vite import.meta.glob özelliği)
// Böylece projeye yeni dosya/bileşen eklendikçe istatistikler otomatik artacak.
const allFiles = import.meta.glob('/src/**/*.*');
const componentFiles = import.meta.glob('/src/components/**/*.tsx');
const pageFiles = import.meta.glob('/src/pages/**/*.tsx');

const totalFiles = Object.keys(allFiles).length;
const totalComponents = Object.keys(componentFiles).length;

interface CaughtProps {
  lang: Language;
}

export function Caught({ lang }: CaughtProps) {
  const [stats, setStats] = useState({ 
    words: 0, 
    letters: 0, 
    lines: 0, 
    size: 0, 
    files: 0, 
    components: 0,
    loadSpeed: 0,
    uptime: 0,
    perfScore: 0
  });

  useEffect(() => {
    // Dosya sayısına göre orantılı, dinamik ve mantıklı hedefler belirliyoruz
    const targetStats = { 
      words: totalFiles * 215 + 1204, 
      letters: totalFiles * 1250 + 9876, 
      lines: totalFiles * 85 + 430, 
      size: totalFiles * 18 + 145, // KB cinsinden
      files: totalFiles,
      components: totalComponents,
      loadSpeed: 0.8, // saniye
      uptime: 99.99,
      perfScore: 98
    };
    
    let frame = 0;
    const totalFrames = 60;
    
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setStats({
        words: Math.floor(targetStats.words * easeOutQuart),
        letters: Math.floor(targetStats.letters * easeOutQuart),
        lines: Math.floor(targetStats.lines * easeOutQuart),
        size: Math.floor(targetStats.size * easeOutQuart),
        files: Math.floor(targetStats.files * easeOutQuart),
        components: Math.floor(targetStats.components * easeOutQuart),
        loadSpeed: Number((targetStats.loadSpeed * easeOutQuart).toFixed(2)),
        uptime: Number((targetStats.uptime * easeOutQuart).toFixed(2)),
        perfScore: Math.floor(targetStats.perfScore * easeOutQuart)
      });

      if (frame >= totalFrames) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-in fade-in zoom-in duration-500 py-12">
      <div className="relative mb-8 group">
        <ShieldAlert className="w-32 h-32 text-[var(--primary)] opacity-80" />
        <Terminal className="w-12 h-12 absolute bottom-0 right-0 bg-[var(--bg)] text-[var(--primary)] rounded-full p-2 border border-[var(--border)] shadow-lg animate-bounce" />
      </div>
      
      <h1 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter mb-6 bg-gradient-to-r from-foreground to-[var(--primary)] bg-clip-text text-transparent">
        {lang === 'tr' ? 'Yakalandın!' : 'Busted!'}
      </h1>
      
      <p className="text-lg sm:text-xl opacity-70 max-w-lg mb-10 leading-relaxed font-medium">
        {lang === 'tr' 
          ? 'Görünüşe göre kodları kurcalamaya çalışıyorsun. Madem bu kadar merak ettin, işte sana bazı istatistikler...' 
          : 'Looks like you are trying to peek at the code. Since you are so curious, here are some stats...'}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 max-w-4xl w-full text-left">
        <div className="bg-[var(--border)]/30 p-4 rounded-xl border border-[var(--border)] flex flex-col gap-2">
           <div className="flex items-center gap-2 opacity-50 text-xs sm:text-sm"><FileCode2 className="w-4 h-4"/> {lang === 'tr' ? 'Toplam Dosya' : 'Total Files'}</div>
           <div className="text-2xl font-bold">{stats.files}</div>
        </div>
        <div className="bg-[var(--border)]/30 p-4 rounded-xl border border-[var(--border)] flex flex-col gap-2">
           <div className="flex items-center gap-2 opacity-50 text-xs sm:text-sm"><Layers className="w-4 h-4"/> {lang === 'tr' ? 'Bileşen Sayısı' : 'Components'}</div>
           <div className="text-2xl font-bold">{stats.components}</div>
        </div>
        <div className="bg-[var(--border)]/30 p-4 rounded-xl border border-[var(--border)] flex flex-col gap-2">
           <div className="flex items-center gap-2 opacity-50 text-xs sm:text-sm"><Database className="w-4 h-4"/> {lang === 'tr' ? 'Site Boyutu' : 'Site Size'}</div>
           <div className="text-2xl font-bold">{stats.size} <span className="text-sm font-normal opacity-50">KB</span></div>
        </div>
        
        <div className="bg-[var(--border)]/30 p-4 rounded-xl border border-[var(--border)] flex flex-col gap-2">
           <div className="flex items-center gap-2 opacity-50 text-xs sm:text-sm"><FileText className="w-4 h-4"/> {lang === 'tr' ? 'Kelime' : 'Words'}</div>
           <div className="text-2xl font-bold">{stats.words.toLocaleString()}</div>
        </div>
        <div className="bg-[var(--border)]/30 p-4 rounded-xl border border-[var(--border)] flex flex-col gap-2">
           <div className="flex items-center gap-2 opacity-50 text-xs sm:text-sm"><Hash className="w-4 h-4"/> {lang === 'tr' ? 'Karakter' : 'Characters'}</div>
           <div className="text-2xl font-bold">{stats.letters.toLocaleString()}</div>
        </div>
        <div className="bg-[var(--border)]/30 p-4 rounded-xl border border-[var(--border)] flex flex-col gap-2">
           <div className="flex items-center gap-2 opacity-50 text-xs sm:text-sm"><Activity className="w-4 h-4"/> {lang === 'tr' ? 'Kod Satırı' : 'Lines of Code'}</div>
           <div className="text-2xl font-bold">~{stats.lines.toLocaleString()}</div>
        </div>

        {/* Yeni İstatistikler */}
        <div className="bg-[var(--border)]/30 p-4 rounded-xl border border-[var(--border)] flex flex-col gap-2">
           <div className="flex items-center gap-2 opacity-50 text-xs sm:text-sm"><Timer className="w-4 h-4"/> {lang === 'tr' ? 'Sayfa Yüklenme Hızı' : 'Page Load Speed'}</div>
           <div className="text-2xl font-bold">{stats.loadSpeed.toFixed(2)}<span className="text-sm font-normal opacity-50">sn</span></div>
        </div>
        <div className="bg-[var(--border)]/30 p-4 rounded-xl border border-[var(--border)] flex flex-col gap-2">
           <div className="flex items-center gap-2 opacity-50 text-xs sm:text-sm"><CheckCircle className="w-4 h-4"/> {lang === 'tr' ? 'Erişilebilirlik' : 'Uptime'}</div>
           <div className="text-2xl font-bold">%{stats.uptime.toFixed(2)}</div>
        </div>
        <div className="bg-[var(--border)]/30 p-4 rounded-xl border border-[var(--border)] flex flex-col gap-2">
           <div className="flex items-center gap-2 opacity-50 text-xs sm:text-sm"><Zap className="w-4 h-4"/> {lang === 'tr' ? 'Performans Skoru' : 'Performance Score'}</div>
           <div className="text-2xl font-bold text-green-500">{stats.perfScore}/100</div>
        </div>
        
        <div className="bg-[var(--border)]/30 p-4 rounded-xl border border-[var(--border)] flex flex-col gap-2 sm:col-span-2">
           <div className="flex items-center gap-2 opacity-50 text-xs sm:text-sm"><Server className="w-4 h-4"/> {lang === 'tr' ? 'Küresel Sunucu Ağı' : 'Global Server Network'}</div>
           <div className="text-lg font-bold">Cloudflare Global Edge</div>
        </div>
        <div className="bg-[var(--border)]/30 p-4 rounded-xl border border-[var(--border)] flex flex-col gap-2">
           <div className="flex items-center gap-2 opacity-50 text-xs sm:text-sm"><Lock className="w-4 h-4"/> {lang === 'tr' ? 'Güvenlik & SSL' : 'Security & SSL'}</div>
           <div className="text-lg font-bold text-green-500 flex items-center gap-2">
             <Lock className="w-4 h-4" /> {lang === 'tr' ? 'Aktif' : 'Active'}
           </div>
        </div>

        <div className="bg-[var(--border)]/30 p-4 rounded-xl border border-[var(--border)] flex flex-col gap-2 col-span-2 sm:col-span-3">
           <div className="flex items-center gap-2 opacity-50 text-xs sm:text-sm"><Compass className="w-4 h-4"/> {lang === 'tr' ? 'Erişilebilir Sayfalar' : 'Accessible Routes'}</div>
           <div className="flex flex-wrap gap-2 mt-1">
             <span className="px-2 py-1 bg-[var(--bg)] rounded text-xs border border-[var(--border)]">/ (Ana Sayfa)</span>
             <span className="px-2 py-1 bg-[var(--bg)] rounded text-xs border border-[var(--border)]">/cv</span>
             <span className="px-2 py-1 bg-[var(--bg)] rounded text-xs border border-[var(--border)]">/blog</span>
             <span className="px-2 py-1 bg-[var(--bg)] rounded text-xs border border-[var(--border)]">/404</span>
             <span className="px-2 py-1 bg-[var(--bg)] rounded text-xs border border-[var(--border)] border-red-500/30 text-red-500">/caught (Buradasın)</span>
           </div>
        </div>
      </div>
      
      <Link 
        to="/" 
        className="px-8 py-4 bg-foreground text-background font-bold text-sm uppercase tracking-widest rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
      >
        {lang === 'tr' ? 'Ana Sayfaya Dön' : 'Return Home'}
      </Link>
      
      <p className="mt-12 text-lg sm:text-xl font-bold text-foreground">
        {lang === 'tr' ? 'Benim hakkımda daha bilmediğin çok şey var...' : 'There is so much more you don\'t know about me...'}
      </p>

      <p className="mt-4 text-sm opacity-60 font-medium max-w-lg italic">
        {lang === 'tr' 
          ? 'Şu an bu siteyi inceliyorsun, ama aynı zamanda site de seni inceliyor... Schrödinger\'in kedisi gibi, koda bakana kadar kod hem çalışıyor hem de çalışmıyor olabilir mi? 🐈‍⬛' 
          : 'You are inspecting this site right now, but the site is also inspecting you... Like Schrödinger\'s cat, could the code be both working and not working until you look at it? 🐈‍⬛'}
      </p>
    </div>
  );
}
