import React from 'react';
import TermsText from './TermsText';
import { Link } from 'react-router-dom';

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: '#F5F0EB', minHeight: '100vh', padding: '40px 20px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <TermsText />
      </div>
      
      {/* Sticky Back Button */}
      <div style={{ position: 'fixed', bottom: '0', left: '0', right: '0', padding: '20px', backgroundColor: 'rgba(245, 240, 235, 0.9)', backdropFilter: 'blur(10px)', borderTop: '1px solid #ddd', display: 'flex', justifyContent: 'center' }}>
        <Link to="/" style={{ padding: '12px 32px', backgroundColor: '#1A1A1A', color: '#fff', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold', fontSize: '16px', display: 'inline-block' }}>
          Back to Tickets
        </Link>
      </div>
    </div>
  );
}
