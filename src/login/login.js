// Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from 'lucide-react';
import "./login.scss";

const Login = () => {
  const [storeCode, setStoreCode] = useState("");
  const [companycode, setcompanycode] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!storeCode || !password) {
      alert("모든 필드를 입력해 주세요.");
      return;
    }
    navigate("/main");
  };

  return (
    <div className="page-container">
      <div className="content-wrapper">
      <div className="header-container">
        <h1 className="main-title">Sewon POS</h1>
          <span 
            className="website" 
            onClick={() => window.open('https://www.sewonatos.co.kr/', '_blank', 'noopener noreferrer')}
          >
            WWW.SEWONATOS.CO.KR
          </span>
        </div>
        <div className="main-content-login">
          <div className="notice-section">
            <div className="notice-type">공지사항</div>
            <div className="notice-list">
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
                <span>《공지사항 게시판 폐쇄》《매이어 보리거더 관련 공지》</span>
                <span className="date">2023-01-19</span>
              </div>                                
            </div>

            <div className="notice-type">어패럴뉴스</div>
            <div className="notice-list">
              <div className="notice-item">
                <span>'백년코드 2025s/s', 오는 18일 코엑스서 개최</span>
              </div>
              <div className="notice-item">
                <span>이랜드 비즈니스 24 WINTER 컬렉션 공개</span>
              </div>
              <div className="notice-item">
                <span>IDC 인터넷 접속 회선 작업 안내</span>
              </div>
              <div className="notice-item">
                <span>IDC 인터넷 접속 회선 작업 안내</span>
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
                value={companycode}
                onChange={(e) => setcompanycode(e.target.value)}
                required
              />
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
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
      </div>
      
      <footer className="footer">
        <div className="company-info">
          <div className="info-row">
            <span>(주)세원아토스</span>
            <span>서울특별시 구로구 디지털로33길 12, 1106 (구로동,우림이비즈센터 2차)</span>
            <span>Tel 02-890-5200</span>
            <span>Fax 02-890-5220</span>
          </div>
          <div className="copyright">
            Copyright (c) 2015 세원아토스 All right reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;