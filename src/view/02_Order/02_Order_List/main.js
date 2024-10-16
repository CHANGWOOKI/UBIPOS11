import "./style.scss";

const OrderList = () => {
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
                        여기 그리드
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderList;