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
    const originalTitle = 'Emin Baycan | IT Professional | ';
    let currentTitle = originalTitle;
    let intervalId: ReturnType<typeof setInterval>;

    const scrollTitle = () => {
      currentTitle = currentTitle.substring(1) + currentTitle.substring(0, 1);
      document.title = currentTitle;
    };

    intervalId = setInterval(scrollTitle, 300);

    return () => clearInterval(intervalId);
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
