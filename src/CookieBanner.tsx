import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('jetaispasinvitelol_cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('jetaispasinvitelol_cookie_consent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('jetaispasinvitelol_cookie_consent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#1A1A1A',
      color: '#fff',
      padding: '16px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      zIndex: 9999,
      fontFamily: "'DM Sans', sans-serif",
      flexWrap: 'wrap',
      gap: '16px'
    }}>
      <div style={{ fontSize: '14px', flex: 1, minWidth: '280px' }}>
        We use cookies to improve your experience. 
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <button 
          onClick={handleDecline}
          style={{ padding: '8px 16px', backgroundColor: 'transparent', border: '1px solid #fff', color: '#fff', borderRadius: '4px', cursor: 'pointer', fontSize: '14px' }}
        >
          Decline
        </button>
        <button 
          onClick={handleAccept}
          style={{ padding: '8px 16px', backgroundColor: '#F5F0EB', border: '1px solid #F5F0EB', color: '#1A1A1A', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}
        >
          Accept
        </button>
      </div>
    </div>
  );
}
