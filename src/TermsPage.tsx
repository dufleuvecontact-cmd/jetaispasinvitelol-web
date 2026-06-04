import React from 'react';
import TermsText from './TermsText';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

export default function TermsPage() {
  const { lang, setLang } = useLanguage();
  const t = {
    en: { back: "Back to Tickets" },
    fr: { back: "Retour aux Billets" }
  }[lang];

  return (
    <div style={{ backgroundColor: '#0f1115', minHeight: '100vh', padding: '40px 20px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', justifyContent: 'flex-end', paddingBottom: '20px' }}>
        <div style={{ display: "flex", gap: "8px", fontSize: "14px", fontFamily: "monospace", fontWeight: "bold" }}>
          <span onClick={() => setLang("fr")} style={{ cursor: "pointer", color: lang === "fr" ? "#ff6b9d" : "#a8b6c5", textDecoration: lang === "fr" ? "underline" : "none" }}>FR</span>
          <span style={{ color: "#3f4757" }}>|</span>
          <span onClick={() => setLang("en")} style={{ cursor: "pointer", color: lang === "en" ? "#ff6b9d" : "#a8b6c5", textDecoration: lang === "en" ? "underline" : "none" }}>EN</span>
        </div>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#1a1e24', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)', border: '1px solid #3f4757' }}>
        <TermsText darkMode={true} />
      </div>
      
      {/* Sticky Back Button */}
      <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', padding: '20px', backgroundColor: 'rgba(15, 17, 21, 0.9)', backdropFilter: 'blur(10px)', borderTop: '1px solid #3f4757', display: 'flex', justifyContent: 'center' }}>
        <Link to="/" style={{ padding: '12px 32px', backgroundColor: '#ff6b9d', color: '#0f1115', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold', fontSize: '16px', display: 'inline-block', boxShadow: '0 0 10px rgba(255, 107, 157, 0.3)' }}>
          {t.back}
        </Link>
      </div>
    </div>
  );
}
