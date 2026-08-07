import { Link } from 'react-router-dom';
import { Language } from '../data';

interface NotFoundProps {
  lang: Language;
}

export function NotFound({ lang }: NotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] animate-in fade-in zoom-in-95 duration-500 w-full">
      <div className="w-full max-w-3xl bg-[#0c0c0c] border border-zinc-800 rounded-lg overflow-hidden shadow-2xl font-mono text-left">
        {/* Terminal Header */}
        <div className="flex items-center px-4 py-3 bg-[#161616] border-b border-zinc-800 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div></div>
          <div className="w-3 h-3 rounded-full bg-green-500/20 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div></div>
          <div className="ml-2 text-xs text-zinc-500 flex-1 text-center font-sans tracking-widest uppercase opacity-70">bash - root@eminbaycan:~</div>
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 sm:p-8 space-y-4 text-sm sm:text-base text-zinc-300">
          <p className="flex gap-3">
            <span className="text-zinc-500 select-none">$</span> 
            <span className="text-zinc-100">curl -I https://eminbaycan.com{window.location.pathname}</span>
          </p>
          
          <div className="space-y-1 opacity-80 pt-2 pb-4">
            <p>HTTP/2 <span className="text-red-400 font-bold">404</span> Not Found</p>
            <p>server: nginx</p>
            <p>content-type: text/html; charset=utf-8</p>
            <p>x-powered-by: coffee</p>
          </div>

          <p className="text-amber-400">
            {lang === 'tr' 
              ? 'Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir.'
              : 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'}
          </p>
          
          <div className="py-4 border-l-2 border-red-500/50 pl-4 my-6 bg-red-500/5">
            <p className="text-red-400 font-bold mb-1 tracking-wider uppercase text-xs">
              {lang === 'tr' ? '[ SİSTEM ANALİZİ ]' : '[ SYSTEM ANALYSIS ]'}
            </p>
            <p className="text-zinc-300">
              {lang === 'tr' 
                ? '> Kritik Uyarı: OSI 8. katmanda hata algılandı (Kullanıcı Hatası).'
                : '> Critical Warning: Error detected at OSI Layer 8 (User Error).'}
            </p>
            <p className="text-zinc-400 mt-2">
              {lang === 'tr'
                ? "> Lütfen Emin Baycan'dan destek isteyiniz :)"
                : "> Please ask Emin Baycan for support :)"}
            </p>
          </div>

          <div className="flex items-center gap-2 pt-6">
            <span className="text-green-400 select-none">guest@eminbaycan:~$</span>
            <Link
              to="/"
              className="text-white hover:text-green-400 hover:underline underline-offset-4 decoration-zinc-700 hover:decoration-green-400 transition-colors"
            >
              cd /home
            </Link>
            <span className="w-2.5 h-5 bg-zinc-400 animate-pulse inline-block align-middle ml-1"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
