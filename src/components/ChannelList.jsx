import React from 'react';
import './ChannelList.css';

const ChannelList = ({ channels, onChannelClick, onAddChannel }) => {
  return (
    <div className="channel-list">
      <h2>Canales</h2>
      <ul>
        {channels.map((channel) => (
          <li key={channel.id} onClick={() => onChannelClick(channel.id)}>
            {channel.name}
          </li>
        ))}
      </ul>
      <button className="add-channel-btn" onClick={onAddChannel}>
        Crear canal
      </button>
    </div>
  );
};

export default ChannelList;
