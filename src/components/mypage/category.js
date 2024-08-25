import React, { useState } from 'react';
import './category.css'; // CSS 파일 import

const categories = [
  { name: '의류', icon: '/image/clothes.png' },
  { name: '채소', icon: '/image/vegetable.png' },
  { name: '과일', icon: '/image/fruit.png' },
  { name: '수산물', icon: '/image/fish.png' },
  { name: '음식', icon: '/image/food.png' },
  { name: '생활용품', icon: '/image/living.png' },
  { name: '문구', icon: '/image/stationery.png' },
  { name: '침구류', icon: '/image/bed.png' },
  { name: '기타', icon: '/image/other.png' },
];

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  return (
    <div className="category-container">
      <h2>카테고리별 상품 등록</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className={`category-item ${selectedCategory === index ? 'selected' : ''}`}
            onClick={() => handleCategoryClick(index)}
          >
            <img src={category.icon} alt={category.name} />
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
