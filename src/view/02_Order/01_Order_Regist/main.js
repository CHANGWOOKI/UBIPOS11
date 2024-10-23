import React, { useState, useEffect } from 'react';
import { Search, PlusCircle, Trash2 } from 'lucide-react';
import './style.scss'; // 기존 스타일 파일 import

const STORAGE_KEYS = {
  ORDER_DATE: 'orderManagement_orderDate',
  ORDER_NUMBER: 'orderManagement_orderNumber',
  STORE_ZONE: 'orderManagement_storeZone',
  STORE_NOTE: 'orderManagement_storeNote',
  INSTANT_REGISTER: 'orderManagement_instantRegister'
};

const OrderRegister = () => {
  const [orderDate, setOrderDate] = useState(() =>
    sessionStorage.getItem(STORAGE_KEYS.ORDER_DATE) || '2024-10-15'
  );
  const [orderNumber, setOrderNumber] = useState(() =>
    sessionStorage.getItem(STORAGE_KEYS.ORDER_NUMBER) || '0001'
  );
  const [storeZone, setStoreZone] = useState(() =>
    sessionStorage.getItem(STORAGE_KEYS.STORE_ZONE) || 'A'
  );
  const [storeNote, setStoreNote] = useState(() =>
    sessionStorage.getItem(STORAGE_KEYS.STORE_NOTE) || ''
  );
  const [instantRegister, setInstantRegister] = useState(() =>
    sessionStorage.getItem(STORAGE_KEYS.INSTANT_REGISTER) === 'true'
  );

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEYS.ORDER_DATE, orderDate);
  }, [orderDate]);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEYS.ORDER_NUMBER, orderNumber);
  }, [orderNumber]);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEYS.STORE_ZONE, storeZone);
  }, [storeZone]);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEYS.STORE_NOTE, storeNote);
  }, [storeNote]);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEYS.INSTANT_REGISTER, instantRegister.toString());
  }, [instantRegister]);

  return (
    <div className="order-management">
      <div className="content-box">
        <header>
          <div className="header-top">
            <h1 className="main-title">
              <span className="blue-dot"></span>
              주문등록
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
          </div>
          <div className="search-bar">
            <div className="search-group">
              <label>주문일자</label>
              <div className="input-wrapper">
                <input
                  type="date"
                  value={orderDate}
                  onChange={(e) => setOrderDate(e.target.value)}
                  className="standard-input"
                />
              </div>
            </div>
            <div className="search-group">
              <label>주문번호</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  className="standard-input"
                />
              </div>
            </div>
            <div className="search-group">
              <label>매장존</label>
              <div className="input-wrapper">
                <select
                  value={storeZone}
                  onChange={(e) => setStoreZone(e.target.value)}
                  className="standard-input"
                >
                  <option value="A">A존</option>
                  <option value="B">B존</option>
                  <option value="C">C존</option>
                </select>
              </div>
            </div>
            <div className="search-group note-input">
              <label>비고</label>
              <div className="input-wrapper" style={{ flex: '1 1 auto' }}>
                <input
                  type="text"
                  value={storeNote}
                  onChange={(e) => setStoreNote(e.target.value)}
                  className="standard-input"
                  style={{ width: '70%' }}
                />
              </div>
            </div>
            <div className="search-group">
              <button
                className={`instant-register-btn ${instantRegister ? 'active' : ''}`}
                onClick={() => setInstantRegister(!instantRegister)}
              >
                바로등록
              </button>
            </div>
          </div>
        </header>
        <main>
          <div className="grid primary">
            {/* 주문 목록 그리드 컴포넌트 */}
          </div>
          <div className="grid secondary">
            {/* 추가 정보 그리드 컴포넌트 */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderRegister;