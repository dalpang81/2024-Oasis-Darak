import React, { useEffect, useState } from "react";
import "./Group.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

function ItemFetcher() {
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

  return (
      <div className="group">
        <div className="group-header">
          <h3>진행중인 공동 마켓</h3>
        </div>
        <div className="group-content">
          <div className="group-image">
            <img src={itemData.item_image ? itemData.item_image : "https://via.placeholder.com/150"} alt={itemData.item_name || "Placeholder Image"} />
          </div>
          <div className="group-info">
            <div className="group-text">
              <h2>{product.storeName || "오아시스 청과"}</h2>
              <h1>{product.itemName || "스타포도 1박스 공동구매"}</h1>
            </div>
            <div className="group-details">
              <p>할인 가격: {product.joinPrice || "N/A"}원</p>
              <p>원래 가격: {itemData.item_price || "N/A"}원</p>
              <p>목표: {product.joinLimit || "N/A"}명</p>
              <p>참여 인원: {product.joinPersonCount }명</p>
              <p>할인율: {product.joinPercent || "N/A"}%</p>
              <p>공동구매 시작일: {product.joinStartDay || "N/A"}</p>
              <p>공동구매 종료일: {product.joinEndDay || "N/A"}</p>
            </div>
          </div>
        </div>
        <div className="group-timer">
          <button type="button">
            <Link to="/goodspage" style={{ color: 'white', textDecoration: 'none' }}>구매하기</Link>
          </button>
        </div>
      </div>
  );
}

export default ItemFetcher;
