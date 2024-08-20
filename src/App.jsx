import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  const handleEnterWorkspace = (workspaceId) => {
    navigate(`/workspace/${workspaceId}`);
  };

  const handleCreateWorkspace = () => {
    navigate('/create-workspace');
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Bienvenido a Slack 2.0</h1>
      <div className="workspaces-container">
        <h2 className="workspaces-title">Entornos de trabajo</h2>
        <div className="workspace-item">
          <img
            src="src/assets/utn.png"
            alt="Workspace 1" 
            className="workspace-image" 
          />
          <span className="workspace-name">Workspace 1</span>
          <button className="enter-button" onClick={() => handleEnterWorkspace('workspace1')}>Entrar</button>
        </div>
        <div className="workspace-item">
          <img
            src="src/assets/utn.png" 
            alt="Workspace 2" 
            className="workspace-image" 
          />
          <span className="workspace-name">Workspace 2</span>
          <button className="enter-button" onClick={() => handleEnterWorkspace('workspace2')}>Entrar</button>
        </div>
        <div className="workspace-item">
          <img
            src="src/assets/utn.png" 
            alt="Workspace 3" 
            className="workspace-image" 
          />
          <span className="workspace-name">Workspace 3</span>
          <button className="enter-button" onClick={() => handleEnterWorkspace('workspace3')}>Entrar</button>
        </div>
      </div>
      <div className="create-workspace-container">
        <button className="create-workspace-button" onClick={handleCreateWorkspace}>Crear entorno de trabajo</button>
      </div>
    </div>
  );
}

export default App;
