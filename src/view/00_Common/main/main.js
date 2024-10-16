import { Link } from "react-router-dom";

const Main = () => {
    return (
        <>
            공지사항 통계
            <Link to={"/order/registe"}>
                <button>주문등록</button>
            </Link>
            <Link to={"/order/list"}>
                <button>주문현황</button>
            </Link>
        </>
    );
}

export default Main;