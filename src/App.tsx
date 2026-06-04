import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import { db } from "./firebaseClient";
import { collection, addDoc, serverTimestamp, onSnapshot, doc, updateDoc, increment } from "firebase/firestore";
import foreverYoung from "../forever_young.jpg";
import pastParty1 from "../past_party_1_1780361077564.png";
import pastParty2 from "../past_party_2_1780361120358.png";
import WaiverPopup from "./WaiverPopup";
import InfoPost from "./InfoPost";

// ── SVG Icons (Material Style for 2010 feel) ──
const LikeIcon = ({ active }: { active: boolean }) => (
  <svg viewBox="0 0 24 24" style={{ fill: active ? "#ff6b9d" : "currentColor" }}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const ReblogIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M19 8l-4 4h3v4H7v-3H5v5c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-6h3l-4-4zM5 16l4-4H6V8h11v3h2V7c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v6H1l4 4z"/>
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
);

const GearIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z"/></svg>
);

const QuestionIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>
);

const PowerIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"/></svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
);

const CompassIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-13l-8 3 3 8 8-3-3-8zm-1 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
);

const AddUserIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" style={{ fill: "currentColor" }}><path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
);

function GlitchText({ length }: { length: number }) {
  const [text, setText] = useState("");

  useEffect(() => {
    const chars = "????????????????????????????????????????????????????????????0123456789!?X";
    const interval = setInterval(() => {
      let result = "";
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setText(result);
    }, 70);
    return () => clearInterval(interval);
  }, [length]);

  return <span className="glitch-text">{text}</span>;
}

interface PartyPost {
  id: string;
  title: string;
  date: string;
  location: string;
  tickets: string;
  image: string;
  likes: number;
  reposts: number;
  liked: boolean;
  tags: string[];
  username: string;
}

const translations = {
  fr: {
    dashboard: "Tableau de bord",
    inbox: "Boîte de réception",
    help: "Aide",
    settings: "Paramètres",
    logout: "Déconnexion",
    dateLabel: "Date :",
    lieuLabel: "Lieu :",
    ticketLabel: "Ticket :",
    eventDate: "le ...",
    eventLocation: "le ...",
    eventTickets: "15$ (au lieu de 23$)",
    preorderBtnText: "PRÉCOMMANDER MON BILLET (15$ AU LIEU DE 23$)",
    preorderConfirmed: "Précommande confirmée !",
    preorderSubtext: "Ta place a été réservée. Tu recevras ton lien de paiement par SMS sous peu.",
    reserveBtn: "Réserver un billet",
    smsBtn: "Recevoir par SMS",
    smsHeader: "INFOS / ACCÈS PAR SMS",
    smsSubscribe: "M'INSCRIRE",
    smsSuccess: "Inscription réussie !",
    exploreParties: "Explorer les Soirées",
    likedPosts: "Posts aimés",
    city: "Ville de Québec",
    notes: "notes",
    reblog: "Rebloguer",
    like: "J'aime",
    vipTracker: "Pass VIP vendus",
    noEvents: "Oups, aucun événement/party n'est encore publié",
    noPartyAlert: ":( aucun party publié",
    loading: "Chargement..."
  },
  en: {
    dashboard: "Dashboard",
    inbox: "Inbox",
    help: "Help",
    settings: "Settings",
    logout: "Logout",
    dateLabel: "Date:",
    lieuLabel: "Location:",
    ticketLabel: "Ticket:",
    eventDate: "the ...",
    eventLocation: "the ...",
    eventTickets: "$15 (instead of $23)",
    preorderBtnText: "PRE-ORDER TICKET ($15 INSTEAD OF $23)",
    preorderConfirmed: "Pre-order confirmed!",
    preorderSubtext: "We've saved your spot. You'll receive the payment link shortly.",
    reserveBtn: "Pre-order ticket",
    smsBtn: "Get SMS alerts",
    smsHeader: "INFO / ACCESS BY SMS",
    smsSubscribe: "SUBSCRIBE",
    smsSuccess: "Subscription successful!",
    exploreParties: "Explore Parties",
    likedPosts: "Liked Posts",
    city: "Quebec City",
    notes: "notes",
    reblog: "Reblog",
    like: "Like",
    vipTracker: "VIP Passes Sold",
    noEvents: "Oops, no events/parties posted up yet",
    noPartyAlert: ":( no party posted",
    loading: "Loading..."
  }
};

