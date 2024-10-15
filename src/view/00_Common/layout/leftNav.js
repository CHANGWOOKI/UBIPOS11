import React, { useState } from 'react';
import "./Nav.scss"

const LeftNav = () => {
    const [activeTab, setActiveTab] = useState(1); // 초기 상태: 두 번째 탭 활성화

    const tabContents = [
        { name: '판매 관리', submenus: ['판매 등록', '본사 판매 현황'] },
        { name: '판매 관리', submenus: ['판매 등록', '판매마감현황', '품번별 판매현황', '일별/월별 판매현황', '일자별 판매현황', '완불판매관리', '인기/비인기 상품조회', '동업계매출등록', '동업계매출현황', '일일 매장정산서', '백화점KEY 금액관리', '월매출목표실적'] },
        { name: '본사입출관리', submenus: ['주문등록', '주문현황', '입점확인', '반품등록', '본사의뢰반품등록', '반품현황', '입점/반품현황', '소모품주문등록', '소모품주문현황', '일별외상매출금현황', '월별외상매출금현황'] },
        { name: '점간이동관리', submenus: ['본사 R/T지시등록', 'R/T 반출등록', 'R/T 반입등록', 'R/T 반입등록_일괄', 'R/T 진행현황', '본사 R/T지시처리현황', 'R/T 요청등록', 'R/T 요청확인', 'R/T 요청현황'] },
        { name: '재고관리', submenus: ['매장재고현황', '타매장재고현황', '품번별 수불현황', '일자별 수불현황', '재고실사등록', '재고실사등록(세로)', '재고실사업로드', '실사파일업로드', '재고실사현황', '과부족현황'] },
        { name: '고객관리', submenus: ['고객등록', '고객정보조회', '고객별구매현황', '구매정보 추적현황', '수선등록', '수선처리 진행현황', '고객서명등록'] },
        { name: '기초관리', submenus: ['상품정보조회', '상품단가조회', '매장정보조회'] },
        { name: '메시지관리', submenus: ['공지사항', '자유게시판', 'VMD 게시판', '신상품소개', '쪽지보내기', '사이버품평회', 'STYLE별 게시판', '타사상품동향', '문자메세지', '주소록관리'] }
    ];

    const tabs = [
        'HOME', '판매관리', '본사입출관리', '점간이동관리', '재고관리', '고객관리', '기초관리', '메시지관리'
    ];

    return (
        <div className="container">
            <div className="sidebar">
                <div className="logo"></div>
                <div className="tabs">
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`tab ${activeTab === index ? 'active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            <h1>●</h1>
                            <p>{tab}</p>
                        </div>
                    ))}
                </div>
            </div>
            {activeTab !== 0 && (
                <div className="main-content">
                    <div className="user-info">
                        <h1>SEWON POS</h1>
                        <div className="avatar"></div>
                        <div className="user-name">롯데본점</div>
                        <div className="user-id">M0001</div>
                    </div>
                    <div className="tab-content">
                        <div className="menu">
                            <div className="menu-item active">{tabContents[activeTab - 1].name}</div>
                            <div className="submenu">
                                {tabContents[activeTab - 1].submenus.map((submenu, index) => (
                                    <div key={index} className="submenu-item">
                                        {submenu}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LeftNav;