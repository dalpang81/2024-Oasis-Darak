import React, { useEffect, useState } from "react";
import "./Group.css";
import { Link } from 'react-router-dom';

const Group = () => {
  const [product, setProduct] = useState({
    name: "",
    discountPrice: "",
    originalPrice: "",
    goal: "",
    imageUrl: "",
  });

  useEffect(() => {
    // API 호출로 제품 데이터를 가져오는 함수
    const fetchProductData = async () => {
      try {
        const response = await fetch("https://api.example.com/product"); // 여기에 실제 API URL을 넣으세요
        const data = await response.json();
        setProduct({
          name: data.name,
          storeName: data.storeName,
          discountPrice: data.discountPrice,
          originalPrice: data.originalPrice,
          goal: data.goal,
          imageUrl: data.imageUrl,
        });
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, []);

  return (
    <div className="group">
      <div className="group-header">
        <h3>진행중인 공동 마켓</h3>
      </div>
      <div className="group-content">
        <div className="group-image">
          <img src={product.imageUrl ? product.imageUrl : "https://via.placeholder.com/150"} alt={product.name || "Placeholder Image"} />
        </div>
        <div className="group-info">
          <div className="group-text">
            <h2>{product.storeName || "오아시스 청과"}</h2>

            <h1>{product.storeName || "스타포도 1박스 공동구매"}</h1>
            {/* <h1>{product.name}</h1> */}
          </div>
          <div className="group-details">
            <p>할인 가격: {product.discountPrice || "N/A"}원</p>
            <p>원래 가격: {product.originalPrice || "N/A"}원</p>
            <p>목표: {product.goal || "N/A"}명</p>
          </div>
        </div>
      </div>
      <div className="group-timer">
        <button type="button">
          <Link to="/goodspage">구매하기</Link>
          </button>
      </div>
    </div>
  );
};

export default Group;

// import React, { useEffect, useState } from 'react';
// import './Group.css';

// const Group = () => {
//   const [productIndex, setProductIndex] = useState(0); // 현재 슬라이드 인덱스를 저장
//   const [products, setProducts] = useState([]); // 여러 제품 데이터를 저장할 배열
//   const [error, setError] = useState(null); // API 호출 실패 여부를 저장
//   const currentProduct = products[productIndex]; // 현재 표시할 제품

//   useEffect(() => {
//     // API 호출로 제품 데이터를 가져오는 함수
//     const fetchProductData = async () => {
//       try {
//         const response = await fetch('https://api.example.com/products'); // 여기에 실제 API URL을 넣으세요
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const data = await response.json();
//         setProducts(data); // API로부터 받은 제품 배열을 상태에 저장
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//         setError('제품 정보를 가져오는 데 실패했습니다.'); // 오류 메시지 설정
//       }
//     };

//     fetchProductData();
//   }, []);

//   const handleNext = () => {
//     setProductIndex((prevIndex) => (prevIndex + 1) % products.length); // 다음 슬라이드로 이동
//   };

//   const handlePrev = () => {
//     setProductIndex((prevIndex) =>
//       prevIndex === 0 ? products.length - 1 : prevIndex - 1
//     ); // 이전 슬라이드로 이동
//   };

//   if (error) {
//     return <div className="group-error">{error}</div>; // 오류 메시지를 표시
//   }

//   if (products.length === 0) {
//     return <div className="group-error">표시할 제품이 없습니다.</div>; // 데이터가 없을 때 표시
//   }

//   return (
//     <div className='group'>
//       <div className='group-header'>
//         <h3>진행중인 공동 마켓</h3>
//       </div>
//       <div className='group-content'>
//         <button className='swipe-button' onClick={handlePrev}>〈</button>
//         <div className='group-image'>
//           <img
//             src={
//               currentProduct.imageUrl
//                 ? currentProduct.imageUrl
//                 : 'https://via.placeholder.com/250'
//             }
//             alt={currentProduct.name || 'Placeholder Image'}
//           />
//         </div>
//         <div className='group-info'>
//           <div className='group-text'>
//             <h2>{currentProduct.storeName || '오아시스 청과'}</h2>
//             <h1>{currentProduct.name || '스타포도 1박스 공동구매'}</h1>
//           </div>
//           <div className='group-details'>
//             <p>할인 가격: {currentProduct.discountPrice || 'N/A'}원</p>
//             <p>원래 가격: {currentProduct.originalPrice || 'N/A'}원</p>
//             <p>목표: {currentProduct.goal || 'N/A'}명</p>
//           </div>
//         </div>
//         <button className='swipe-button' onClick={handleNext}>〉</button>
//       </div>
//       <div className='group-timer'>
//         <button type='button'>24:00:00</button>
//       </div>
//     </div>
//   );
// };

// export default Group;
