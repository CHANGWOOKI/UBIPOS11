import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import "./sideMenu.scss";


const SideMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { id: 1, title: '판매 관리', subItems: ['판매 등록', '판매마감현황', '품번별 판매현황', '일별/월별 판매현황', '일자별 판매현황', '완불판매관리', '인기/비인기 상품조회', '동업계매출등록', '동업계매출현황', '일일 매장정산서', '백화점KEY 금액관리', '월매출목표실적'] },
    { id: 2, title: '본사입출관리', subItems: ['주문등록', '주문현황', '입점확인', '반품등록', '본사의뢰반품등록', '반품현황', '입점/반품현황', '소모품주문등록', '소모품주문현황', '일별외상매출금현황', '월별외상매출금현황'] },
    { id: 3, title: '점간이동관리', subItems: ['본사 R/T지시등록', 'R/T 반출등록', 'R/T 반입등록', 'R/T 반입등록_일괄', 'R/T 진행현황', '본사 R/T지시처리현황', 'R/T 요청등록', 'R/T 요청확인', 'R/T 요청현황'] },
    { id: 4, title: '재고관리', subItems: ['매장재고현황', '타매장재고현황', '품번별 수불현황', '일자별 수불현황', '재고실사등록', '재고실사등록(세로)', '재고실사업로드', '실사파일업로드', '재고실사현황', '과부족현황'] },
    { id: 5, title: '고객관리', subItems: ['고객등록', '고객정보조회', '고객별구매현황', '구매정'] }
  ];
  

  const toggleSubMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <>
      <div className="side-menu-container">
        <div className="main-menu">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <button onClick={() => toggleSubMenu(item.id)}>
                <span>{item.title}</span>
                {activeMenu === item.id ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </button>
            </div>
          ))}
        </div>
        <div className={`sub-menu ${activeMenu ? 'active' : ''}`}>
          {activeMenu && (
            <div className="sub-menu-content">
              <h2>{menuItems.find((item) => item.id === activeMenu).title}</h2>
              <ul>
                {menuItems
                  .find((item) => item.id === activeMenu)
                  .subItems.map((subItem, index) => (
                    <li key={index}>{subItem}</li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SideMenu;