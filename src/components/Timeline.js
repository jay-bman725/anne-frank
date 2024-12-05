import React, { useState } from 'react';
import './Timeline.css';

function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      date: "June 12, 1929",
      title: "Birth in Frankfurt",
      description: "Anne Frank is born in Frankfurt, Germany to Otto and Edith Frank",
      detailedDescription: "Annelies Marie Frank was born in Frankfurt, Germany. Her parents were Otto and Edith Frank, and she had an older sister, Margot. The Franks were a liberal Jewish family and were German citizens. Anne's early years were spent in a nurturing environment, surrounded by family and friends. Her father, Otto, was a businessman, and her mother, Edith, was a homemaker. The family lived in a comfortable apartment in a quiet neighborhood.",
      image: require("../assets/Anne_Frank_birth.jpg"),
      bgColor: "#e6d5ac",
    },
    {
      date: "1933",
      title: "Move to Amsterdam",
      description: "The Frank family moves to Amsterdam to escape Nazi persecution",
      detailedDescription: "The Frank family moved to Amsterdam, Netherlands, in 1933 to escape Nazi persecution. They lived in a house on the Prinsengracht canal, known as the Secret Annex. The house was hidden behind a facade and had a secret entrance. In Amsterdam, Anne attended the Montessori school, where she excelled in her studies and made many friends. The family adapted to their new life, but the rise of Nazi power in Germany was a constant source of anxiety.",
      image: require("../assets/amsterdam.jpg"),
      bgColor: "#b3cce6",
    },
    {
      date: "1942",
      title: "Going into Hiding",
      description: "The Frank family goes into hiding in the Secret Annex",
      detailedDescription: "The Frank family went into hiding in the Secret Annex in Amsterdam in 1942. The Secret Annex was a large building that was divided into several apartments. The Franks lived in the back apartment, which was hidden behind a bookcase. The decision to go into hiding was made after Margot received a call-up notice from the Nazis. The family was joined by the Van Pels family and Fritz Pfeffer, a dentist. Life in hiding was challenging, with strict rules and constant fear of discovery.",
      image: require("../assets/secret-annex.jpg"),
      bgColor: "#8c7355",
    },
    {
      date: "July 15, 1944",
      title: "The Last Diary Entry",
      description: "Anne writes her final diary entry",
      detailedDescription: "Anne Frank wrote her final diary entry on July 15, 1944. She was 15 years old at the time. The diary entry was written in German and was later translated into English. In her last entry, Anne reflects on her inner turmoil and the duality of her personality. She expresses hope for the future and a desire to become a writer. Her diary, which she named 'Kitty', became her confidant and a source of solace during the difficult times in hiding.",
      image: require("../assets/diary.jpg"),
      bgColor: "#d4c1a1",
    },
    {
      date: "August 4, 1944",
      title: "Arrest",
      description: "The residents of the Secret Annex are arrested",
      detailedDescription: "The residents of the Secret Annex were arrested on August 4, 1944. The residents were arrested by the Nazi Gestapo, the secret police of Nazi Germany. The residents were arrested because they were hiding in the Secret Annex. The arrest was the result of a tip-off from an unknown informant. The residents were taken to Westerbork transit camp and later deported to Auschwitz. The arrest marked the end of their time in hiding and the beginning of a harrowing journey through the concentration camps.",
      image: require("../assets/arrest.jpg"),
      bgColor: "#4a4a4a",
    },
    {
      date: "February 1945",
      title: "Death at Bergen-Belsen",
      description: "Anne Frank dies at Bergen-Belsen concentration camp",
      detailedDescription: "Anne Frank died at Bergen-Belsen concentration camp on February 1945. She was 15 years old at the time of her death. Bergen-Belsen was one of the largest concentration camps in Nazi Germany. Anne and her sister Margot succumbed to typhus, a disease that spread rapidly due to the overcrowded and unsanitary conditions. The camp was liberated by British forces in April 1945, but Anne and Margot had already perished. Their deaths were a tragic loss, and Anne's diary remains a poignant reminder of the horrors of the Holocaust.",
      image: require("../assets/memorial.jpg"),
      bgColor: "#000000",
    },
    {
      date: "May 1945",
      title: "Liberation of Bergen-Belsen",
      description: "Bergen-Belsen concentration camp is liberated by Allied forces",
      detailedDescription: "In May 1945, the Bergen-Belsen concentration camp was liberated by Allied forces. The liberation revealed the horrific conditions and the extent of the atrocities committed by the Nazis. The British soldiers who liberated the camp were shocked by the scenes of death and suffering. They provided medical care and food to the survivors, many of whom were severely malnourished and ill. The liberation of Bergen-Belsen marked the end of the camp's existence and the beginning of the survivors' journey to recovery.",
      image: require("../assets/liberation.jpg"),
      bgColor: "#6b8e23",
    },
    {
      date: "June 25, 1947",
      title: "Publication of the Diary",
      description: "Anne Frank's diary is published",
      detailedDescription: "Anne Frank's diary, titled 'The Diary of a Young Girl', was published on June 25, 1947. It became one of the world's most widely read books and has been translated into many languages. The diary was edited and published by Anne's father, Otto Frank, the only surviving member of the family. The diary provides a unique and personal perspective on the experiences of a young Jewish girl during the Holocaust. It has inspired countless readers and continues to be a powerful testament to the resilience of the human spirit.",
      image: require("../assets/diary_publication.jpg"),
      bgColor: "#ffcccb",
    }
  ];

  const handleEventClick = (index) => {
    setSelectedEvent(selectedEvent === index ? null : index);
  };

  return (
    <div className="timeline">
      <h1>Anne Frank's Timeline</h1>
      <div className={`timeline-container ${selectedEvent !== null ? 'has-selected' : ''}`}>
        {events.map((event, index) => (
          <div 
            key={index} 
            className={`timeline-event ${selectedEvent === index ? 'expanded' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
            style={{ 
              '--bg-color': event.bgColor,
              '--prev-bg-color': index > 0 ? events[index - 1].bgColor : 'transparent',
              '--event-index': index + 1
            }}
            onClick={() => handleEventClick(index)}
          >
            <div className="timeline-content">
              <div className="timeline-date">{event.date}</div>
              <h2>{event.title}</h2>
              <img 
                src={event.image} 
                alt={event.title} 
                className="timeline-image"
              />
              <p>{selectedEvent === index ? event.detailedDescription : event.description}</p>
              
              {selectedEvent === index && (
                <button 
                  className="close-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedEvent(null);
                  }}
                >
                  Close
                </button>
              )}
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
