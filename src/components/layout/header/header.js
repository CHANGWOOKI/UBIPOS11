import './header.scss';
import {Bell, Mail, Headset } from 'lucide-react';

const Header = () => {
  return (
    <div className="top-menu">
      <div className="title-section">
        <div className='sewon-logo'>SEWON POS</div>
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
          {/* 쪽지 */}
          <div className="icon-wrapper">
            <Mail size={20} />
          </div>
          {/* 공지 */}
          <div className="icon-wrapper">
            <Bell size={20} />
          </div>
          {/* 원격지원 */}
          <div className="icon-wrapper">
            <Headset  size={20} />
          </div>
        </div>
        {/* 매장명과 슬라이드 형식에 다크모드 들어갈 예정 */}
        <div className="user-section">
          <span className="user-name">롯데본점</span>
        </div>
      </div>
    </div>
  );
};

export default Header;