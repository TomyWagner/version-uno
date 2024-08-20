import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Index.css'; // Si tienes un archivo CSS para los estilos

const Index = () => {
  const navigate = useNavigate();
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    const storedWorkspaces = JSON.parse(localStorage.getItem('workspaces')) || [];
    setWorkspaces(storedWorkspaces);
  }, []);

  const handleCreateWorkspace = () => {
    navigate('/crear-entorno');
  };

  const handleEnterWorkspace = (workspaceId) => {
    navigate(`/workspace/${workspaceId}`);
  };

  return (
    <div className="index-container">
      <h1 className="app-title">Bienvenido a Slack 2.0</h1>
      <div className="workspaces-container">
        <h2 className="workspaces-title">Entornos de trabajo</h2>
        {workspaces.map((workspace, index) => (
          <div key={index} className="workspace-item">
            <img
              src={`/path/to/workspace${index + 1}.jpg`}
              alt={`Workspace ${index + 1}`}
              className="workspace-image"
            />
            <span className="workspace-name">{workspace.name}</span>
            <button
              className="enter-button"
              onClick={() => handleEnterWorkspace(workspace.id)}
            >
              Entrar
            </button>
          </div>
        ))}
      </div>
      <div className="create-workspace-container">
        <button onClick={handleCreateWorkspace} className="create-workspace-button">
          Crear entorno de trabajo
        </button>
      </div>
    </div>
  );
};

export default Index;
