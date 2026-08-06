import { Language } from '../data';

interface BlogProps {
  lang: Language;
}

export function Blog({ lang }: BlogProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
      <h1 className="text-4xl sm:text-5xl font-light tracking-tight font-serif">
        {lang === 'tr' ? 'Hazırlanıyor...' : 'Coming Soon...'}
      </h1>
      <p className="text-[var(--secondary)] max-w-sm mx-auto text-sm leading-relaxed">
        {lang === 'tr'
          ? 'Blog sayfamız şu an yapım aşamasında. Çok yakında yeni içeriklerle burada olacağız.'
          : 'Our blog page is currently under construction. We will be here with new content very soon.'}
      </p>
    </div>
  );
}
