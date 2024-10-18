import React, { useState } from 'react';
import './header.scss';
import { MessageCircle, Bell, HelpCircle, Search } from 'lucide-react';

const Header = () => {
  return (
    <div className="top-menu">
      <div className="title-section">
        <h1>SEWOMPOS</h1>
      </div>
      <div className="right-section">
        <div className="icon-section">
          <div className="icon-wrapper">
            <Search size={20} />
          </div>
          <div className="icon-wrapper">
            <MessageCircle size={20} />
          </div>
          <div className="icon-wrapper">
            <Bell size={20} />
          </div>
        </div>
        <div className="user-section">
          <span className="user-name">롯데본점</span>
        </div>
      </div>
    </div>
  );
};

export default Header;