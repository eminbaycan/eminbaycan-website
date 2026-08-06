import { cvData, Language } from '../data';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Phone } from 'lucide-react';

interface HomeProps {
  lang: Language;
}

export function Home({ lang }: HomeProps) {
  const data = cvData[lang];

  return (
    <div className="flex flex-col md:flex-row gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section className="flex-1 space-y-6 md:border-r border-[var(--border)] md:pr-12 flex flex-col justify-between min-h-[50vh]">
        <div>
          <h1 className="text-5xl sm:text-7xl font-light leading-none tracking-tight mb-8 font-serif">
            {data.name}
          </h1>
          <h2 className="text-[10px] uppercase tracking-widest opacity-40 mb-2">
            {data.experience[0].title}
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-[var(--secondary)]">
            {data.overview}
          </p>
        </div>

        <div className="flex flex-col gap-6 pt-12">
          <div className="flex gap-4">
            <Link
              to="/cv"
              className="text-[11px] underline underline-offset-4 opacity-70 hover:opacity-100 transition-opacity uppercase tracking-wider"
            >
              {lang === 'tr' ? 'CV\'yi Görüntüle' : 'View Resume'}
            </Link>
            <a
              href="mailto:cv@eminbaycan.com"
              className="text-[11px] underline underline-offset-4 opacity-70 hover:opacity-100 transition-opacity uppercase tracking-wider"
            >
              {lang === 'tr' ? 'İletişime Geç' : 'Contact Me'}
            </a>
          </div>
        </div>
      </section>

      <section className="flex-1 space-y-12">
        <div className="space-y-6">
          <h3 className="text-[10px] uppercase tracking-widest mb-4 opacity-40">Contact Info</h3>
          <div className="space-y-4 text-sm text-[var(--secondary)]">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 opacity-50" />
              <span className="text-xs">{data.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 opacity-50" />
              <span className="text-xs">{data.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 opacity-50" />
              <a href={`mailto:${data.email}`} className="text-xs hover:text-[var(--primary)] transition-colors">
                {data.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="w-4 h-4 opacity-50" />
              <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-xs hover:text-[var(--primary)] transition-colors">
                {data.linkedin}
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
