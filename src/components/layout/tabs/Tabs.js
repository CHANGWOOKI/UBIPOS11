// Tabs.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import './tabs.scss';

const PAGE_STORAGE_PREFIXES = {
  '/order': 'orderManagement_',
  '/sales': 'salesManagement_',
  '/inventory': 'inventoryManagement_',
  // 필요한 페이지 prefix 추가
};

// 경로별 탭 이름 매핑
const TAB_TITLES = {
  '/main': '홈',
  '/order/list': '주문현황',
  '/order/registe': '주문등록',
  '/sales': '판매관리',
  '/inventory': '재고관리',
  // 필요한 경로 및 이름 추가
};

const CustomTabs = () => {
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

  // 초기 로드 시 세션 스토리지에서 탭 정보 불러오기
  useEffect(() => {
    const savedTabs = JSON.parse(sessionStorage.getItem('tabs')) || [];
    setTabs(savedTabs);
    if (savedTabs.length > 0) {
      setCurrentContent(location.pathname);
    }
  }, []);

  // 경로 변경 시 탭 추가
  useEffect(() => {
    const savedTabs = JSON.parse(sessionStorage.getItem('tabs')) || [];
    if (!savedTabs.includes(location.pathname) && location.pathname !== '/' && location.pathname !== '/empty') {
      const updatedTabs = [...savedTabs, location.pathname];
      setTabs(updatedTabs);
      sessionStorage.setItem('tabs', JSON.stringify(updatedTabs));
      setCurrentContent(location.pathname);
    }
  }, [location.pathname]);

  // 탭 제거 핸들러
  const handleRemoveTab = (path, event) => {
    event.stopPropagation();
    clearPageSessionStorage(path);
    const updatedTabs = tabs.filter((tab) => tab !== path);
    setTabs(updatedTabs);
    sessionStorage.setItem('tabs', JSON.stringify(updatedTabs));

    // 현재 보고 있는 탭을 닫은 경우
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

  // 탭 클릭 핸들러
  const handleTabClick = (event, newValue) => {
    setCurrentContent(newValue);
    navigate(newValue);
  };

  // 경로에 해당하는 탭 이름 가져오기
  const getTabTitle = (path) => {
    return TAB_TITLES[path] || path; // 매핑된 이름이 없으면 경로를 그대로 사용
  };

  return (
    <div className="tabs-section">
      <Tabs
        value={currentContent || false}
        onChange={handleTabClick}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="tabs"
      >
        {tabs.map((tab) => (
          <Tab
            key={tab}
            label={getTabTitle(tab)}
            value={tab}
            icon={
              <IconButton
                size="small"
                onClick={(event) => handleRemoveTab(tab, event)}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            }
            iconPosition="end"
          />
        ))}
      </Tabs>
      {tabs.length > 0 && (
        <button className="remove-all-tabs" onClick={() => {
          tabs.forEach(clearPageSessionStorage);
          setTabs([]);
          sessionStorage.removeItem('tabs');
          setCurrentContent(null);
          navigate('./empty', { replace: true });
        }}>
          모두 지우기
        </button>
      )}
    </div>
  );
};

export default CustomTabs;
