import React, { useState, useEffect } from 'react';
import TermsText from './TermsText';
import { useLanguage } from './LanguageContext';

export default function WaiverPopup() {
  const [show, setShow] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const { lang, setLang } = useLanguage();

  const t = {
    en: {
      title: "Important: Read Before Entering",
      agreeLabel: "I have read and agree to the Event Terms and Conditions",
      enterBtn: "Enter Website",
    },
    fr: {
      title: "Important : À lire avant d'entrer",
      agreeLabel: "J'ai lu et j'accepte les conditions de l'événement",
      enterBtn: "Entrer sur le site",
    }
  }[lang];

  useEffect(() => {
    const hasAgreed = localStorage.getItem('jetaispasinvitelol_waiver_agreed');
    if (!hasAgreed) {
      setShow(true);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('jetaispasinvitelol_waiver_agreed', new Date().toISOString());
    setShow(false);
    document.body.style.overflow = 'unset';
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
      backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
      backdropFilter: 'blur(5px)'
    }}>
      <div style={{
        backgroundColor: '#0f1115', borderRadius: '12px', width: '100%', maxWidth: '800px',
        maxHeight: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid #3f4757'
      }}>
        {/* Header */}
        <div style={{ padding: '20px', backgroundColor: '#1a1e24', borderBottom: '1px solid #3f4757', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ margin: 0, color: '#ff6b9d', fontSize: '20px', fontWeight: 'bold', fontFamily: "'DM Sans', sans-serif" }}>{t.title}</h2>
          <div style={{ display: "flex", gap: "8px", fontSize: "14px", fontFamily: "monospace", fontWeight: "bold" }}>
            <span onClick={() => setLang("fr")} style={{ cursor: "pointer", color: lang === "fr" ? "#ff6b9d" : "#a8b6c5", textDecoration: lang === "fr" ? "underline" : "none" }}>FR</span>
            <span style={{ color: "#3f4757" }}>|</span>
            <span onClick={() => setLang("en")} style={{ cursor: "pointer", color: lang === "en" ? "#ff6b9d" : "#a8b6c5", textDecoration: lang === "en" ? "underline" : "none" }}>EN</span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '30px', backgroundColor: '#0f1115' }}>
          <TermsText darkMode={true} />
        </div>

        {/* Footer */}
        <div style={{ padding: '20px', backgroundColor: '#1a1e24', borderTop: '1px solid #3f4757', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', color: '#a8b6c5', fontSize: '14px', fontWeight: 'bold', fontFamily: "'DM Sans', sans-serif", textAlign: 'center' }}>
            <input 
              type="checkbox" 
              checked={agreed} 
              onChange={(e) => setAgreed(e.target.checked)} 
              style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: '#ff6b9d' }}
            />
            {t.agreeLabel}
          </label>
          
          <button 
            onClick={handleAgree}
            disabled={!agreed}
            style={{
              padding: '14px 40px',
              backgroundColor: agreed ? '#00ff9d' : '#3f4757',
              color: agreed ? '#0f1115' : '#a8b6c5',
              border: 'none',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: agreed ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: agreed ? '0 0 15px rgba(0, 255, 157, 0.4)' : 'none'
            }}
          >
            Enter Website
          </button>
        </div>
      </div>
    </div>
  );
}
