import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ChannelList from '../components/ChannelList';
import Chat from '../components/Chat';
import Header from '../components/Header';
import CreateChannelPopup from '../components/CreateChannelPopup';
import './WorkspacePage.css';

const WorkspacePage = () => {
  const { workspace_id } = useParams();
  const [channels, setChannels] = useState([]);
  const [currentChannelId, setCurrentChannelId] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedWorkspaces = JSON.parse(localStorage.getItem('workspaces')) || [];
    const currentWorkspace = storedWorkspaces.find(w => w.id === workspace_id);
    const workspaceName = currentWorkspace ? currentWorkspace.name : 'Workspace';
    
    const storedChannels = JSON.parse(localStorage.getItem(`channels_${workspace_id}`)) || [];
    if (storedChannels.length === 0) {
      const defaultChannels = [
        { name: '#General', id: 'general' },
        { name: '#Charlas', id: 'charlas' },
        { name: '#Recursos_humanos', id: 'recursos_humanos' },
      ];
      setChannels(defaultChannels);
      localStorage.setItem(`channels_${workspace_id}`, JSON.stringify(defaultChannels));
    } else {
      setChannels(storedChannels);
    }

    setWorkspaceName(workspaceName);
  }, [workspace_id]);

  const handleChannelClick = (id) => {
    setCurrentChannelId(id);
  };

  const handleCreateChannel = (channelName) => {
    const newChannelId = Date.now().toString();
    const newChannel = { name: channelName, id: newChannelId };
    const updatedChannels = [...channels, newChannel];

    setChannels(updatedChannels);
    localStorage.setItem(`channels_${workspace_id}`, JSON.stringify(updatedChannels));
    setIsPopupOpen(false);
    setCurrentChannelId(newChannelId);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const [workspaceName, setWorkspaceName] = useState('Workspace');

  return (
    <div className="workspace-page">
      <Header workspaceName={workspaceName} onLogout={handleLogout} />
      <div className="content">
        <ChannelList
          channels={channels}
          onChannelClick={handleChannelClick}
          onAddChannel={() => setIsPopupOpen(true)}
        />
        <Chat channelId={currentChannelId} workspaceId={workspace_id} />
      </div>
      {isPopupOpen && (
        <CreateChannelPopup
          onCreate={handleCreateChannel}
          onCancel={() => setIsPopupOpen(false)}
        />
      )}
    </div>
  );
};

export default WorkspacePage;
