import React from "react";
import "./Goods.css";

const Goods = () => {
  return (
    <div className="container">
      {/* 상품 상단 이미지, 정보 */}
      <div className="product-header">
        <img src="/image/product-image.jpg" className="product-image" alt="" />

        <div className="product-info">
          <span className="badge">오아시스 청과 김덕순</span>
          <h1>스타포도 1박스</h1>
          <p>판매 시장: 광주 말바우시장</p>
          <div className="grayLine"></div>
          <p>원산지: 경상북도 영천군</p>
          <div className="grayLine"></div>
          <p>생산일자: 24년 07월</p>
        </div>
      </div>
      {/* 가격 정보 */}
      <div className="pricing">
        <div className="discount">
          <p>20%</p>
        </div>
        <div className="discount2">
          <p>
            원가: <del>25,000원</del>
          </p>
          <p>
            할인가: <strong>22,000원</strong>
          </p>
          <p>블랙 와인 빛깔의 정통 포도, 청정 지역에서 재배된 고급 포도입니다.</p>
        </div>
      </div>
      {/* 공동 구매 시작하기 */}
      <h2>공동 구매 시작하기</h2>
      <div className="group-buy">
        <div className="product-option">
          <img className="product-img" src="/image/product-image.jpg" alt="" /> <label>스타포도</label>
        </div>

        <div className="purchase-info">
          <div className="purchae-info-check">
            <p>1명 신청</p>
            <p>24. 08. 27 마감</p>
          </div>

          <button>참여하기</button>
        </div>
      </div>
      <div className="product-story">
        <h2>상품 스토리</h2>
        <div>
          <img src="/image/product-image.jpg" alt="" />
        </div>
        <p>
          알알이 탱글탱글하고 당도 높은 포도는 자연 그대로의 달콤함을 자랑합니다. <br />
          한입 베어물면 입안 가득 퍼지는 풍부한 과즙과 은은한 향은 남녀노소 누구에게나 사랑받는 최고의 간식입니다. 샐러드, 디저트, 와인 재료 등 다양한 요리에
          활용 가능한 다용도 과일, 신선하고 건강한 라이프 스타일을 원하신다면 이 포도를 선택하세요! 특별한 날, 소중한 분들에게 선물하기에도 안성맞춤입니다.
        </p>
      </div>
    </div>
  );
};

export default Goods;
