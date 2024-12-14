import React from "react";
import ScrollableProductRowEN from "../../components/ScrollableProductRow/ScrollableProductRowEN";
import productsEN from "../../data/ProductsEN"; 
import "./Discount.css"; 

const DiscountEN = () => {
  return (
    <div className="discount">
      <div className="app">
        <ScrollableProductRowEN
          products={productsEN} 
          scrollInterval={3000}
          adImageSrc="/icons/calender.png"
        />
      </div>
    </div>
  );
};

export default DiscountEN;
