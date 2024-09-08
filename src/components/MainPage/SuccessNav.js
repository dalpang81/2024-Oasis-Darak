import React, {useEffect, useState} from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import axios from "axios";


const Nav = () => {
        const [LoginInfo, setLoginInfo] = useState({
            email:"",
            password:"",
            nickname: "",
            age:"",
            city:""

        });
        useEffect(() => {
            const fetchLoginInfo = async () => {
                try {
                    // 토큰이 로컬 스토리지나 상태 관리에서 제공된다고 가정
                    const token = localStorage.getItem('Bearer');

                    // 토큰이 없는 경우 처리 (예: 로그인 페이지로 리다이렉션)
                    if (!token) {
                        console.error('No access token available');
                        // 리다이렉션 로직이 필요하다면 추가
                        return;
                    }

                    const response = await axios.get(`http://localhost:8080/login/info`, {
                        withCredentials: true, // CORS에서 인증을 처리하기 위한 옵션
                        headers: {
                            Authorization: `Bearer ${token}`, // OAuth2 인증 토큰 추가
                        },
                    });

                    const data = response.data;
                    setLoginInfo(data);
                } catch (error) {
                    console.error('Error fetching login info:', error);

                    // 토큰 만료 등 인증 관련 오류 처리
                    if (error.response && error.response.status === 401) {
                        console.log('Unauthorized, redirecting to login...');
                        // 로그인 페이지로 리다이렉션 로직 추가
                    }
                }
            };


            fetchLoginInfo();
        }, []);

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
                    <Link to="/login">{LoginInfo.nickname}님</Link>
                    <Link to="/logout">로그아웃</Link>
                </div>
            </div>
            <div className='nav-menu'>
                <Link to="/">홈</Link>
                <a href='#market'>다락시장</a>
                <a href='#community'>공동마켓</a>
                <a href='#story'>생산 스토리</a>
                <Link to="/mypage">마이페이지</Link>
            </div>
        </nav>
    );
}

export default Nav;
