import { useState, useEffect } from 'react';
import { cvData, Language } from '../data';
import { Mail, MapPin, Linkedin, Phone, ArrowUp, Printer } from 'lucide-react';

interface CVProps {
  lang: Language;
}

export function CV({ lang }: CVProps) {
  const data = cvData[lang];
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-16 print:space-y-6 print:pt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
      <button
        onClick={() => window.print()}
        className="absolute -top-4 right-0 p-2 rounded-full hover:bg-[var(--border)] transition-colors print:hidden"
        aria-label={lang === 'tr' ? 'CV\'yi Yazdır' : 'Print CV'}
        title={lang === 'tr' ? 'CV\'yi Yazdır' : 'Print CV'}
      >
        <Printer className="w-5 h-5 opacity-60 hover:opacity-100" />
      </button>

      <header className="text-center space-y-6 print:space-y-2 mt-4 sm:mt-0 print:mt-0">
        <h1 className="text-4xl font-black tracking-tight">{data.name}</h1>
        
        {/* Screen Version */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-widest text-[var(--secondary)] print:hidden">
          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {data.location}</span>
          <span className="flex items-center gap-1.5"><Mail className="w-4 h-4" /> {data.email}</span>
          <span className="flex items-center gap-1.5"><Linkedin className="w-4 h-4" /> {data.linkedin}</span>
        </div>

        {/* Print Version */}
        <div className="hidden print:block text-[12px] text-black">
          <div className="flex justify-center items-center gap-2">
            <span>{data.location}</span>
            <span className="font-bold opacity-60">|</span>
            <span>{data.phone}</span>
          </div>
          <div className="flex justify-center items-center gap-2 mt-1">
            <span>{data.email}</span>
            <span className="font-bold opacity-60">|</span>
            <span>{data.linkedin}</span>
          </div>
        </div>
      </header>

      <section>
        <h2 className="text-[10px] uppercase tracking-widest mb-4 opacity-40 border-b border-[var(--border)] pb-2">
          {lang === 'tr' ? 'Genel Bakış' : 'Overview'}
        </h2>
        <p className="text-sm leading-relaxed text-[var(--secondary)]">
          {data.overview}
        </p>
      </section>

      <section>
        <h2 className="text-[10px] uppercase tracking-widest mb-4 opacity-40 border-b border-[var(--border)] pb-2">
          {lang === 'tr' ? 'İş Deneyimi' : 'Work Experience'}
        </h2>
        <div className="space-y-10 print:space-y-6">
          {data.experience.map((job, idx) => (
            <div key={idx} className="space-y-2 print-avoid-break">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="font-medium">{job.company}</h3>
                <span className="text-[11px] opacity-40">{job.location}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 text-sm mb-2">
                <span className="italic text-[11px] text-[var(--secondary)]">{job.title}</span>
                <span className="text-[11px] opacity-40">{job.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[var(--secondary)] ml-1">
                {job.responsibilities.map((res, rIdx) => (
                  <li key={rIdx} className="pl-2 -indent-5 ml-5 text-xs leading-relaxed">{res}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-[10px] uppercase tracking-widest mb-4 opacity-40 border-b border-[var(--border)] pb-2">
          {lang === 'tr' ? 'Eğitim' : 'Education'}
        </h2>
        <div className="space-y-8 print:space-y-4">
          {data.education.map((edu, idx) => (
            <div key={idx} className="space-y-2 print-avoid-break">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="font-medium">{edu.institution}</h3>
                <span className="text-[11px] opacity-40">{edu.location}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 text-sm mb-2">
                <span className="italic text-[11px] text-[var(--secondary)]">{edu.degree}</span>
                <span className="text-[11px] opacity-40">{edu.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-[var(--secondary)] ml-1">
                {edu.details.map((det, dIdx) => (
                  <li key={dIdx} className="text-xs pl-2 -indent-5 ml-5">{det}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-[10px] uppercase tracking-widest mb-4 opacity-40 border-b border-[var(--border)] pb-2">
          {lang === 'tr' ? 'Kurs Sertifikaları' : 'Course Certificates'}
        </h2>
        <ul className="list-disc list-inside space-y-2 text-[var(--secondary)] ml-1">
          {data.certificates.map((cert, idx) => (
            <li key={idx} className="text-xs pl-2 -indent-5 ml-5">{cert}</li>
          ))}
        </ul>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-[var(--primary)] text-[var(--bg)] shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 print:hidden ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
}
