// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';  // 리다이렉트를 위한 useNavigate 훅 추가
// import './Productinfo.css';
// import axios from "axios";
//
// const ProductInfo = () => {
//   const [productName, setProductName] = useState('');
//   const [origin, setOrigin] = useState('');
//   const [productionDate, setProductionDate] = useState('');
//   const [groupPurchaseQuantity, setGroupPurchaseQuantity] = useState('');
//   const [groupPurchaseStartDate, setGroupPurchaseStartDate] = useState('');
//   const [groupPurchaseEndDate, setGroupPurchaseEndDate] = useState('');
//   const [price, setPrice] = useState('');
//   const [discountedPrice, setDiscountedPrice] = useState('');
//   const [discountRate, setDiscountRate] = useState('');
//   const [description, setDescription] = useState('');
//   const [images, setImages] = useState([]);
//   const [mainImage, setMainImage] = useState(null);
//   const [detailImages, setDetailImages] = useState([]);
//
//   const navigate = useNavigate(); // useNavigate 훅을 사용해 리다이렉트 구현
//
//
//     // 유효성 검사
//     const itemData ={
//         item_category: "",
//         item_name: "",
//         store_name: "",
//         item_price: 0,
//         item_image: "",
//         item_production: "",
//         item_production_date: ""
//     };
//
//     const product = {
//         store_name: "",
//         item_name: "",
//         join_price: 0,
//         join_limit: 0,
//         join_percent: "",
//         join_start_day: "",
//         join_end_day: ""
//     };
//
//     const handleSaveItem = async () => {
//       try {
//         if (!productName || !origin || !productionDate || !groupPurchaseQuantity || !groupPurchaseStartDate || !groupPurchaseEndDate || !price || !description) {
//           alert("모든 필수 항목을 입력해주세요.");
//           return;
//         }
//
//         const response = await axios.post('http://localhost:8080/item/save',
//             {
//               item: {
//                 itemData
//               },
//               join: {
//                 product
//               }
//             },
//             {
//               withCredentials: true, // 필요 시 쿠키 포함
//             }
//         );
//
//         // 응답 데이터 처리
//
//         console.log('Response:', response.data);
//
//       } catch (error) {
//         console.error('Error saving item:', error);
//       }
//     };
//
//
//
//     const handleImageUpload = (event) => {
//       const file = event.target.files[0];
//       setImages([...images, file]);
//       setMainImage(URL.createObjectURL(file));
//     };
//
//     const handleDetailImageUpload = (event) => {
//       const files = Array.from(event.target.files);
//       setDetailImages([...detailImages, ...files]);
//     };
//
//     const triggerFileInput = () => {
//       document.getElementById('fileInput').click();
//     };
//
//     const triggerDetailFileInput = () => {
//       document.getElementById('detailFileInput').click();
//     };
//
//     return (
//         <div className="product-info-container">
//           <h2>상품 정보</h2>
//
//           <div className="form-group image-upload-section">
//             <div className="image-upload" onClick={triggerFileInput}>
//               {mainImage ? (
//                   <img src={mainImage} alt="상품 이미지" className="uploaded-image"/>
//               ) : (
//                   <img src="/image/camera.png" alt="카메라 아이콘"/>
//               )}
//               <input
//                   id="fileInput"
//                   type="file"
//                   onChange={handleImageUpload}
//                   style={{display: 'none'}}
//               />
//             </div>
//           </div>
//
//           <div className="form-group">
//             <label>상품명</label>
//             <input
//                 type="text"
//                 value={itemData.item_name }
//                 onChange={(e) =>  e.target.value}
//                 placeholder="상품명을 입력하세요"
//             />
//           </div>
//
//           <div className="form-group">
//             <label>원산지</label>
//             <input
//                 type="text"
//                 value={itemData.item_production }
//                 onChange={(e) => ( e.target.value)}
//                 placeholder="원산지를 입력하세요"
//             />
//           </div>
//
//           <div className="form-group">
//             <label>생산일</label>
//             <input
//                 type="date"
//                 value={itemData.item_production_date}
//                 onChange={(e) => (  e.target.value)}
//             />
//           </div>
//
//           <h2>공동구매 정보</h2>
//           <div className="form-group">
//             <label>공동구매 기준 인원</label>
//             <input
//                 type="number"
//                 value={product.join_limit}
//                 onChange={(e) => (  e.target.value)}
//             />
//           </div>
//
//           <div className="form-group">
//             <label>공구 기간</label>
//             <input
//                 type="date"
//                 value={product.join_start_day}
//                 onChange={(e) => (e.target.value)}
//             />
//             <span>부터</span>
//             <input
//                 type="date"
//                 value={product.join_end_day}
//                 onChange={(e) => ( e.target.value)}
//             />
//             <span>까지</span>
//           </div>
//
//           <h2>가격 책정</h2>
//           <div className="form-group price-calculation">
//             <input
//                 type="number"
//                 value={itemData.item_price }
//                 onChange={(e) => ( e.target.value)}
//                 placeholder="원가 입력"
//             />
//             <input
//                 type="number"
//                 value={product.join_price }
//                 onChange={(e) => ( e.target.value)}
//                 placeholder="할인가 입력"
//             />
//             <input
//                 type="number"
//                 value={product.join_percent}
//                 onChange={(e) => ( e.target.value)}
//                 placeholder="할인율 입력"
//             />
//           </div>
//
//           <h2>상세 정보</h2>
//           <div className="form-group">
//             <label>상품 설명 이미지 (선택)</label>
//             <div className="detail-image-upload" onClick={triggerDetailFileInput}>
//               <img src="/image/camera.png" alt="카메라 아이콘"/>
//               <input
//                   id="detailFileInput"
//                   type="file"
//                   multiple
//                   onChange={handleDetailImageUpload}
//                   style={{display: 'none'}}
//               />
//             </div>
//             <div className="detail-image-preview">
//               {detailImages.map((image, index) => (
//                   <img key={index} src={URL.createObjectURL(image)} alt={`상세 이미지 ${index + 1}`}/>
//               ))}
//             </div>
//             <p>상품 하단의 상세 설명에 사용될 사진입니다.</p>
//           </div>
//
//           <div className="form-group">
//             <label>상품 상세 설명</label>
//             <textarea
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 placeholder="상품의 상세 설명을 입력하세요"
//             ></textarea>
//           </div>
//
//           <button className="submit-button" onClick={handleSaveItem}>등록하기</button>
//         </div>
//     );
//
//
//
// };
// export default ProductInfo;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // 리다이렉트를 위한 useNavigate 훅 추가
import './Productinfo.css';
import axios from "axios";

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


        const handleSaveItem = async () => {
            try {
                const response = await axios.post('http://localhost:8080/item/save',
                    {
                        item: {
                            item_category: "과일",
                            item_name: productName,
                            store_name: "오아이스 청과",
                            item_price: price,
                            item_image: "/save22",
                            item_production: origin,
                            item_production_date: productionDate
                        },
                        join: {
                            item_name: productName,
                            store_name: "오아이스 청과",
                            join_price: discountedPrice,
                            join_limit: 20,
                            join_percent: discountRate,
                            join_start_day: groupPurchaseStartDate,
                            join_end_day: groupPurchaseEndDate
                        }
                    },
                    {
                        withCredentials: true, // 필요 시 쿠키 포함
                    }
                );

                // 응답 데이터 처리

                console.log('Response:', response.data);

            } catch (error) {
                console.error('Error saving item:', error);
            }
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
                            <img src={mainImage} alt="상품 이미지" className="uploaded-image"/>
                        ) : (
                            <img src="/image/camera.png" alt="카메라 아이콘"/>
                        )}
                        <input
                            id="fileInput"
                            type="file"
                            onChange={handleImageUpload}
                            style={{display: 'none'}}
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
                        <img src="/image/camera.png" alt="카메라 아이콘"/>
                        <input
                            id="detailFileInput"
                            type="file"
                            multiple
                            onChange={handleDetailImageUpload}
                            style={{display: 'none'}}
                        />
                    </div>
                    <div className="detail-image-preview">
                        {detailImages.map((image, index) => (
                            <img key={index} src={URL.createObjectURL(image)} alt={`상세 이미지 ${index + 1}`}/>
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
}

export default ProductInfo;
