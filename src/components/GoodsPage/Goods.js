import React, {useEffect, useState} from "react";
import "./Goods.css";
import axios from "axios";

const Goods = () => {
  const [itemData, setItemData] = useState({
  item_name: "",
  store_name: "",
  item_price: 0,
  item_image: "",
  item_registration_date: "",
  item_production: "",
  item_production_date: ""
});

  const [product, setProduct] = useState({
    storeName: "",
    itemName: "",
    joinPrice: 0,
    joinLimit: 0,
    joinPersonCount: 0,
    joinPercent: "",
    joinStartDay: "",
    joinEndDay: ""
  });

  const itemName = "김치";

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/item/call/${itemName}`, {
          withCredentials: true,
        });

        const data = response.data;
        setItemData(data);
      } catch (error) {
        console.error('Error fetching item data:', error);
      }
    };

    fetchItemData();
  }, []);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.post('http://localhost:8080/join/call/info', {
          itemName: '김치',
          storeName: '김치도사 윤경일'
        }, {
          withCredentials: true,
        });

        const data = response.data; // 응답이 배열로 온다면 첫 번째 객체를 사용
        console.log(data)
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData();
  }, []);
  const handleBuyItem = async () => {
    try {
      const response = await axios.patch('http://localhost:8080/join/buy',
          {
            itemName: "김치",
            storeName: "김치도사 윤경일"
          },
          {
            withCredentials: true, // 필요 시 쿠키 포함
          }
      );

      // 응답 데이터 처리
      console.log('Response:', response.data);
      const data = response.data;
      setProduct(data)

    } catch (error) {
      console.error('Error buying item:', error);
    }
  };
  return (
    <div className="container">
      {/* 상품 상단 이미지, 정보 */}
      <div className="product-header">
        <img src="/image/product-image.jpg" className="product-image" alt="" />

        <div className="product-info">
          <span className="badge">{itemData.store_name}</span>
          <h1>{itemData.item_name} 한박스</h1>
          <p>판매 시장: 광주 말바우시장</p>
          <div className="grayLine"></div>
          <p>원산지: {itemData.item_production} </p>
          <div className="grayLine"></div>
          <p>생산일자: {itemData.item_production_date}</p>
        </div>
      </div>
      {/* 가격 정보 */}
      <div className="pricing">
        <div className="discount">
          <p>{product.joinPercent}%</p>
        </div>
        <div className="discount2">
          <p>
            원가: <del>{itemData.item_price}</del>
          </p>
          <p>
            할인가: <strong>{product.joinPrice}</strong>
          </p>
          <p>블랙 와인 빛깔의 정통 포도, 청정 지역에서 재배된 고급 포도입니다.</p>
        </div>
      </div>
      {/* 공동 구매 시작하기 */}
      <h2>공동 구매 시작하기</h2>
      <div className="group-buy">
        <div className="product-option">
          <img className="product-img" src="/image/product-image.jpg" alt="" /> <label>{itemData.item_name}</label>
        </div>

        <div className="purchase-info">
          <div className="purchae-info-check">
            <p>{product.joinPersonCount}명 신청</p>
            <p>{product.joinEndDay}마감</p>
          </div>

          <button onClick={handleBuyItem}>참여하기</button>
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
