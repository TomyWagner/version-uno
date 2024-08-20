import React from 'react';

const WorkspaceCard = ({ workspace }) => {
  return (
    <div className="workspace-card">
      <h3>{workspace.name}</h3>
    </div>
  );
};

export default WorkspaceCard;
