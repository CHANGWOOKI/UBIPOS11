import './login.scss';

const Login = () => {

    // 로그인 버튼 클릭 핸들러
    const handleLogin = (e) => {
        e.preventDefault(); // 폼 제출 기본 동작 방지

        // 입력 필드 값 가져오기
        const storeCode = document.getElementById('store-code').value;
        const companyCode = document.getElementById('company-code').value;
        const password = document.getElementById('password').value;

        // 유효성 검사
        if (!storeCode || !companyCode || !password) {
            alert("모든 필드를 입력해 주세요.");
            return;
        }

        // 로그인 성공 시 /main 페이지로 이동
        window.location.href = "/main";
    };

    return (
        <>
            <div className="wrapper">
                <h1>Sewon POS</h1>
                <div className="container">
                    <div className="content">
                        <div className="announcements">
                            <h2>공지사항</h2>
                            <ul>
                                <li>
                                    <span className="title">IDC 인터넷 접속 회선 작업 안내</span>
                                    <span className="date">2023-01-19</span>
                                </li>
                                <li>
                                    <span className="title">매장포스 그룹스 브라우징(엣지, 크롬 포스 사용 가능)</span>
                                    <span className="date">2023-01-19</span>
                                </li>
                                <li>
                                    <span className="title">**AS 사이트 접에 공지**</span>
                                    <span className="date">2023-01-19</span>
                                </li>
                                <li>
                                    <span className="title">**세원 이로스 연말 단축근무 안내**</span>
                                    <span className="date">2023-01-19</span>
                                </li>
                                <li>
                                    <span className="title">《공지사항 게시판 폐쇄》《매이어 보리거더 관련 공지》</span>
                                    <span className="date">2023-01-19</span>
                                </li>
                                <li>
                                    <span className="title">매장 공지사항 실행버일 관련 공지</span>
                                    <span className="date">2023-01-19</span>
                                </li>
                                <li>
                                    <span className="title">서버 안정화 작업 공지</span>
                                    <span className="date">2023-01-19</span>
                                </li>
                            </ul><br />
                            <h2>어패럴뉴스</h2>
                            <ul>
                                <li>
                                    <span className="title">IDC 인터넷 접속 회선 작업 안내</span>
                                    <span className="date">2023-01-19</span>
                                </li>
                                <li>
                                    <span className="title">매장포스 그룹스 브라우징(엣지, 크롬 포스 사용 가능)</span>
                                    <span className="date">2023-01-19</span>
                                </li>
                                <li>
                                    <span className="title">**AS 사이트 접에 공지**</span>
                                    <span className="date">2023-01-19</span>
                                </li>
                                <li>
                                    <span className="title">**세원 이로스 연말 단축근무 안내**</span>
                                    <span className="date">2023-01-19</span>
                                </li>
                            </ul>
                        </div>

                        <div className="login-form">
                            <h2>LOGIN</h2>
                            <form onSubmit={handleLogin}>
                                <input id="store-code" type="text" placeholder="매장코드" required />
                                <input id="company-code" type="text" placeholder="업체코드" required />
                                <input id="password" type="password" placeholder="비밀번호" required />
                                <div className="checkbox">
                                    <input type="checkbox" id="remember-code" />
                                    <label htmlFor="remember-code">매장코드저장</label>
                                </div>
                                <button type="submit">로그인</button>
                            </form>
                            <a href="#" className="forgot-password">정상적인 실행이 되지 않으십니까? ↗</a>
                        </div>
                    </div>
                </div>
                <footer>
                    <p>WWW.SEWONATOS.CO.KR</p>
                </footer>
            </div>
        </>
    );
}

export default Login;
