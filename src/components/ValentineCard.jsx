import React, { useState, useEffect } from 'react';
import './ValentineCard.css';
import pic1 from '../assets/pic1.jpg';  
import pic2 from '../assets/pic2.jpeg';

const ValentineCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  useEffect(() => {
    // Check if user is on a mobile device
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    checkMobile();

    if (isOpen && !isMobile) {
      startMusic();
    }
  }, [isOpen]);

  const startMusic = () => {
    const iframe = document.createElement('iframe');
    iframe.width = "100%";
    iframe.height = "166";
    iframe.allow = "autoplay";
    iframe.src = "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/rexorangecounty/rain-man&auto_play=true";

    iframe.style.opacity = "0.01";
    iframe.style.position = "fixed";
    iframe.style.bottom = "0";
    iframe.style.left = "0";

    const playerContainer = document.getElementById('soundcloud-player');
    if (playerContainer) {
      playerContainer.innerHTML = ''; 
      playerContainer.appendChild(iframe);

      iframe.onload = () => {
        setTimeout(() => {
          try {
            const widget = window.SC.Widget(iframe);
            widget.play();
          } catch (error) {
            console.error("SoundCloud Widget API failed to load:", error);
          }
        }, 500);
      };
    }
  };

  return (
    <div className="card-container">
      <div id="soundcloud-player"></div>
      
      {!isOpen ? (
        <div className="card-front" onClick={() => setIsOpen(true)}>
          <h2>❤️</h2>
          <p style={{ fontSize: '1.2em', marginTop: '20px' }}>
            Tap to open your special Valentine's surprise...
          </p>
        </div>
      ) : (
        <div className="card-content">
          <h2>Will You Be My Valentine? ❤️</h2>
          <p style={{ fontSize: '1.2em', lineHeight: '1.6', color: '#555' }}>
            You are the sweetest part of my life, and I can't wait to spend this special day with you!
          </p>
          
          {isMobile && !musicStarted && (
            <button 
              onClick={() => {
                startMusic();
                setMusicStarted(true);
              }} 
              style={{
                display: 'block', 
                margin: '20px auto', 
                padding: '10px 20px', 
                fontSize: '1.2em', 
                color: 'white', 
                background: '#ff69b4', 
                border: 'none', 
                borderRadius: '10px', 
                cursor: 'pointer'
              }}
            >
              Tap to Start Music 🎶
            </button>
          )}

          <h3>Our Special Day Together 💝</h3>
          <ul>
            {[
              { time: "6:30 PM", activity: "Romantic dinner 🕯️" },
              { time: "8:00 PM", activity: "Passionate pillow fight 😈" },
              { time: "8:02 PM", activity: "Wine and relax 🌳" },
              { time: "next morning 10:00 AM", activity: "Breakfast by the chef(Me) ☕" }
            ].map((item, index) => (
              <li key={index}>
                <strong style={{ color: '#ff1493' }}>{item.time}</strong>
                <br />
                {item.activity}
              </li>
            ))}
          </ul>

          <div className="images-section">
            <img src={pic1} alt="pic 1" />
            <img src={pic2} alt="pic 2" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ValentineCard;
