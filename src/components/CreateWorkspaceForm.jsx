import React, { useState } from 'react';

const CreateWorkspaceForm = ({ onCreateWorkspace }) => {
  const [workspaceName, setWorkspaceName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (workspaceName.trim()) {
      onCreateWorkspace(workspaceName);
      setWorkspaceName('');
    }
  };

  return (
    <form className="create-workspace-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={workspaceName}
        onChange={(e) => setWorkspaceName(e.target.value)}
        placeholder="Create new workspace"
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateWorkspaceForm;
