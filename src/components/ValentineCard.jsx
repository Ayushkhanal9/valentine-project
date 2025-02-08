import React, { useState, useEffect } from 'react';
import './ValentineCard.css';

const ValentineCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      // Load SoundCloud Widget API
      const script = document.createElement("script");
      script.src = "https://w.soundcloud.com/player/api.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const iframe = document.createElement('iframe');
        iframe.width = "100%";
        iframe.height = "166";
        iframe.allow = "autoplay";
        iframe.src = "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/rexorangecounty/rain-man&auto_play=true&show_artwork=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false";
        
        // Style to hide the player but keep it functional
        iframe.style.position = 'absolute';
        iframe.style.left = '-9999px';
        iframe.style.visibility = 'hidden';
        
        document.getElementById('soundcloud-player').appendChild(iframe);
      };

      return () => {
        const playerContainer = document.getElementById('soundcloud-player');
        if (playerContainer) {
          playerContainer.innerHTML = '';
        }
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  const itinerary = [
    { time: "6:30 PM", activity: "Romantic dinner 🕯️" },
    { time: "8:00 PM", activity: "Passionate pillow fight 😈" },
    { time: "8:02 PM", activity: "Wine and relax 🌳" },
    { time: "next morning 10:00 AM", activity: "Breakfast by the chef(Me) ☕" },
  ];

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
          
          <h3>Our Special Day Together 💝</h3>
          <ul>
            {itinerary.map((item, index) => (
              <li key={index}>
                <strong style={{ color: '#ff1493' }}>{item.time}</strong>
                <br />
                {item.activity}
              </li>
            ))}
          </ul>

          <div className="images-section">
            <img src="/pic1.jpg" alt="pic 1" />
            <img src="/pic2.jpeg" alt="pic 2" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ValentineCard;