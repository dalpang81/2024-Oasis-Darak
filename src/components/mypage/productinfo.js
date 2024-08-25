import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // 리다이렉트를 위한 useNavigate 훅 추가
import './Productinfo.css';

const ProductInfo = () => {
  const [productName, setProductName] = useState('');
  const [origin, setOrigin] = useState('');
  const [productionDate, setProductionDate] = useState('');
  const [groupPurchaseQuantity, setGroupPurchaseQuantity] = useState('');
  const [groupPurchaseStartDate, setGroupPurchaseStartDate] = useState('');
  const [groupPurchaseEndDate, setGroupPurchaseEndDate] = useState('');
  const [price, setPrice] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [discountRate, setDiscountRate] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState(null);
  const [detailImages, setDetailImages] = useState([]);

  const navigate = useNavigate(); // useNavigate 훅을 사용해 리다이렉트 구현

  const handleSubmit = () => {
    // 유효성 검사
    if (!productName || !origin || !productionDate || !groupPurchaseQuantity || !groupPurchaseStartDate || !groupPurchaseEndDate || !price || !description) {
      alert("모든 필수 항목을 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('origin', origin);
    formData.append('productionDate', productionDate);
    formData.append('groupPurchaseQuantity', groupPurchaseQuantity);
    formData.append('groupPurchaseStartDate', groupPurchaseStartDate);
    formData.append('groupPurchaseEndDate', groupPurchaseEndDate);
    formData.append('price', price);
    formData.append('discountedPrice', discountedPrice);
    formData.append('discountRate', discountRate);
    formData.append('description', description);

    images.forEach((image, index) => {
      formData.append(`image${index}`, image);
    });

    detailImages.forEach((image, index) => {
      formData.append(`detailImage${index}`, image);
    });

    fetch('https://api.example.com/product', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        alert("저장이 성공적으로 완료되었습니다.");
        navigate('/mypage'); // 저장 후 mypage로 리다이렉트
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("저장 중 오류가 발생했습니다.");
      });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImages([...images, file]);
    setMainImage(URL.createObjectURL(file));
  };

  const handleDetailImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setDetailImages([...detailImages, ...files]);
  };

  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };

  const triggerDetailFileInput = () => {
    document.getElementById('detailFileInput').click();
  };

  return (
    <div className="product-info-container">
      <h2>상품 정보</h2>

      <div className="form-group image-upload-section">
        <div className="image-upload" onClick={triggerFileInput}>
          {mainImage ? (
            <img src={mainImage} alt="상품 이미지" className="uploaded-image" />
          ) : (
            <img src="/image/camera.png" alt="카메라 아이콘" />
          )}
          <input 
            id="fileInput"
            type="file" 
            onChange={handleImageUpload} 
            style={{ display: 'none' }} 
          />
        </div>
      </div>

      <div className="form-group">
        <label>상품명</label>
        <input 
          type="text" 
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="상품명을 입력하세요" 
        />
      </div>

      <div className="form-group">
        <label>원산지</label>
        <input 
          type="text" 
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          placeholder="원산지를 입력하세요" 
        />
      </div>

      <div className="form-group">
        <label>생산일</label>
        <input 
          type="date" 
          value={productionDate}
          onChange={(e) => setProductionDate(e.target.value)} 
        />
      </div>

      <h2>공동구매 정보</h2>
      <div className="form-group">
        <label>공동구매 기준 인원</label>
        <input 
          type="number" 
          value={groupPurchaseQuantity}
          onChange={(e) => setGroupPurchaseQuantity(e.target.value)} 
        />
      </div>

      <div className="form-group">
        <label>공구 기간</label>
        <input 
          type="date" 
          value={groupPurchaseStartDate}
          onChange={(e) => setGroupPurchaseStartDate(e.target.value)} 
        />
        <span>부터</span>
        <input 
          type="date" 
          value={groupPurchaseEndDate}
          onChange={(e) => setGroupPurchaseEndDate(e.target.value)} 
        />
        <span>까지</span>
      </div>

      <h2>가격 책정</h2>
      <div className="form-group price-calculation">
        <input 
          type="number" 
          value={price}
          onChange={(e) => setPrice(e.target.value)} 
          placeholder="원가 입력" 
        />
        <input 
          type="number" 
          value={discountedPrice}
          onChange={(e) => setDiscountedPrice(e.target.value)} 
          placeholder="할인가 입력" 
        />
        <input 
          type="number" 
          value={discountRate}
          onChange={(e) => setDiscountRate(e.target.value)} 
          placeholder="할인율 입력" 
        />
      </div>

      <h2>상세 정보</h2>
      <div className="form-group">
        <label>상품 설명 이미지 (선택)</label>
        <div className="detail-image-upload" onClick={triggerDetailFileInput}>
          <img src="/image/camera.png" alt="카메라 아이콘" />
          <input 
            id="detailFileInput"
            type="file" 
            multiple
            onChange={handleDetailImageUpload} 
            style={{ display: 'none' }} 
          />
        </div>
        <div className="detail-image-preview">
          {detailImages.map((image, index) => (
            <img key={index} src={URL.createObjectURL(image)} alt={`상세 이미지 ${index + 1}`} />
          ))}
        </div>
        <p>상품 하단의 상세 설명에 사용될 사진입니다.</p>
      </div>

      <div className="form-group">
        <label>상품 상세 설명</label>
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="상품의 상세 설명을 입력하세요" 
        ></textarea>
      </div>

      <button className="submit-button" onClick={handleSubmit}>등록하기</button>
    </div>
  );
}

export default ProductInfo;
