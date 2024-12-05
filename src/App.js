// src/App.js (App.js)
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Timeline from './components/Timeline';
import Map from './components/Map';
import Resources from './components/Resources';
import Quotes from './components/Quotes';
import ChatWithAnne from './components/ChatWithAnne';
import NavigationFooter from './components/NavigationFooter';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/timeline" element={<Timeline />} />
          {/* <Route path="/map" element={<Map />} /> */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/chat" element={<ChatWithAnne />} />
        </Routes>
        <NavigationFooter />
      </div>
    </Router>
  );
}

export default App;
