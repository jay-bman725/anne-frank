import React, { useState } from 'react';
import './ChatWithAnne.css';

function ChatWithAnne() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Simulate a response from Anne
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: "Thank you for your message!", sender: 'anne' }]);
      }, 1000);
    }
  };

  return (
    <div className="chat">
      <h2>Chat with Anne</h2>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatWithAnne;
