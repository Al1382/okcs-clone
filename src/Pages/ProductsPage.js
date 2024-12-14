import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
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
  const [modalOpen, setModalOpen] = useState(false); // State for modal
  const [giftCode, setGiftCode] = useState(''); // State for gift code

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleGiftCodeSubmit = () => {
    console.log(`Gift Code Entered: ${giftCode}`); // Handle gift code logic
    setModalOpen(false);
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
      <div className="page-container">
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

            <Button
              variant="outlined"
              onClick={handleModalOpen}
              sx={{
                backgroundColor: "#ffffff",
                color: "#000000",
                border: "1px solid #000000",
                "&:hover": {
                  backgroundColor: "#000000",
                  color: "#ffffff",
                },
                fontFamily: 'Vazirmatn',
                fontSize: "16px",
                borderRadius: "30px",
                padding: "8px 20px",
              }}
            >
              اعمال کد تخفیف
            </Button>

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

      {/* Modal */}
      {modalOpen && (
        <div className="modal-backdrop">
          <div className="custom-modal">
            <button className="close-button" onClick={handleModalClose}>×</button>
            <h2 className="modal-title">وارد کردن کد تخفیف</h2>
            <TextField
              label="کد تخفیف"
              variant="outlined"
              fullWidth
              value={giftCode}
              onChange={(e) => setGiftCode(e.target.value)}
              sx={{
                marginBottom: "20px",
                textAlign: "right",
                "& label": {
                  fontFamily: "Vazirmatn",
                },
                "& input": {
                  fontFamily: "Vazirmatn",
                },
              }}
            />
            <Button
              variant="contained"
              onClick={handleGiftCodeSubmit}
              sx={{
                backgroundColor: "#d32f2f",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#ffffff",
                  color: "#d32f2f",
                },
                fontFamily: 'Vazirmatn',
              }}
            >
              اعمال
            </Button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default ProductsPage;
