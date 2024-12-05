import React from 'react';
import './Resources.css';

function Resources() {
  const resources = [
    { name: "Anne Frank House", url: "https://www.annefrank.org/en/" },
    { name: "The Diary of a Young Girl", url: "https://en.wikipedia.org/wiki/The_Diary_of_a_Young_Girl" },
    // Add more resources as needed
  ];

  return (
    <div className="resources">
      <h2>Resources</h2>
      <ul className="resource-list">
        {resources.map((resource, index) => (
          <li key={index} className="resource-item">
            <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;
