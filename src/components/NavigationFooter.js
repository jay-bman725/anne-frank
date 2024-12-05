import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationFooter.css';

function NavigationFooter() {
  return (
    <div className="page-navigation">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/timeline" className="nav-link">Timeline</Link>
      {/* <Link to="/map" className="nav-link">Map</Link> */}
      <Link to="/resources" className="nav-link">Resources</Link>
      <Link to="/quotes" className="nav-link">Quotes</Link> 
      <Link to="/chat" className="nav-link">Secret</Link>
    </div>
  );
}

export default NavigationFooter; 