import React, { useState } from 'react';
import { Home, ShoppingCart, Box, Truck, PackageSearch, Users, Settings, MessageSquare, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import "./sideMenu.scss";


const SideMenu = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [openTab, setOpenTab] = useState(null);
  const navigate = useNavigate();

  const tabs = [
    { id: 0, title: 'HOME', icon: Home },
    { id: 1, title: '판매관리', icon: ShoppingCart },
    { id: 2, title: '본사입출관리', icon: Box },
    { id: 3, title: '점간이동관리', icon: Truck },
    { id: 4, title: '재고관리', icon: PackageSearch },
    { id: 5, title: '고객관리', icon: Users },
    { id: 6, title: '기초관리', icon: Settings },
    { id: 7, title: '메시지관리', icon: MessageSquare },
  ];

  const menuItems = [
    {
      id: 1,
      title: '판매 관리',
      subItems: [
        { name: '판매 등록', path: 'sale/registe' },
        { name: '판매마감현황', path: 'sale/magamList' },
        { name: '품번별 판매현황', path: 'sale/' },
        { name: '일별/월별 판매현황', path: 'sale/' },
        { name: '일자별 판매현황', path: 'sale/' },
        { name: '완불판매관리', path: 'sale/' },
        { name: '인기/비인기 상품조회', path: 'sale/' },
        { name: '동업계매출등록', path: 'sale/' },
        { name: '동업계매출현황', path: 'sale/' },
        { name: '일일 매장정산서', path: 'sale/' },
        { name: '백화점KEY 금액관리', path: 'sale/' },
        { name: '월매출목표실적', path: 'sale/' },
      ],
    },
    {
      id: 2,
      title: '본사입출관리',
      subItems: [
        { name: '주문등록', path: 'order/registe' },
        { name: '주문현황', path: 'order/list' },
        { name: '입점확인', path: 'order/' },
        { name: '반품등록', path: 'order/' },
        { name: '본사의뢰반품등록', path: 'order/' },
        { name: '반품현황', path: 'order/' },
        { name: '입점/반품현황', path: 'order/' },
        { name: '소모품주문등록', path: 'order/' },
        { name: '소모품주문현황', path: 'order/' },
        { name: '일별외상매출금현황', path: 'order/' },
        { name: '월별외상매출금현황', path: 'order/' },
      ],
    },
    {
      id: 3,
      title: '점간이동관리',
      subItems: [
        { name: '본사 R/T지시등록', path: 'move/' },
        { name: 'R/T 반출등록', path: 'move/' },
        { name: 'R/T 반입등록', path: 'move/' },
        { name: 'R/T 반입등록_일괄', path: 'move/' },
        { name: 'R/T 진행현황', path: 'move/' },
        { name: '본사 R/T지시처리현황', path: 'move/' },
        { name: 'R/T 요청등록', path: 'move/' },
        { name: 'R/T 요청확인', path: 'move/' },
        { name: 'R/T 요청현황', path: 'move/' },
      ],
    },
    {
      id: 4,
      title: '재고관리',
      subItems: [
        { name: '매장재고현황', path: 'stock/' },
        { name: '타매장재고현황', path: 'stock/' },
        { name: '품번별 수불현황', path: 'stock/' },
        { name: '일자별 수불현황', path: 'stock/' },
        { name: '재고실사등록', path: 'stock/' },
        { name: '재고실사등록(세로)', path: 'stock/' },
        { name: '재고실사업로드', path: 'stock/' },
        { name: '실사파일업로드', path: 'stock/' },
        { name: '재고실사현황', path: 'stock/' },
        { name: '과부족현황', path: 'stock/' },
      ],
    },
    {
      id: 5,
      title: '고객관리',
      subItems: [
        { name: '고객등록', path: 'cust/' },
        { name: '고객정보조회', path: 'cust/' },
        { name: '고객별구매현황', path: 'cust/' },
        { name: '구매정보 추적현황', path: 'cust/' },
        { name: '수선등록', path: 'cust/' },
        { name: '수선처리 진행현황', path: 'cust/' },
        { name: '고객서명등록', path: 'cust/' },
      ],
    },
    {
      id: 6,
      title: '기초관리',
      subItems: [
        { name: '상품정보조회', path: 'basic/' },
        { name: '상품단가조회', path: 'basic/' },
        { name: '매장정보조회', path: 'basic/' },
      ],
    },
    {
      id: 7,
      title: '메시지관리',
      subItems: [
        { name: '공지사항', path: 'message/' },
        { name: '자유게시판', path: 'message/' },
        { name: 'VMD 게시판', path: 'message/' },
        { name: '신상품소개', path: 'message/' },
        { name: '쪽지보내기', path: 'message/' },
        { name: '사이버품평회', path: 'message/' },
        { name: 'STYLE별 게시판', path: 'message/' },
        { name: '타사상품동향', path: 'message/' },
        { name: '문자메세지', path: 'message/' },
        { name: '주소록관리', path: 'message/' },
      ],
    },
  ];



  const handleTabClick = (id) => {
    if (id === 0) {
      setActiveTab(null);
      setOpenTab(null);
      navigate('/main');
    } else {
      setActiveTab(id === id ? null : id);
      setOpenTab(openTab === id ? null : id);
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
              className={`tab ${(openTab === tab.id || activeTab === tab.id) ? 'active' : ''}`}
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
              <div className="avatar">
                
              </div>
              <div className="user-name">롯데본점</div>
              <div className="user-id">M0001</div>
            </div>
            {menuItems.filter(item => item.id === openTab).map((menu) => (
              <div key={menu.id} className="menu">
                <div className="menu-item">
                  {menu.title}
                </div>
                <div className="submenu">
                  {menu.subItems.map((subItem, index) => (
                    <Link key={index} to={`/${subItem.path}`} className="submenu-item">
                      {subItem.name}
                    </Link>
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