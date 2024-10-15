import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const [storeCode, setStoreCode] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!storeCode || !companyCode || !password) {
      alert("모든 필드를 입력해 주세요.");
      return;
    }

    navigate("/main");
  };

  return (
    <>
        <div className="header">
          <h1>Sewon POS</h1>
        </div>
        <div className="wrapper">
          <div className="container">
            <div className="content">
              <div className="announcements">
                <h2>공지사항</h2>
                <ul>
                  <li>
                    <span className="title">
                      IDC 인터넷 접속 회선 작업 안내
                    </span>
                    <span className="date">2023-01-19</span>
                  </li>
                  <li>
                    <span className="title">
                      매장포스 그룹스 브라우징(엣지, 크롬 포스 사용 가능)
                    </span>
                    <span className="date">2023-01-19</span>
                  </li>
                  <li>
                    <span className="title">**AS 사이트 접에 공지**</span>
                    <span className="date">2023-01-19</span>
                  </li>
                  <li>
                    <span className="title">
                      **세원 이로스 연말 단축근무 안내**
                    </span>
                    <span className="date">2023-01-19</span>
                  </li>
                  <li>
                    <span className="title">
                      《공지사항 게시판 폐쇄》《매이어 보리거더 관련 공지》
                    </span>
                    <span className="date">2023-01-19</span>
                  </li>
                  <li>
                    <span className="title">
                      매장 공지사항 실행버일 관련 공지
                    </span>
                    <span className="date">2023-01-19</span>
                  </li>
                  <li>
                    <span className="title">서버 안정화 작업 공지</span>
                    <span className="date">2023-01-19</span>
                  </li>
                </ul>
                <br />
                <h2>어패럴뉴스</h2>
                <ul>
                  <li>
                    <span className="title">
                      IDC 인터넷 접속 회선 작업 안내
                    </span>
                    <span className="date">2023-01-19</span>
                  </li>
                  <li>
                    <span className="title">
                      매장포스 그룹스 브라우징(엣지, 크롬 포스 사용 가능)
                    </span>
                    <span className="date">2023-01-19</span>
                  </li>
                  <li>
                    <span className="title">**AS 사이트 접에 공지**</span>
                    <span className="date">2023-01-19</span>
                  </li>
                  <li>
                    <span className="title">
                      **세원 이로스 연말 단축근무 안내**
                    </span>
                    <span className="date">2023-01-19</span>
                  </li>
                </ul>
              </div>

              <div className="login-form">
                <h2>LOGIN</h2>
                <form onSubmit={handleLogin}>
                  <input
                    id="store-code"
                    type="text"
                    placeholder="매장코드를 입력하세요."
                    value={storeCode}
                    onChange={(e) => setStoreCode(e.target.value)}
                    required
                  />
                  <input
                    id="company-code"
                    type="text"
                    placeholder="업체코드를 입력하세요."
                    value={companyCode}
                    onChange={(e) => setCompanyCode(e.target.value)}
                    required
                  />
                  <input
                    id="password"
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="checkbox">
                    <input type="checkbox" id="remember-code" />
                    <label htmlFor="remember-code">매장코드저장</label>
                  </div>
                  <button type="submit">로그인</button>
                </form>
                <Link to={"/"}>
                  <div className="forgot-password">
                    정상적인 실행이 되지 않으십니까? ↗
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div class="footer">
            <p>SEWONATOS.CO.KR</p>
          </div>
        </div>
    </>
  );
};

export default Login;
