import React from 'react';
import './Quotes.css';

function Quotes() {
  const quotes = [
    "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
    "I don't think of all the misery, but of the beauty that still remains.",
    "Despite everything, I believe that people are really good at heart.",
    "Laziness may appear attractive, but work gives satisfaction.",
    "Whoever is happy will make others happy too.",
    "I simply can't build my hopes on a foundation of confusion, misery and death... I think... peace and tranquillity will return again.",
    "The weak fall, but the strong will remain and never go under!",
    "In the long term, the sharpest weapon of all is a kind and gentle spirit.",
    "How nice it is to be able to be yourself.",
    "No one has ever become poor by giving."
    // Add more quotes as needed
  ];

  return (
    <div className="quotes">
      <h2>Quotes by Anne Frank</h2>
      <ul className="quote-list">
        {quotes.map((quote, index) => (
          <li key={index} className="quote-item">
            <blockquote>{quote}</blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quotes;
