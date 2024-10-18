import React from 'react';
import { Search, PlusCircle, Trash2 } from 'lucide-react';
import './style.scss';

const OrderRegister = () => {
    return (
        <div className="order-management">
            <div className="content-box">
                <header>
                    <h1 className="main-title"><span className="blue-dot"></span>주문현황</h1>
                    <div className="header-buttons">
                        <button className="query-button">
                            <Search size={18} />
                            조회
                        </button>
                        <button className="new-button">
                            <PlusCircle size={18} />
                            신규
                        </button>
                        <button className="delete-button">
                            <Trash2 size={18} />
                            삭제
                        </button>
                    </div>
                </header>
                <main>
                    <div className="search-bar">
                        <div className="search-group">
                            <label>기간</label>
                            <div className="input-wrapper">
                                <input type="date" defaultValue="2024-10-01" />
                                <span>~</span>
                                <input type="date" defaultValue="2024-10-15" />
                            </div>
                        </div>
                        <div className="search-group">
                            <label>구분</label>
                            <div className="input-wrapper">
                                <select>
                                    <option>전체</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                        </div>
                        <div className="search-group">
                            <label>미처리</label>
                            <div className="input-wrapper">
                                <input type="checkbox" id="unprocessed" />
                            </div>
                        </div>
                        <div className="search-group">
                            <label>진행중</label>
                            <div className="input-wrapper">
                                <input type="checkbox" id="in-progress" />
                            </div>
                        </div>
                        <div className="search-group">
                            <label>출고</label>
                            <div className="input-wrapper">
                                <input type="checkbox" id="shipped" />
                            </div>
                        </div>
                        <div className="search-group">
                            <label>출고불가</label>
                            <div className="input-wrapper">
                                <input type="checkbox" id="returned" />
                            </div>
                        </div>
                    </div>
                </main>
                <div className="grid">
                    {/* Grid content goes here */}
                </div>
            </div>
        </div>
    );
}

export default OrderRegister;