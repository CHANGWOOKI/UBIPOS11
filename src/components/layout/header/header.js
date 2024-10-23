import React, { useState } from 'react';
import { Bell, Mail, Headset, Sun, Moon } from 'lucide-react';
import './header.scss';

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="top-menu">
      <div className="title-section">
        <img src="https://www.sewonatos.co.kr/img/sewon_logo.png" alt="SEWON" className="logo" />
      </div>
      <div className="right-section">
        <div className="icon-section">
          <div className="search-bar">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
          <div className="icon-wrapper">
            <Mail size={20} />
          </div>
          <div className="icon-wrapper">
            <Bell size={20} />
          </div>
          <div className="icon-wrapper">
            <Headset size={20} />
          </div>
        </div>
        <div className="toggle-section">
          <div className={`toggle-container ${isToggled ? 'active' : ''}`} onClick={() => setIsToggled(!isToggled)}>
            <div className="toggle-background"></div>
            <div className="toggle-text">
              <span className="toggle-on">
                <Sun size={18} />
              </span>
              <span className="store-name">롯데본점</span>
              <span className="toggle-off">
                <Moon size={18} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;