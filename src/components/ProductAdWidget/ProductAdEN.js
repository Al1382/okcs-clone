import React from "react";
import { Link } from "react-router-dom";
import "./ProductAd.css";

const ProductAdEN = ({
  id,
  imgSrc,
  productName,
  originalPrice,
  discountedPrice,
  discountPercentage,
}) => {
  return (
    <Link to={`/en/ProductsPage/${id}`} style={{ textDecoration: "none" }}>
      <div className="product-ad">
        <img src={imgSrc} alt={productName} className="product-image" />
        <div className="product-info">
          <h2>{productName}</h2>
          <div className="price-section">
            <span className="original-price">
              {originalPrice} Toman
            </span>
            <span className="discounted-price">
              {discountedPrice} Toman
            </span>
          </div>
          <div className="discount-badge">
            {discountPercentage}% Off
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductAdEN;
