import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ workspaceName }) => {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/');
  };

  const handleMenuToggle = () => {
    const menu = document.querySelector('.channel-list');
    if (menu) {
      menu.classList.toggle('open');
    }
  };

  return (
    <header className="app-header">
      <h1>{workspaceName}</h1>
      <div className="header-right">
        <button className="hamburger-menu" onClick={handleMenuToggle}>
          &#9776;
        </button>
        <button className="exit-button" onClick={handleExit}>Salir</button>
      </div>
    </header>
  );
};

export default Header;

