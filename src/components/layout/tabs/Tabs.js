import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './tabs.scss';

const PAGE_STORAGE_PREFIXES = {
  '/order': 'orderManagement_',
  '/sales': 'salesManagement_',
  '/inventory': 'inventoryManagement_',
};

const TAB_TITLES = {
  '/main': '홈',
  '/order/list': '주문현황',
  '/order/registe': '주문등록',
  '/sales': '판매관리',
  '/inventory': '재고관리',
};

const ModernTabs = () => {
  const [tabs, setTabs] = useState([]);
  const [currentContent, setCurrentContent] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const clearPageSessionStorage = (path) => {
    const prefix = Object.entries(PAGE_STORAGE_PREFIXES).find(([key]) =>
      path.startsWith(key)
    )?.[1];
    if (prefix) {
      Object.keys(sessionStorage).forEach(key => {
        if (key.startsWith(prefix)) {
          sessionStorage.removeItem(key);
        }
      });
    }
  };

  useEffect(() => {
    const savedTabs = JSON.parse(sessionStorage.getItem('tabs')) || [];
    setTabs(savedTabs);
    if (savedTabs.length > 0) {
      setCurrentContent(location.pathname);
    }
  }, []);

  useEffect(() => {
    const savedTabs = JSON.parse(sessionStorage.getItem('tabs')) || [];
    if (!savedTabs.includes(location.pathname) && location.pathname !== '/' && location.pathname !== '/empty') {
      const updatedTabs = [...savedTabs, location.pathname];
      setTabs(updatedTabs);
      sessionStorage.setItem('tabs', JSON.stringify(updatedTabs));
      setCurrentContent(location.pathname);
    }
  }, [location.pathname]);

  const handleRemoveTab = (path, event) => {
    event.stopPropagation();
    clearPageSessionStorage(path);
    const updatedTabs = tabs.filter((tab) => tab !== path);
    setTabs(updatedTabs);
    sessionStorage.setItem('tabs', JSON.stringify(updatedTabs));

    if (currentContent === path) {
      if (updatedTabs.length > 0) {
        const lastTab = updatedTabs[updatedTabs.length - 1];
        setCurrentContent(lastTab);
        navigate(lastTab);
      } else {
        setCurrentContent(null);
        navigate('./empty', { replace: true });
      }
    }
  };

  const handleTabClick = (path) => {
    setCurrentContent(path);
    navigate(path);
  };

  const getTabTitle = (path) => {
    return TAB_TITLES[path] || path;
  };

  return (
    <div className="modern-tabs-wrapper">
      <div className="tabs-container">
        <div className="tabs-scroll-area">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`tab-item ${currentContent === tab ? 'active' : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              <span className="tab-text">{getTabTitle(tab)}</span>
              <button
                className="close-button"
                onClick={(e) => handleRemoveTab(tab, e)}
                aria-label="탭 닫기"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModernTabs;