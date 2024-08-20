import React, { useState, useEffect } from 'react';
import './Chat.css';

const Chat = ({ channelId, workspaceId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    if (channelId) {
      const storedMessages = JSON.parse(localStorage.getItem(`messages_${workspaceId}_${channelId}`)) || [];
      setMessages(storedMessages);
    }
  }, [channelId, workspaceId]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const message = {
      text: newMessage,
      timestamp: new Date(),
      username: 'Usuario',
    };
    const updatedMessages = [...messages, message];

    setMessages(updatedMessages);
    localStorage.setItem(`messages_${workspaceId}_${channelId}`, JSON.stringify(updatedMessages));
    setNewMessage('');
  };

  return (
    <div className="chat">
      {channelId ? (
        <>
          <div className="messages">
            {messages.map((message, index) => (
              <div key={index} className="message">
                <img src="../src/assets/utn.png" alt="avatar" className="avatar" />
                <div className="message-content">
                  <span className="username">{message.username}</span>
                  <p>{message.text}</p>
                  <span className="timestamp">{new Date(message.timestamp).toLocaleTimeString()}</span>
                </div>
              </div>
            ))}
          </div>
          <form className="message-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Escribe un mensaje..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="submit">Enviar</button>
          </form>
        </>
      ) : (
        <p>Selecciona un canal para comenzar a chatear.</p>
      )}
    </div>
  );
};

export default Chat;
