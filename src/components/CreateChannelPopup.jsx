import React, { useState } from 'react';
import './CreateChannelPopup.css';

const CreateChannelPopup = ({ onCreate, onCancel }) => {
  const [channelName, setChannelName] = useState('');

  const handleCreate = () => {
    if (channelName.trim() === '') return;
    onCreate(channelName);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Crear un nuevo canal</h2>
        <input
          type="text"
          placeholder="Nombre del canal"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
        />
        <div className="button-group">
          <button className="btn create-btn" onClick={handleCreate}>
            Confirmar
          </button>
          <button className="btn cancel-btn" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateChannelPopup;
