import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import products from '../data/Products';
import './ProductsPage.css';

function convertToPersianNumber(number) {
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return number.replace(/[0-9]/g, (digit) => persianNumbers[digit]);
}

function ProductsPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  const [value, setValue] = useState(0); // State for tabs

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="page-container"> {/* New wrapper for centering */}
        <div className="product-container">
          <div className="product-details">
            <div className="discount-box">{convertToPersianNumber(product.discount)}% تخفیف</div>
            <h1 className="product-title">{product.name}</h1>
            <p className="product-category">دسته بندی : {product.category}</p>
            <p className="product-brand">برند : {product.brand}</p>
            
            <div className="product-line"></div>
            
            <p className="product-price original-price">قیمت بدون تخفیف: {convertToPersianNumber(product.price)} تومان</p>
            <p className="product-price discount-price">قیمت با تخفیف: {convertToPersianNumber(product.discountprice)} تومان</p>
            
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#d32f2f",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#ffffff",
                  color: "#d32f2f",
                },
                fontFamily: 'Vazirmatn',
                fontSize: "18px",
                borderRadius: "30px", 
                padding: "8px 20px",  
                margin: "15px", 
              }}
            >
              خرید کن
            </Button>

            {/* Tabs for Description */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="product details tabs">
                <Tab
                  label="توضیحات"
                  {...a11yProps(0)}
                  sx={{
                    fontFamily: 'Vazirmatn',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: 'black',
                    "&.Mui-selected": {
                      color: "#d32f2f", 
                    },
                    padding: '10px 20px', 
                  }}
                />
              </Tabs>
            </Box>
            
            {/* Tab Panel for Description */}
            <div
              role="tabpanel"
              hidden={value !== 0}
              id={`simple-tabpanel-0`}
              aria-labelledby={`simple-tab-0`}
            >
              {value === 0 && (
                <div className="product-description">
                  <p>{product.description}</p>
                </div>
              )}
            </div>

          </div>
          
          <div className="product-image-container">
            <img className="product-image" src={product.image} alt={product.name} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductsPage;
