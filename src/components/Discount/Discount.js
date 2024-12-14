import React from "react";
import ScrollableProductRow from "../../components/ScrollableProductRow/ScrollableProductRow";
import products from "../../data/Products"; 
import "./Discount.css"; 

const Discount = () => {
  return (
    <div className="discount">
      <div className="app">
        <ScrollableProductRow
          products={products} 
          scrollInterval={3000}
          adImageSrc="icons/calender.png"
        />
      </div>
    </div>
  );
};

export default Discount;
