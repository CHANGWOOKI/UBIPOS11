import "./style.scss";

const OrderRegiste = () => {
    return (
        <>
            <div class="order-management">
                <div class="content-box">
                    <header>
                    <h1 class="main-title"><span class="red-dot"></span>주문등록</h1>
                        <div class="header-buttons">
                            <button class="query-button">조회</button>
                            <button class="new-button">신규</button>
                            <button class="delete-button">삭제</button>
                        </div>
                    </header>
                    <main>
                        <div class="search-bar">
                            <div class="date-range">
                                <label>주문일자</label>
                                <div class="date-inputs">
                                    <input type="date" value="2024-10-15" />
                                    <label>주문번호</label>
                                    <input type="text" value="0001" />
                                    <button class="search-button">검색</button>
                                </div>
                            </div>
                            <div class="search-options">
                                <label>매장존</label>
                                <select>
                                    <option>A</option>
                                    <option>B</option>
                                </select>
                                <div class="checkbox-group">
                                    <input type="checkbox" id="batch-toggle" />
                                    <label for="batch-toggle">바로등록</label>
                                </div>
                            </div>
                        </div>
                    </main>
                    <div class="grid">
                        <agGrid />
                    </div>
                    <div class="grid2">

                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderRegiste;