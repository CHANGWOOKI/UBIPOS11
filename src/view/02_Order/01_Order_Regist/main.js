import "./style.scss";
import React from 'react';
import { Search, PlusCircle, Trash2 } from 'lucide-react';
import AgGridComponent2 from "../../../components/agGrid/AgGridComp2";

const OrderRegister = () => {
    return (
        <div className="order-management">
            <div className="content-box">
                <header>
                    <h1 className="main-title">
                        <span className="blue-dot"></span>주문등록
                    </h1>
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
                        <div className="date-range">
                            <label>주문일자</label>
                            <div className="date-inputs">
                                <input type="date" defaultValue="2024-10-15" />
                                <label>주문번호</label>
                                <input type="text" defaultValue="0001" />
                                <button className="search-button">검색</button>
                            </div>
                        </div>
                        <div className="search-options">
                            <label>매장존</label>
                            <select>
                                <option>A</option>
                                <option>B</option>
                            </select>
                            <div className="checkbox-group">
                                <input type="checkbox" id="batch-toggle" />
                                <label htmlFor="batch-toggle">바로등록</label>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="grid">
                    <AgGridComponent2/>
                </div>
                <div className="grid2">
                    {/* Second grid content */}
                </div>
            </div>
        </div>
    );
}

export default OrderRegister;