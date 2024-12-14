import React, { useRef, useEffect } from "react";
import "./ScrollableProductRow.css";
import ProductAd from "../ProductAdWidget/ProductAd";
import { useNavigate } from "react-router-dom";

const ScrollableProductRow = ({ products, scrollInterval, adImageSrc }) => {
  const rowRef = useRef(null);
  const navigate = useNavigate();  

  // Automatically scrolls every interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (rowRef.current) { 
        const row = rowRef.current;
        if (row.scrollLeft + row.clientWidth >= row.scrollWidth) {
          row.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          row.scrollBy({ left: 200, behavior: "smooth" });
        }
      }
    }, scrollInterval);

    return () => clearInterval(interval);
  }, [scrollInterval]);

  // Scroll left handler
  const scrollLeft = () => {
    if (rowRef.current) {
      const row = rowRef.current;
      if (row.scrollLeft === 0) {
        row.scrollTo({ left: row.scrollWidth, behavior: "smooth" });
      } else {
        row.scrollBy({ left: -200, behavior: "smooth" });
      }
    }
  };

  // Scroll right handler
  const scrollRight = () => {
    if (rowRef.current) {
      const row = rowRef.current;
      if (row.scrollLeft + row.clientWidth >= row.scrollWidth) {
        row.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        row.scrollBy({ left: 200, behavior: "smooth" });
      }
    }
  };

  // Handle click on a product card to navigate to its product page
  const handleCardClick = (productId) => {
    navigate(`/fa/ProductsPage/${productId}`);
  };

  return (
    <div className="scrollable-product-row">
      <button onClick={scrollLeft} className="scroll-button"></button>
      <div className="product-row" ref={rowRef}>
        {products.map((product) => (
          <div key={product.id} onClick={() => handleCardClick(product.id)}>
            <ProductAd
              id={product.id} 
              imgSrc={product.image}
              productName={product.name}
              originalPrice={product.price}
              discountedPrice={product.discountprice}
              discountPercentage={product.discount}
            />
          </div>
        ))}
      </div>
      <button onClick={scrollRight} className="scroll-button right"></button>
      <div className="ad-image-container">
        <img src={adImageSrc} alt="Calendar" />
      </div>
    </div>
  );
};

export default ScrollableProductRow;
