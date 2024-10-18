import "./style.scss";
import React, { useState } from 'react';
import GridComponent from "../../../components/grid/gridComponent";


const OrderList = () => {
    const initialData = [
        {
            orderId: 1,
            orderDate: '2024-10-01',
            itemCode: 'A001',
            itemName: '상품1',
            color: 'Red',
            orderType: '일반',
            division: '본사',
            processingDate: '2024-10-02',
            XXS: 1,
            XS: 2,
            S: 3,
            M: 4,
            L: 5,
            XL: 6,
            XXL: 7,
            '3XL': 8,
            '4XL': 9,
            '5XL': 10,
            totalOrder: 55,
            shippedQuantity: 50,
            remarks: '비고1',
            status: '미처리',
        },
        {
            orderId: 2,
            orderDate: '2024-10-02',
            itemCode: 'A002',
            itemName: '상품2',
            color: 'Blue',
            orderType: '일반',
            division: '지사',
            processingDate: '2024-10-03',
            XXS: 0,
            XS: 1,
            S: 2,
            M: 3,
            L: 4,
            XL: 5,
            XXL: 6,
            '3XL': 7,
            '4XL': 8,
            '5XL': 9,
            totalOrder: 45,
            shippedQuantity: 40,
            remarks: '비고2',
            status: '진행 중',
        },
        {
            orderId: 3,
            orderDate: '2024-10-03',
            itemCode: 'A003',
            itemName: '상품3',
            color: 'Green',
            orderType: '특별',
            division: '본사',
            processingDate: '2024-10-04',
            XXS: 2,
            XS: 2,
            S: 3,
            M: 2,
            L: 1,
            XL: 1,
            XXL: 0,
            '3XL': 0,
            '4XL': 0,
            '5XL': 0,
            totalOrder: 30,
            shippedQuantity: 25,
            remarks: '비고3',
            status: '완료',
        },
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
        <>
            <div class="order-management">
                <div class="content-box">
                    <header>
                        <h1 class="main-title"><span class="red-dot"></span>주문현황</h1>
                        <div class="header-buttons">
                            <button class="query-button">조회</button>
                            <button class="new-button">인쇄</button>
                            <button class="delete-button">엑셀</button>
                        </div>
                    </header>
                    <main>
                        <div class="search-bar">
                            <div class="date-range">
                                <label>기간</label>
                                <div class="date-inputs">
                                    <input type="date" value="2024-10-01" />
                                    <span>~</span>
                                    <input type="date" value="2024-10-15" />
                                </div>
                            </div>
                            <div class="radio-group">
                                <label>구분</label>
                                <div class="radio-inputs">
                                    <input type="radio" id="all" name="category" value="all" checked />
                                    <label for="all">전체</label>
                                    <input type="radio" id="unprocessed" name="category" value="unprocessed" />
                                    <label for="unprocessed">미처리</label>
                                    <input type="radio" id="inProgress" name="category" value="inProgress" />
                                    <label for="inProgress">진행중</label>
                                    <input type="radio" id="completed" name="category" value="completed" />
                                    <label for="completed">출고</label>
                                    <input type="radio" id="reported" name="category" value="reported" />
                                    <label for="reported">출고불가</label>
                                </div>
                            </div>
                        </div>
                    </main>
                    <div class="grid">
                        <div className="order-list">
                            <GridComponent columns={columns} dataSource={orders} />
                        </div>



                    </div>
                </div>
            </div>





        </>
    )
}

export default OrderList;