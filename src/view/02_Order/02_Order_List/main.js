import "./style.scss";
import React, { useState } from 'react';
import { Search, PlusCircle, Trash2 } from 'lucide-react';
import AgGridComponent from '../../../components/agGrid/AgGridComp';

const Main = () => {
    const initialData = [
        {
            번호: 1,
            품번: 'LKJ1WTOH002BR',
            품명: 'OVERSIZE HANDMADE COAT_BROWN',
            TAG가: '12345',
            색상: 'BROWN',
            매장재고: 10,
            창고재고: 20,
            수량: 5,
            금액: 300000,
            주문일자: '2024-10-05',
            주문구분: '미처리',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 3,
            품번: 'LKJ1TCKS002RD',
            품명: 'CASHMERE WOOL KNIT SKIRT_RED',
            TAG가: '22331',
            색상: 'RED',
            매장재고: 8,
            창고재고: 12,
            수량: 2,
            금액: 200000,
            주문일자: '2024-10-10',
            주문구분: '출고',
        },
        {
            번호: 4,
            품번: 'LKJ1JKTO003BL',
            품명: 'DENIM JACKET_BLUE',
            TAG가: '66789',
            색상: 'BLUE',
            매장재고: 7,
            창고재고: 13,
            수량: 4,
            금액: 220000,
            주문일자: '2024-10-12',
            주문구분: '출고불가',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        },
        {
            번호: 2,
            품번: 'LKJ1TCKS002DG',
            품명: 'CASHMERE WOOL KNIT SKIRT_DARK GREY',
            TAG가: '54321',
            색상: 'DARK GREY',
            매장재고: 5,
            창고재고: 15,
            수량: 3,
            금액: 150000,
            주문일자: '2024-10-07',
            주문구분: '진행중',
        }
    ];

    const [orders, setOrders] = useState(initialData);
    const [startDate, setStartDate] = useState(getThisMonthStart());
    const [endDate, setEndDate] = useState(getToday());
    const [selectedStatus, setSelectedStatus] = useState('전체');

    const handleSearch = () => {
        const filteredData = initialData.filter(order => {
            const orderDate = new Date(order.주문일자);
            return orderDate >= new Date(startDate) && orderDate <= new Date(endDate) &&
                (selectedStatus === '전체' || order.주문구분 === selectedStatus);
        });
        setOrders(filteredData);
    };

    const handleStatusChange = (status) => {
        setSelectedStatus(status);
    };

    const columnDefs = [
        { headerName: '번호', field: '번호', width: 80 },
        { headerName: '품번', field: '품번', width: 180 },
        { headerName: '품명', field: '품명', width: 250 },
        { headerName: 'TAG가', field: 'TAG가', width: 100 },
        { headerName: '색상', field: '색상', width: 100 },
        { headerName: '매장재고', field: '매장재고', width: 120 },
        { headerName: '창고재고', field: '창고재고', width: 120 },
        { headerName: '수량', field: '수량', width: 120 },
        { headerName: '금액', field: '금액', width: 120 },
        { headerName: '주문일자', field: '주문일자', width: 150 },
        { headerName: '주문구분', field: '주문구분', width: 120 }
    ];

    return (
        <div className="order-management">
            <div className="content-box">
                <header>
                    <div className="header-top">
                        <h1 className="main-title"><span className="blue-dot"></span>주문 현황</h1>
                        <div className="header-buttons">
                            <button className="query-button" onClick={handleSearch}>
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
                    </div>
                    <div className="search-bar">
                        <div className="search-group">
                            <label>기간</label>
                            <div className="input-wrapper date-inputs">
                                <input 
                                    type="date" 
                                    value={startDate} 
                                    onChange={(e) => setStartDate(e.target.value)} 
                                />
                                <span>~</span>
                                <input 
                                    type="date" 
                                    value={endDate} 
                                    onChange={(e) => setEndDate(e.target.value)} 
                                />
                            </div>
                        </div>
                        <div className="search-group">
                            <label>구분</label>
                            <div className="input-wrapper status-tabs">
                                <div>
                                    <input
                                        type="radio"
                                        id="전체"
                                        name="status"
                                        value="전체"
                                        checked={selectedStatus === '전체'}
                                        onChange={() => handleStatusChange('전체')}
                                    />
                                    <label htmlFor="전체">전체</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="미처리"
                                        name="status"
                                        value="미처리"
                                        checked={selectedStatus === '미처리'}
                                        onChange={() => handleStatusChange('미처리')}
                                    />
                                    <label htmlFor="미처리">미처리</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="진행중"
                                        name="status"
                                        value="진행중"
                                        checked={selectedStatus === '진행중'}
                                        onChange={() => handleStatusChange('진행중')}
                                    />
                                    <label htmlFor="진행중">진행중</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="출고"
                                        name="status"
                                        value="출고"
                                        checked={selectedStatus === '출고'}
                                        onChange={() => handleStatusChange('출고')}
                                    />
                                    <label htmlFor="출고">출고</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="출고불가"
                                        name="status"
                                        value="출고불가"
                                        checked={selectedStatus === '출고불가'}
                                        onChange={() => handleStatusChange('출고불가')}
                                    />
                                    <label htmlFor="출고불가">출고불가</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <div className="grid">
                        <AgGridComponent rowData={orders} columnDefs={columnDefs} />
                    </div>
                </main>
            </div>
        </div>
    );
};

function getThisMonthStart() {
    const date = new Date();
    date.setDate(1);
    return date.toISOString().split('T')[0];
}

function getToday() {
    return new Date().toISOString().split('T')[0];
}

export default Main;