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
    <div className="page-container">
      <div className="login-container">
        <div className="notice-section">
          <div className="notice-header">공지사항</div>
          <div className="notice-content">
            <div className="notice-item">
              <span>IDC 인터넷 접속 회선 작업 안내</span>
              <span className="date">2023-01-19</span>
            </div>
            <div className="notice-item">
              <span>매장포스 그룹스 브라우징(엣지, 크롬 포스 사용 가능)</span>
              <span className="date">2023-01-19</span>
            </div>
            <div className="notice-item">
              <span>**AS 사이트 접속 공지**</span>
              <span className="date">2023-01-19</span>
            </div>
            <div className="notice-item">
              <span>**세원 이로스 연말 단축근무 안내**</span>
              <span className="date">2023-01-19</span>
            </div>
            <div className="notice-item">
              <span>《공지사항 게시판 폐쇄》《매이어 보리거더 관련 공지》</span>
              <span className="date">2023-01-19</span>
            </div>
            <div className="notice-item">
              <span>매장 공지사항 실행버일 관련 공지</span>
              <span className="date">2023-01-19</span>
            </div>
            <div className="notice-item">
              <span>서버 안정화 작업 공지</span>
              <span className="date">2023-01-19</span>
            </div>
          </div>

          <div className="notice-header apparel">어패럴뉴스</div>
          <div className="notice-content">
            <div className="notice-item">
              <span>IDC 인터넷 접속 회선 작업 안내</span>
              <span className="date">2023-01-19</span>
            </div>
            <div className="notice-item">
              <span>매장포스 그룹스 브라우징(엣지, 크롬 포스 사용 가능)</span>
              <span className="date">2023-01-19</span>
            </div>
            <div className="notice-item">
              <span>**AS 사이트 접속 공지**</span>
              <span className="date">2023-01-19</span>
            </div>
            <div className="notice-item">
              <span>**세원 이로스 연말 단축근무 안내**</span>
              <span className="date">2023-01-19</span>
            </div>
          </div>
        </div>

        <div className="login-section">
          <h2>LOGIN</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="매장코드"
              value={storeCode}
              onChange={(e) => setStoreCode(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="업체코드"
              value={companyCode}
              onChange={(e) => setCompanyCode(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="checkbox-wrap">
              <input type="checkbox" id="remember-code" />
              <label htmlFor="remember-code">매장코드저장</label>
            </div>
            <button type="submit">로그인</button>
            <Link to="/" className="help-text">
              정상적인 실행이 되지 않으십니까? ↗
            </Link>
          </form>
        </div>
      </div>
      <div className="footer">
        <p>SEWONATOS.CO.KR</p>
      </div>
    </div>
  );
};

export default Login;