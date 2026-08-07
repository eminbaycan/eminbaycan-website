import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CV } from './pages/CV';
import { Blog } from './pages/Blog';
import { NotFound } from './pages/NotFound';
import { Caught } from './pages/Caught';
import { Language } from './data';

export default function App() {
  const [lang, setLang] = useState<Language>('tr');

  useEffect(() => {
    // Akıcı yazı için başlık ve boşluklar
    const originalTitle = 'Emin Baycan • IT Professional •           ';
    let currentTitle = originalTitle;
    
    // Favicon animasyonu için emojiler (gif gibi)
    const emojis = ['👨‍💻', '🚀', '⚡', '💡', '🛡️', '⚙️'];
    let faviconIndex = 0;
    
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    const scrollInterval = setInterval(() => {
      // Yazı kaydırma - daha hızlı (150ms)
      currentTitle = currentTitle.substring(1) + currentTitle.substring(0, 1);
      document.title = currentTitle;
    }, 150); 

    const faviconInterval = setInterval(() => {
      // Favicon değiştirme
      faviconIndex = (faviconIndex + 1) % emojis.length;
      link.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${emojis[faviconIndex]}</text></svg>`;
    }, 800); 

    return () => {
      clearInterval(scrollInterval);
      clearInterval(faviconInterval);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout lang={lang} onLangChange={setLang} />}>
          <Route index element={<Home lang={lang} />} />
          <Route path="cv" element={<CV lang={lang} />} />
          <Route path="blog" element={<Blog lang={lang} />} />
          <Route path="caught" element={<Caught lang={lang} />} />
          <Route path="*" element={<NotFound lang={lang} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
