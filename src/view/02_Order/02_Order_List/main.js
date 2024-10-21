import "./style.scss";
import React, { useState } from 'react';
import { Search, PlusCircle, Trash2 } from 'lucide-react';
import GridComponent from "../../../components/grid/gridComponent";

const OrderList = () => {
    const initialData = [
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        { orderId: 6, orderDate: '2024-10-03', itemCode: 'A003', itemName: '상품3', color: 'Green', orderType: '특별', division: '본사', processingDate: '2024-10-04', XXS: 2, XS: 2, S: 3, M: 2, L: 1, XL: 1, XXL: 0, '3XL': 0, '4XL': 0, '5XL': 0, totalOrder: 30, shippedQuantity: 25, remarks: '비고3', status: '완료' },
        
    ];
    // 상태: 조회된 데이터와 필터 조건
    const [orders, setOrders] = useState(initialData);
    const [startDate, setStartDate] = useState('2024-10-01');
    const [endDate, setEndDate] = useState('2024-10-15');
    const [orderType, setOrderType] = useState('전체');
    // 조회 버튼 클릭 시 데이터를 필터링하는 함수
    const handleSearch = () => {
        const filteredData = initialData.filter(order => {
            const orderDate = new Date(order.orderDate);
            return orderDate >= new Date(startDate) && orderDate <= new Date(endDate) &&
                (orderType === '전체' || order.orderType === orderType);
        });
        setOrders(filteredData);
    };
    // OrderList에 맞는 컬럼 설정
    
    const columns = [
        { dataField: 'orderId', caption: 'NO.', width: 50 },
        { dataField: 'orderDate', caption: '주문일자', dataType: 'date' },
        { dataField: 'itemCode', caption: '품번' },
        { dataField: 'itemName', caption: '품명' },
        { dataField: 'color', caption: '색상' },
        { dataField: 'orderType', caption: '주문구분' },
        { dataField: 'division', caption: '분사처리' },
        { dataField: 'processingDate', caption: '처리일자', dataType: 'date' },
        { dataField: 'XXS', caption: 'XXS' },
        { dataField: 'XS', caption: 'XS' },
        { dataField: 'S', caption: 'S' },
        { dataField: 'M', caption: 'M' },
        { dataField: 'L', caption: 'L' },
        { dataField: 'XL', caption: 'XL' },
        { dataField: 'XXL', caption: 'XXL' },
        { dataField: '3XL', caption: '3XL' },
        { dataField: '4XL', caption: '4XL' },
        { dataField: '5XL', caption: '5XL' },
        { dataField: 'totalOrder', caption: '주문합계' },
        { dataField: 'shippedQuantity', caption: '출고수량' },
        { dataField: 'remarks', caption: '비고' },
    ];
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
                                <label>전체</label>
                                <div className="input-wrapper">
                                    <input type="checkbox" id="unprocessed" />
                                </div>
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
                        <div className="order-list">
                            <GridComponent columns={columns} dataSource={orders} />
                        </div>
                </div>
            </div>
        </div>
    );
}
export default OrderList;