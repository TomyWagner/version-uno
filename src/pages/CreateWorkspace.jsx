import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateWorkspace.css';

const CreateWorkspace = () => {
  const [workspaceName, setWorkspaceName] = useState('');
  const [channelName, setChannelName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCreateWorkspace = () => {
    if (workspaceName.trim() === '' || channelName.trim() === '') {
      setError('Por favor, completa todos los campos');
      return;
    }

    const workspaceId = `workspace-${Date.now()}`;
    const channelId = `channel-${Date.now()}`;

    const newWorkspace = {
      id: workspaceId,
      name: workspaceName,
      channels: [{ id: channelId, name: channelName }],
    };

    const storedWorkspaces = JSON.parse(localStorage.getItem('workspaces')) || [];
    localStorage.setItem('workspaces', JSON.stringify([...storedWorkspaces, newWorkspace]));

    navigate(`/workspace/${workspaceId}`);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="create-workspace-container">
      <h1>Crear un entorno de trabajo</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="form-group">
        <label htmlFor="workspaceName">Nombre del entorno de trabajo</label>
        <input
          type="text"
          id="workspaceName"
          value={workspaceName}
          onChange={(e) => setWorkspaceName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="channelName">Nombre del canal #1</label>
        <input
          type="text"
          id="channelName"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button onClick={handleCreateWorkspace} className="create-workspace-button">Crear entorno</button>
        <button onClick={handleCancel} className="cancel-button">Cancelar</button>
      </div>
    </div>
  );
};

export default CreateWorkspace;
