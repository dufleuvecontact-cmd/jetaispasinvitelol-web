import React from 'react';
import { useLanguage } from './LanguageContext';

export default function InfoPost() {
  const { lang } = useLanguage();

  if (lang === 'fr') {
    return (
      <div className="post-row" style={{ marginTop: '30px' }}>
        <div className="post-card" style={{ backgroundColor: '#1a1e24', border: '1px solid #3f4757', padding: '30px', color: '#a8b6c5', fontFamily: "'DM Sans', sans-serif" }}>
          
          {/* Header section */}
          <div style={{ marginBottom: '30px', borderBottom: '1px solid #3f4757', paddingBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ color: '#ff6b9d', fontSize: '24px', fontWeight: 'bold', margin: '0' }}>INFO</h2>
            <div style={{ display: "flex", gap: "8px", fontSize: "14px", fontFamily: "monospace", fontWeight: "bold" }}>
              <span onClick={() => setLang("fr")} style={{ cursor: "pointer", color: lang === "fr" ? "#ff6b9d" : "#a8b6c5", textDecoration: lang === "fr" ? "underline" : "none" }}>FR</span>
              <span style={{ color: "#3f4757" }}>|</span>
              <span onClick={() => setLang("en")} style={{ cursor: "pointer", color: lang === "en" ? "#ff6b9d" : "#a8b6c5", textDecoration: lang === "en" ? "underline" : "none" }}>EN</span>
            </div>
          </div>

          {/* How it works */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>comment ça marche</h3>
            <p style={{ lineHeight: '1.6' }}>nous organisons des soirées à travers la ville de québec. parfois c'est une maison. parfois c'est une salle. à chaque fois c'est un bon moment.</p>
          </div>

          {/* What to expect */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>à quoi s'attendre</h3>
            <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>chaque soirée est différente. la musique change. l'ambiance change. l'emplacement change. ce qui reste pareil : des bonnes personnes, de la bonne énergie, et pas de conneries.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p style={{ margin: 0, lineHeight: '1.6' }}><strong style={{ color: '#fff' }}>musique</strong> — dépend de la soirée. ça peut être de la house, du rap 2016, du r&b, n'importe quoi. on a toujours un DJ. le thème est annoncé avant chaque événement.</p>
              <p style={{ margin: 0, lineHeight: '1.6' }}><strong style={{ color: '#fff' }}>lieux</strong> — maisons, lofts, salles louées, peu importe ce qui correspond à l'ambiance. la capacité varie de 100 à 300 personnes selon l'endroit.</p>
              <p style={{ margin: 0, lineHeight: '1.6' }}><strong style={{ color: '#fff' }}>sécurité</strong> — chaque événement a des agents de sécurité accrédités à l'entrée. fouille des sacs. zéro alcool sur place. aucune exception.</p>
            </div>
          </div>

          {/* Tickets */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>billets</h3>
            <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>les prix dépendent de la taille et de l'emplacement.</p>
            
            {/* Mobile-friendly pricing cards instead of a table */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '20px' }}>
              <div style={{ flex: '1 1 200px', backgroundColor: '#0f1115', padding: '15px', borderRadius: '8px', border: '1px solid #3f4757' }}>
                <div style={{ color: '#ff6b9d', fontWeight: 'bold', marginBottom: '5px' }}>petit (100)</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}><span>général</span><strong style={{ color: '#fff' }}>10$</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>vip</span><strong style={{ color: '#fff' }}>20$</strong></div>
              </div>
              <div style={{ flex: '1 1 200px', backgroundColor: '#0f1115', padding: '15px', borderRadius: '8px', border: '1px solid #3f4757' }}>
                <div style={{ color: '#ff6b9d', fontWeight: 'bold', marginBottom: '5px' }}>moyen (200)</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}><span>général</span><strong style={{ color: '#fff' }}>15-20$</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>vip</span><strong style={{ color: '#fff' }}>30$</strong></div>
              </div>
              <div style={{ flex: '1 1 200px', backgroundColor: '#0f1115', padding: '15px', borderRadius: '8px', border: '1px solid #3f4757' }}>
                <div style={{ color: '#ff6b9d', fontWeight: 'bold', marginBottom: '5px' }}>grand (300)</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}><span>général</span><strong style={{ color: '#fff' }}>20-25$</strong></div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>vip</span><strong style={{ color: '#fff' }}>30$</strong></div>
              </div>
            </div>
            
            <p style={{ lineHeight: '1.6', marginBottom: '15px' }}><strong style={{ color: '#fff' }}>vip</strong> vous donne une entrée hâtive, un coupe-file, et l'accès à la section vip quand elle est disponible.</p>
            <p style={{ lineHeight: '1.6', fontSize: '13px', fontStyle: 'italic' }}>toutes les ventes sont finales. aucun remboursement. vous acceptez nos <a href="/terms" target="_blank" style={{ color: '#ff6b9d', textDecoration: 'underline' }}>conditions</a> et notre <a href="/privacy" target="_blank" style={{ color: '#ff6b9d', textDecoration: 'underline' }}>politique de confidentialité</a> à l'achat.</p>
          </div>

          {/* Where we're at */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>où nous en sommes</h3>
            <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>nous sommes encore en train de construire tout ça. les premiers partys sont prévus pour <strong style={{ color: '#fff' }}>début juillet 2026</strong>.</p>
            <p style={{ lineHeight: '1.6' }}>suivez <a href="https://instagram.com/jetaispasinvite" target="_blank" rel="noreferrer" style={{ color: '#ff6b9d', textDecoration: 'underline' }}>@jetaispasinvite</a> pour les annonces.</p>
          </div>

          {/* Want to help? */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>envie d'aider ?</h3>
            <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>nous cherchons des personnes qui veulent faire partie de ça. des djs, des photographes, des vidéastes, des contacts en sécurité, ou juste des personnes partantes pour aider à réaliser ces soirées.</p>
            <p style={{ lineHeight: '1.6' }}>dm nous sur <a href="https://instagram.com/jetaispasinvite" target="_blank" rel="noreferrer" style={{ color: '#ff6b9d', textDecoration: 'underline' }}>instagram</a> ou envoie-nous un courriel à <a href="mailto:dufleuvecontact@gmail.com" style={{ color: '#ff6b9d', textDecoration: 'underline' }}>dufleuvecontact@gmail.com</a>.</p>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="post-row" style={{ marginTop: '30px' }}>
      <div className="post-card" style={{ backgroundColor: '#1a1e24', border: '1px solid #3f4757', padding: '30px', color: '#a8b6c5', fontFamily: "'DM Sans', sans-serif" }}>
        
        {/* Header section */}
        <div style={{ marginBottom: '30px', borderBottom: '1px solid #3f4757', paddingBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ color: '#ff6b9d', fontSize: '24px', fontWeight: 'bold', margin: '0' }}>INFO</h2>
          <div style={{ display: "flex", gap: "8px", fontSize: "14px", fontFamily: "monospace", fontWeight: "bold" }}>
            <span onClick={() => setLang("fr")} style={{ cursor: "pointer", color: lang === "fr" ? "#ff6b9d" : "#a8b6c5", textDecoration: lang === "fr" ? "underline" : "none" }}>FR</span>
            <span style={{ color: "#3f4757" }}>|</span>
            <span onClick={() => setLang("en")} style={{ cursor: "pointer", color: lang === "en" ? "#ff6b9d" : "#a8b6c5", textDecoration: lang === "en" ? "underline" : "none" }}>EN</span>
          </div>
        </div>

        {/* How it works */}
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>how it works</h3>
          <p style={{ lineHeight: '1.6' }}>we host parties across quebec city. sometimes it's a house. sometimes it's a venue. every time it's a good time.</p>
        </div>

        {/* What to expect */}
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>what to expect</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>every party is different. the music changes. the vibe changes. the location changes. what stays the same: good people, good energy, and no bullshit.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <p style={{ margin: 0, lineHeight: '1.6' }}><strong style={{ color: '#fff' }}>music</strong> — depends on the night. could be house, 2016 rap, r&b, you name it. we always have a DJ. the theme gets announced before each event.</p>
            <p style={{ margin: 0, lineHeight: '1.6' }}><strong style={{ color: '#fff' }}>venues</strong> — houses, lofts, rented rooms, whatever fits the vibe. capacity ranges from 100 to 300 depending on the spot.</p>
            <p style={{ margin: 0, lineHeight: '1.6' }}><strong style={{ color: '#fff' }}>security</strong> — every event has licensed security at the door. bag checks on entry. zero alcohol on premises. no exceptions.</p>
          </div>
        </div>

        {/* Tickets */}
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>tickets</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>prices depend on the size and location.</p>
          
          {/* Mobile-friendly pricing cards instead of a table */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '20px' }}>
            <div style={{ flex: '1 1 200px', backgroundColor: '#0f1115', padding: '15px', borderRadius: '8px', border: '1px solid #3f4757' }}>
              <div style={{ color: '#ff6b9d', fontWeight: 'bold', marginBottom: '5px' }}>small (100)</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}><span>general</span><strong style={{ color: '#fff' }}>$10</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>vip</span><strong style={{ color: '#fff' }}>$20</strong></div>
            </div>
            <div style={{ flex: '1 1 200px', backgroundColor: '#0f1115', padding: '15px', borderRadius: '8px', border: '1px solid #3f4757' }}>
              <div style={{ color: '#ff6b9d', fontWeight: 'bold', marginBottom: '5px' }}>medium (200)</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}><span>general</span><strong style={{ color: '#fff' }}>$15-20</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>vip</span><strong style={{ color: '#fff' }}>$30</strong></div>
            </div>
            <div style={{ flex: '1 1 200px', backgroundColor: '#0f1115', padding: '15px', borderRadius: '8px', border: '1px solid #3f4757' }}>
              <div style={{ color: '#ff6b9d', fontWeight: 'bold', marginBottom: '5px' }}>large (300)</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}><span>general</span><strong style={{ color: '#fff' }}>$20-25</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>vip</span><strong style={{ color: '#fff' }}>$30</strong></div>
            </div>
          </div>
          
          <p style={{ lineHeight: '1.6', marginBottom: '15px' }}><strong style={{ color: '#fff' }}>vip</strong> gets you early entry, skip the line, and access to the vip section when available.</p>
          <p style={{ lineHeight: '1.6', fontSize: '13px', fontStyle: 'italic' }}>all sales are final. no refunds. you agree to our <a href="/terms" target="_blank" style={{ color: '#ff6b9d', textDecoration: 'underline' }}>terms</a> and <a href="/privacy" target="_blank" style={{ color: '#ff6b9d', textDecoration: 'underline' }}>privacy policy</a> at checkout.</p>
        </div>

        {/* Where we're at */}
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>where we're at</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>we're still building this thing. first parties are projected for <strong style={{ color: '#fff' }}>early july 2026</strong>.</p>
          <p style={{ lineHeight: '1.6' }}>follow <a href="https://instagram.com/jetaispasinvite" target="_blank" rel="noreferrer" style={{ color: '#ff6b9d', textDecoration: 'underline' }}>@jetaispasinvite</a> for announcements.</p>
        </div>

        {/* Want to help? */}
        <div>
          <h3 style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>want to help?</h3>
          <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>we're looking for people who want to be part of this. djs, photographers, videographers, security contacts, or just people who are down to help make these nights happen.</p>
          <p style={{ lineHeight: '1.6' }}>dm us on <a href="https://instagram.com/jetaispasinvite" target="_blank" rel="noreferrer" style={{ color: '#ff6b9d', textDecoration: 'underline' }}>instagram</a> or email us at <a href="mailto:dufleuvecontact@gmail.com" style={{ color: '#ff6b9d', textDecoration: 'underline' }}>dufleuvecontact@gmail.com</a>.</p>
        </div>

      </div>
    </div>
  );
}
