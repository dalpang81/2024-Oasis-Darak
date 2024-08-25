import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav-container'>
        <div className='nav-logo'>
          <img src="/image/darak.png" alt='logo'
            onClick={() => (window.location.href = "/")}
          />
        </div>
        <div className='nav-search'>
          <input type='text' placeholder='Search' />
          <button type='button'>
            <span role='img' aria-label='search'>🔍</span>
          </button>
        </div>
        <div className='nav-links'>
          <Link to="/login">로그인</Link>
          <Link to="/register">회원가입</Link>
        </div>
      </div>
      <div className='nav-menu'>
        <a href='#home'>홈</a>
        <a href='#market'>다락시장</a>
        <a href='#community'>공동마켓</a>
        <a href='#story'>생산 스토리</a>
        <a href='#drinks'>마이페이지</a>
      </div>
    </nav>
  );
}

export default Nav;
