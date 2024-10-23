import "./style.scss";
import React from 'react';
import { Search, PlusCircle, Trash2 } from 'lucide-react';
import AgGridComponent2 from "../../../components/agGrid/AgGridComp2";

const OrderRegister = () => {
    return (
        <div className="order-register">
            <div className="order-register__container">
                <header className="order-register__header">
                    <h1 className="order-register__title">
                        <span className="order-register__title-dot"></span>주문등록
                    </h1>
                    <div className="order-register__actions">
                        <button className="order-register__btn order-register__btn--query">
                            <Search size={18} />
                            조회
                        </button>
                        <button className="order-register__btn order-register__btn--new">
                            <PlusCircle size={18} />
                            신규
                        </button>
                        <button className="order-register__btn order-register__btn--delete">
                            <Trash2 size={18} />
                            삭제
                        </button>
                    </div>
                </header>
                <main className="order-register__main">
                    <div className="order-register__search">
                        <div className="order-register__date-section">
                            <label className="order-register__label">주문일자</label>
                            <div className="order-register__date-controls">
                                <input type="date" className="order-register__input" defaultValue="2024-10-15" />
                                <label className="order-register__label">주문번호</label>
                                <input type="text" className="order-register__input" defaultValue="0001" />
                                <button className="order-register__btn order-register__btn--search">검색</button>
                            </div>
                        </div>
                        <div className="order-register__options">
                            <label className="order-register__label">매장존</label>
                            <select className="order-register__select">
                                <option>A</option>
                                <option>B</option>
                            </select>
                            <div className="order-register__checkbox-wrapper">
                                <input type="checkbox" id="batch-toggle" className="order-register__checkbox" />
                                <label htmlFor="batch-toggle" className="order-register__label">바로등록</label>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="order-register__grid-primary">
                    <AgGridComponent2/>
                </div>
                <div className="order-register__grid-secondary">
                    {/* Second grid content */}
                </div>
            </div>
        </div>
    );
}

export default OrderRegister;