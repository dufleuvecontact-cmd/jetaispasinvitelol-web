import React, { useState, useEffect } from 'react';
import TermsText from './TermsText';

export default function WaiverPopup() {
  const [show, setShow] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    const hasAgreed = localStorage.getItem('jetaispasinvitelol_waiver_agreed');
    if (!hasAgreed) {
      setShow(true);
      // Disable scrolling on the main page while the popup is active
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
        backgroundColor: '#F5F0EB', borderRadius: '12px', width: '100%', maxWidth: '800px',
        maxHeight: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
      }}>
        {/* Header */}
        <div style={{ padding: '20px', backgroundColor: '#fff', borderBottom: '1px solid #ddd', textAlign: 'center' }}>
          <h2 style={{ margin: 0, color: '#1A1A1A', fontSize: '20px', fontWeight: 'bold', fontFamily: "'DM Sans', sans-serif" }}>Important: Read Before Entering</h2>
        </div>

        {/* Scrollable Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '30px', backgroundColor: '#F5F0EB' }}>
          <TermsText />
        </div>

        {/* Footer */}
        <div style={{ padding: '20px', backgroundColor: '#fff', borderTop: '1px solid #ddd', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', color: '#1A1A1A', fontSize: '14px', fontWeight: 'bold', fontFamily: "'DM Sans', sans-serif" }}>
            <input 
              type="checkbox" 
              checked={agreed} 
              onChange={(e) => setAgreed(e.target.checked)} 
              style={{ width: '20px', height: '20px', cursor: 'pointer', accentColor: '#1A1A1A' }}
            />
            I have read and agree to the Event Terms and Conditions
          </label>
          
          <button 
            onClick={handleAgree}
            disabled={!agreed}
            style={{
              padding: '14px 40px',
              backgroundColor: agreed ? '#1A1A1A' : '#ccc',
              color: '#fff',
              border: 'none',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: agreed ? 'pointer' : 'not-allowed',
              transition: 'background-color 0.2s',
              fontFamily: "'DM Sans', sans-serif"
            }}
          >
            Enter Website
          </button>
        </div>
      </div>
    </div>
  );
}