export default function App() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  const [showSmsForm, setShowSmsForm] = useState(false);
  const [sidebarPhone, setSidebarPhone] = useState("");
  const [sidebarSmsSubmitted, setSidebarSmsSubmitted] = useState(false);
  const [preordered, setPreordered] = useState(false);
  const [showNoPartyAlert, setShowNoPartyAlert] = useState(false);

  const focusPost = (id: string) => {
    const el = document.getElementById(`post-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      const btn = el.querySelector(".waitlist-submit-btn") as HTMLButtonElement | null;
      if (btn) {
        btn.focus();
      }
    }
  };
  
  const [posts, setPosts] = useState<PartyPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "events"), (snapshot) => {
      if (!snapshot.empty) {
        const fetched = snapshot.docs.map(docSnap => {
          const data = docSnap.data();
          return {
            id: docSnap.id,
            title: data.title || "",
            date: data.date || "",
            location: data.location || "",
            tickets: data.tickets_text || "",
            image: data.image_url || foreverYoung,
            likes: data.likes || 0,
            reposts: data.reposts || 0,
            tags: data.tags || [],
            username: data.username || "jetaispasinvitelol",
            liked: false
          } as PartyPost;
        });
        setPosts(fetched);
      } else {
        setPosts([]);
      }
      setLoading(false);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setPreordered(true);
      window.history.replaceState({}, document.title, "/");
    }
    if (query.get("canceled")) {
      alert("La commande a été annulée. / Order was canceled.");
      window.history.replaceState({}, document.title, "/");
    }
  }, []);

  const handleSmsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sidebarPhone.trim()) {
      try {
        // 1. Insert phone number into the 'subscribers' collection in Firestore as backup
        await addDoc(collection(db, "subscribers"), {
          phone_number: sidebarPhone,
          created_at: serverTimestamp()
        });

        // 2. Call our Vercel API to subscribe them to Klaviyo
        const res = await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone_number: sidebarPhone })
        });

        if (!res.ok) {
          console.error("Failed to subscribe to Klaviyo");
        }

        setSidebarSmsSubmitted(true);
        setTimeout(() => {
          setSidebarSmsSubmitted(false);
          setSidebarPhone("");
          setShowSmsForm(false);
        }, 4000);

      } catch (err) {
        console.error("Submission error:", err);
        alert("Erreur lors de l'inscription.");
      }
    }
  };

  const toggleLike = async (id: string, currentlyLiked: boolean) => {
    setPosts(prev => prev.map(post => {
      if (post.id === id) {
        return {
          ...post,
          liked: !currentlyLiked,
          likes: currentlyLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));

    if (id === "1") return; // Don't try to update fallback
    try {
      await updateDoc(doc(db, "events", id), {
        likes: increment(currentlyLiked ? -1 : 1)
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleRepost = async (id: string, title: string) => {
    setPosts(prev => prev.map(post => {
      if (post.id === id) {
        return {
          ...post,
          reposts: post.reposts + 1
        };
      }
      return post;
    }));

    if (id !== "1") {
      try {
        await updateDoc(doc(db, "events", id), {
          reposts: increment(1)
        });
      } catch (e) {
        console.error(e);
      }
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: "Check out this party!",
          url: window.location.href
        });
      } catch (err) {
        console.error("Share failed:", err);
      }
    } else {
      alert("To share to your Instagram Story, please open this page on a mobile device!");
    }
  };

  const handleCheckout = () => {
    window.location.href = "https://buy.stripe.com/eVq7sK72K8WA1BP3ALasg00";
  };

  return (
    <>
      <WaiverPopup />
      {/* ── Top Nav (Classic 2010 Tumblr Slate) ── */}
      <nav className="tumblr-nav">
        <div style={{ width: "100%", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span className="nav-logo" style={{ fontFamily: "Georgia, serif", fontStyle: "normal", fontWeight: "normal", fontSize: "18px", letterSpacing: "normal" }}>
              
            </span>
          </div>
          <div className="nav-spacer" style={{ flex: 1 }} />
          
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {/* Lang Switcher */}
            <div className="lang-switcher" style={{ display: "flex", gap: "8px", fontSize: "11px", fontFamily: "monospace", fontWeight: "bold" }}>
              <span 
                onClick={() => setLang("fr")} 
                style={{ cursor: "pointer", color: lang === "fr" ? "#ff6b9d" : "#94a3b8", textDecoration: lang === "fr" ? "underline" : "none" }}
              >
                FR
              </span>
              <span style={{ color: "#20242f" }}>|</span>
              <span 
                onClick={() => setLang("en")} 
                style={{ cursor: "pointer", color: lang === "en" ? "#ff6b9d" : "#94a3b8", textDecoration: lang === "en" ? "underline" : "none" }}
              >
                EN
              </span>
            </div>

            {/* Nav Icons */}
            <div className="nav-icons" style={{ display: "flex", gap: "14px" }}>
              <div className="nav-icon-link" title={t.dashboard} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><HomeIcon /></div>
              <a href="https://instagram.com/jetaispasinvite" target="_blank" rel="noreferrer" className="nav-icon-link" title="Instagram" style={{ color: "inherit" }}><MailIcon /></a>
              <Link to="/terms" className="nav-icon-link" title="Privacy & TOS" style={{ color: "inherit" }}><QuestionIcon /></Link>
              <div className="nav-icon-link" title={t.settings}><GearIcon /></div>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Content Layout ── */}
      <div className="tumblr-layout">
        
        {/* Left Feed Column */}
        <div className="feed-col">
          
          {/* Infinite Party Feed Card List */}
          <div className="flex flex-col">
            {posts.length === 0 && (
              <div style={{ padding: "60px", textAlign: "center", color: "#a8b6c5", border: "1px dashed #3f4757", borderRadius: "8px", margin: "20px 0" }}>
                <div style={{ fontSize: "64px", fontWeight: "bold", color: "#ff6b9d", marginBottom: "20px" }}>:(</div>
                <div style={{ fontSize: "24px", fontStyle: "italic", fontWeight: "bold" }}>{t.noEvents}</div>
              </div>
            )}
            
            {/* Pinned Info Post */}
            <InfoPost />

            {!loading && posts.map(post => (
              <div className="post-row" key={post.id} id={`post-${post.id}`}>
                
                {/* Left post avatar */}
                <div className="post-avatar">
                  <div className="w-full h-full bg-gradient-to-tr from-[#0f1115] to-[#2a2e37] flex items-center justify-center text-white font-extrabold text-xl select-none" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.5)" }}>
                    J
                  </div>
                </div>

                {/* Right white card */}
                <article className="post-card">
                  
                  {/* Card Header metadata */}
                  <div className="party-card-header flex items-center justify-between">
                    <div>
                      <a href="#feed" style={{ color: "#ff6b9d" }}>{post.username}</a>
                    </div>
                    <span style={{ fontSize: "11px", color: "#a8b6c5" }}>{post.title}</span>
                  </div>

                  {/* Details block */}
                  <div className="party-details">
                    <h2 className="party-title">{post.title}</h2>
                    
                    <div className="party-metadata">
                      <div className="meta-row">
                        <strong>{t.dateLabel}</strong> {t.eventDate}
                      </div>
                      <div className="meta-row">
                        <strong>{t.lieuLabel}</strong> {t.eventLocation}
                      </div>
                      <div className="meta-row">
                        <strong>{t.ticketLabel}</strong> {t.eventTickets}
                      </div>
                    </div>

                    {/* Pre-order Ticket Button */}
                    <div style={{ marginTop: "20px" }}>
                      {!preordered ? (
                        <button 
                          onClick={handleCheckout}
                          className="sidebar-btn btn-sidebar-green waitlist-submit-btn" 
                          style={{ width: "fit-content", padding: "10px 16px", fontSize: "12px", letterSpacing: "0.5px" }}
                        >
                          <AddUserIcon /> {t.preorderBtnText}
                        </button>
                      ) : (
                        <div className="post-waitlist-section" style={{ textAlign: "center", border: "1px solid #c77dff", boxShadow: "0 0 10px rgba(199, 125, 255, 0.2)" }}>
                          <div style={{ fontSize: "14px", fontWeight: "bold", color: "#c77dff", marginBottom: "4px" }}>
                            {t.preorderConfirmed}
                          </div>
                          <div style={{ fontSize: "12px", color: "#cbd5e1" }}>
                            {t.preorderSubtext}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="party-tags" style={{ marginTop: "15px" }}>
                      {post.tags.map((tag, idx) => (
                        <span key={idx} style={{ cursor: "pointer" }}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Footer reblog/like bar */}
                  <div className="party-card-footer" style={{ justifyContent: "flex-end" }}>
                    <div className="action-buttons">
                      <button 
                        className="action-btn"
                        onClick={() => handleRepost(post.id, post.title)}
                      >
                        <ReblogIcon /> <span style={{ marginLeft: "4px" }}>{post.reposts} {t.reblog}</span>
                      </button>
                      <button 
                        className={`action-btn ${post.liked ? "active" : ""}`}
                        onClick={() => toggleLike(post.id, post.liked)}
                      >
                        <LikeIcon active={post.liked} /> <span style={{ marginLeft: "4px" }}>{post.likes} {t.like}</span>
                      </button>
                    </div>
                  </div>

                </article>
              </div>
            ))}
          </div>

        </div>

        {/* Right Sidebar Column */}
        <div className="sidebar-col">
          
          {/* Green waitlist active widget */}
          <button className="sidebar-btn btn-sidebar-green" onClick={() => { 
            if (posts.length === 0) { 
              setShowNoPartyAlert(true); 
              setTimeout(() => setShowNoPartyAlert(false), 4000); 
            } else { 
              focusPost("1"); 
            } 
          }}>
            <AddUserIcon /> {t.reserveBtn}
          </button>

          {showNoPartyAlert && (
            <div className="sidebar-stats-box" style={{ border: "1px solid #ff6b9d", color: "#ff6b9d", textAlign: "center", fontWeight: "bold", marginTop: "-10px", marginBottom: "15px", animation: "pulse 2s infinite" }}>
              {t.noPartyAlert}
            </div>
          )}

          {/* SMS Updates Button/Widget */}
          {!showSmsForm ? (
            <button className="sidebar-link-btn" onClick={() => setShowSmsForm(true)}>
              <MailIcon /> {t.smsBtn}
            </button>
          ) : (
            <div className="sidebar-stats-box" style={{ border: "1px solid #ff6b9d" }}>
              <div style={{ color: "#ff6b9d", fontWeight: "bold", fontSize: "11px", marginBottom: "8px" }}>
                {t.smsHeader}
              </div>
              <form onSubmit={handleSmsSubmit}>
                <input 
                  type="tel" 
                  required 
                  placeholder="(418) 000-0000" 
                  value={sidebarPhone} 
                  onChange={e => setSidebarPhone(e.target.value)} 
                  className="form-input glowing-sms-input" 
                  style={{ fontSize: "12px", padding: "8px", marginBottom: "8px" }}
                />
                <button type="submit" className="form-submit-btn waitlist-submit-btn" style={{ padding: "6px" }}>
                  {t.smsSubscribe}
                </button>
              </form>
              {sidebarSmsSubmitted && (
                <div style={{ color: "#ff6b9d", fontSize: "11px", marginTop: "8px", textAlign: "center" }}>
                  {t.smsSuccess}
                </div>
              )}
            </div>
          )}

          {/* Stats list box */}
          <div className="sidebar-stats-box">
            <div style={{ display: 'flex', flexDirection: 'column', padding: '12px', background: 'rgba(255, 107, 157, 0.05)', border: '1px dashed #ff6b9d', borderRadius: '8px', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', color: '#ff6b9d', marginBottom: '8px', fontSize: '13px' }}>
                <CompassIcon /> Pré-acheter tous les billets
              </div>
              <div style={{ fontSize: '11px', color: '#a8b6c5', lineHeight: '1.4' }}>
                (3 événements garantis, 5 projetés)
                <br /><br />
                <span style={{ color: '#00ff9d', fontWeight: 'bold' }}>PASS VIP INCLUS - 80$</span>
                <br />
                • Snacks et breuvages presque illimités (gratuits)<br />
                • Entrée et sortie prioritaires<br />
                <span style={{ fontSize: '10px', color: '#94a3b8', fontStyle: 'italic', display: 'block', marginTop: '6px' }}>* Non-remboursable</span>
              </div>
              <button onClick={() => window.location.href = "https://buy.stripe.com/dRm14m1Iq6Os5S50ozasg01"} style={{ marginTop: '12px', width: '100%', padding: '8px', backgroundColor: '#ff6b9d', color: '#0f1115', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'inherit' }}>
                Acheter le Pass VIP
              </button>
            </div>
            <div className="stat-item" style={{ cursor: "default" }}>
              {t.vipTracker} : <strong style={{ color: "#00ff9d", marginLeft: "4px" }}>1 / 25</strong>
            </div>
          </div>

          {/* Retro footer */}
          <footer style={{ padding: "0 10px", fontSize: "11px", color: "rgba(255,255,255,0.3)", lineHeight: "1.5" }}>
            jetaispasinvitelol — 2026
            <br />
            {t.city}
            <br />
            <br />
            <Link to="/terms" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "underline" }}>Terms</Link> &bull; <Link to="/privacy" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "underline" }}>Privacy</Link>
          </footer>

        </div>

      </div>
    </>
  );
}
