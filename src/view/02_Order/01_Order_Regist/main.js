import "./style.scss";
import React,{useState} from 'react';
import { Search, PlusCircle, Trash2 } from 'lucide-react';
import AgGridComponent2 from "../../../components/agGrid/AgGridComp2";
import AgGridComponent from "../../../components/agGrid/AgGridComp";



const OrderRegister = () => {

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
    const [orders, setOrders] = useState(initialData);
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
                <AgGridComponent rowData={orders} columnDefs={columnDefs} />
                    {/* Second grid content */}
                </div>
            </div>
        </div>
    );
}

export default OrderRegister;