import React from 'react';

export default function InfoPost() {
  return (
    <div className="post-row" style={{ marginTop: '30px' }}>
      <div className="post-card" style={{ backgroundColor: '#1a1e24', border: '1px solid #3f4757', padding: '30px', color: '#a8b6c5', fontFamily: "'DM Sans', sans-serif" }}>
        
        {/* Header section */}
        <div style={{ marginBottom: '30px', borderBottom: '1px solid #3f4757', paddingBottom: '15px' }}>
          <h2 style={{ color: '#ff6b9d', fontSize: '24px', fontWeight: 'bold', margin: '0' }}>INFO</h2>
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
