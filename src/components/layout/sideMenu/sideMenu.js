import React, { useState } from 'react';
import { Home, ShoppingCart, Box, Truck, PackageSearch, Users, Settings, MessageSquare, LogOut, CircleEllipsis } from 'lucide-react';
import "./sideMenu.scss";


const SideMenu = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [openTab, setOpenTab] = useState(null);

  const tabs = [
    { id: 0, title: 'HOME', icon: Home },
    { id: 1, title: '판매관리', icon: ShoppingCart },
    { id: 2, title: '본사입출관리', icon: Box },
    { id: 3, title: '점간이동관리', icon: Truck },
    { id: 4, title: '재고관리', icon: PackageSearch },
    { id: 5, title: '고객관리', icon: Users },
    { id: 6, title: '기초관리', icon: CircleEllipsis },
    { id: 7, title: '메시지관리', icon: MessageSquare },
  ];

  const menuItems = [
    {
      id: 0,
      title: 'HOME',
      subItems: ['대시보드', '공지사항', '최근 활동'],
    },
    {
      id: 1,
      title: '판매 관리',
      subItems: ['판매 등록', '판매마감현황', '품번별 판매현황', '일별/월별 판매현황', '일자별 판매현황', '완불판매관리', '인기/비인기 상품조회', '동업계매출등록', '동업계매출현황', '일일 매장정산서', '백화점KEY 금액관리', '월매출목표실적'],
    },
    {
      id: 2,
      title: '본사입출관리',
      subItems: ['주문등록', '주문현황', '입점확인', '반품등록', '본사의뢰반품등록', '반품현황', '입점/반품현황', '소모품주문등록', '소모품주문현황', '일별외상매출금현황', '월별외상매출금현황'],
    },
    {
      id: 3,
      title: '점간이동관리',
      subItems: ['본사 R/T지시등록', 'R/T 반출등록', 'R/T 반입등록', 'R/T 반입등록_일괄', 'R/T 진행현황', '본사 R/T지시처리현황', 'R/T 요청등록', 'R/T 요청확인', 'R/T 요청현황'],
    },
    {
      id: 4,
      title: '재고관리',
      subItems: ['매장재고현황', '타매장재고현황', '품번별 수불현황', '일자별 수불현황', '재고실사등록', '재고실사등록(세로)', '재고실사업로드', '실사파일업로드', '재고실사현황', '과부족현황'],
    },
    {
      id: 5,
      title: '고객관리',
      subItems: ['고객등록', '고객정보조회', '고객별구매현황', '구매정보 추적현황', '수선등록', '수선처리 진행현황', '고객서명등록'],
    },
    {
      id: 6,
      title: '기초관리',
      subItems: ['상품정보조회', '상품단가조회', '매장정보조회','아르바이트 등록/현황','동업계 설정'],
    },
    {
      id: 7,
      title: '메시지관리',
      subItems: ['공지사항', '자유게시판', 'VMD 게시판', '신상품소개', '쪽지보내기', '사이버품평회', 'STYLE별 게시판', '타사상품동향', '문자메세지', '주소록관리'],
    },
  ];

  const handleTabClick = (id) => {
    setActiveTab(id);
    if (id === 0) {
      setOpenTab(null);
    } else if (openTab === id) {
      setOpenTab(null);
    } else {
      setOpenTab(id);
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo"></div>
        <div className="tabs">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {React.createElement(tab.icon, { size: 24 })}
              <p>{tab.title}</p>
            </div>
          ))}
        </div>
        <div className="bottom-icons">
          <div className="icon-button">
            <Settings size={24} />
          </div>
          <div className="icon-button">
            <LogOut size={24} />
          </div>
        </div>
      </div>
      <div className={`main-content ${openTab !== null ? 'open' : ''}`}>
        {openTab !== null && (
          <div className="menu-container">
            <div className="user-info">
              <div className="avatar"></div>
              <div className="user-name">세원아토스</div>
              <div className="user-id">브랜드명</div>
            </div>
            {menuItems.filter(item => item.id === openTab).map((menu) => (
              <div key={menu.id} className="menu">
                <div className="menu-item">
                  {menu.title}
                </div>
                <div className="submenu">
                  {menu.subItems.map((subItem, index) => (
                    <div key={index} className="submenu-item">
                      {subItem}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideMenu;