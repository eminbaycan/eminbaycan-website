import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CV } from './pages/CV';
import { Blog } from './pages/Blog';
import { NotFound } from './pages/NotFound';
import { Language } from './data';

export default function App() {
  const [lang, setLang] = useState<Language>('tr');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout lang={lang} onLangChange={setLang} />}>
          <Route index element={<Home lang={lang} />} />
          <Route path="cv" element={<CV lang={lang} />} />
          <Route path="blog" element={<Blog lang={lang} />} />
          <Route path="*" element={<NotFound lang={lang} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
