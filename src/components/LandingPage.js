import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import AnneFrankImage from '../assets/Anne_frank.jpg';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Downsized image above the quote */}
      <img src={AnneFrankImage} alt="Anne Frank" className="landing-image" />
      <div className="quote">
        <h1>Anne Frank</h1>
        <p>“In spite of everything I still believe that people are really good at heart.”</p>
      </div>
      <p className="Timeline"></p>
      <button onClick={() => navigate('/timeline')} className="timeline-button">
        See the Timeline
      </button>
    </div>
  );
}

export default LandingPage;
