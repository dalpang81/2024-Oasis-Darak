import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';  // Outlet을 import
import './mypage.css';  // CSS 파일을 import

const MyPage = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // API 호출 함수
    const fetchUserName = async () => {
      try {
        const response = await fetch('https://api.example.com/user'); // 실제 API URL로 변경
        const data = await response.json();
        setUserName(data.name); // API에서 사용자 이름을 가져와서 설정
      } catch (error) {
        console.error('Error fetching user name:', error);
      }
    };

    fetchUserName();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1>{userName || "김덕순"}님 환영합니다!</h1>
        <button 
          className="add-product-button" 
          onClick={() => window.location.href = '/mypage/product-register'} // 버튼 클릭 시 이동
        >
          물품 등록하기
        </button>
      </div>
      <div className="menu">
        <div className="menu-item">
          <img src="/image/notics.png" alt="공지" />
          <span>공지</span>
        </div>
        <div className="menu-item">
          <img src="/image/sales.png" alt="판매 현황" />
          <span>판매 현황</span>
        </div>
        <div className="menu-item">
          <img src="/image/orders.png" alt="주문 조회" />
          <span>주문 조회</span>
        </div>
        <div className="menu-item">
          <img src="/image/favorites.png" alt="찜한 상품" />
          <span>찜한 상품</span>
        </div>
      </div>
      <div className="recent-products">
        <h2>내가 본 상품</h2>
        <p>최근 본 상품이 없습니다.</p>
      </div>
      <Outlet /> {/* 중첩된 경로가 여기에 렌더링됨 */}
    </div>
  );
};

export default MyPage;
