import React from "react";
import { Link } from "react-router-dom"; 
import "./ProductAd.css";

const ProductAd = ({
  id,  
  imgSrc,
  productName,
  originalPrice,
  discountedPrice,
  discountPercentage,
}) => {
  const convertToPersianNumbers = (number) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.replace(/[0-9]/g, (digit) => persianDigits[digit]);
  };

  return (
    <Link to={`/ProductsPage/${id}`} style={{ textDecoration: 'none' }}>
      <div className="product-ad">
        <img src={imgSrc} alt={productName} className="product-image" />
        <div className="product-info">
          <h2>{productName}</h2>
          <div className="price-section">
            <span className="original-price">
              {convertToPersianNumbers(originalPrice)} تومان
            </span>
            <span className="discounted-price">
              {convertToPersianNumbers(discountedPrice)} تومان
            </span>
          </div>
          <div className="discount-badge">
            {convertToPersianNumbers(discountPercentage)}% تخفیف
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductAd;
