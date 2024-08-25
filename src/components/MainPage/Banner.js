import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-text'>
        <p>오늘의 시장</p>
        <h1>말바우 시장</h1>
      </div>
      <div className='banner-image'>
        <img src="/image/banner.png" alt="말바우 시장 캐릭터" />
      </div>
    </div>
  );
}

export default Banner;
