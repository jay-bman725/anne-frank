import React from 'react';
import './Map.css';

function Map() {
  const locations = [
    { name: "Anne Frank House", description: "The Secret Annex where Anne Frank hid.", coordinates: [52.3752, 4.8840] },
    { name: "Westerkerk", description: "The church near the Secret Annex.", coordinates: [52.3738, 4.8836] },
    // Add more locations as needed
  ];

  return (
    <div className="map">
      <h2>Key Locations</h2>
      <div className="map-container">
        {locations.map((location, index) => (
          <div key={index} className="map-marker" style={{ top: `${location.coordinates[0]}%`, left: `${location.coordinates[1]}%` }}>
            <span className="map-tooltip">{location.name}: {location.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Map;
