import React from 'react';

const Login = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>로그인 페이지에 오신 것을 환영합니다</h1>
      <p>계정을 입력하고 로그인하세요.</p>
      {/* 로그인 폼 추가 가능 */}
      <div>
        <label>
          아이디: <input type="text" placeholder="아이디를 입력하세요" />
        </label>
      </div>
      <div style={{ marginTop: '10px' }}>
        <label>
          비밀번호: <input type="password" placeholder="비밀번호를 입력하세요" />
        </label>
      </div>
      <button style={{ marginTop: '20px' }}>로그인</button>
    </div>
  );
}

export default Login;
