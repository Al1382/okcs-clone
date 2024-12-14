import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ProductAd from '../components/ProductAdWidget/ProductAd'; 
import products from "../data/Products"; 

const ProductsListPage = () => {
  if (!products || products.length === 0) {
    return (
      <Box sx={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontFamily: "Vazirmatn", color: "#888" }}>
          هیچ محصولی برای نمایش وجود ندارد
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
        minHeight: "100vh", 
        paddingTop: "80px", 
        paddingBottom: "80px", 
        paddingX: "20px", 
      }}
    >
      {/* Container Box for product grid */}
      <Box sx={{ width: "100%", maxWidth: "1200px", padding: "0 20px" }}>
        <Typography
          variant="h4"
          sx={{
            marginBottom: "20px",
            fontFamily: "Vazirmatn",
            textAlign: "center", 
            color: "#d32f2f", 
            fontWeight: "bold", 
          }}
        >
          لیست محصولات
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Mapping through the products array and displaying each product */}
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductAd
                id={product.id}
                imgSrc={product.image}
                productName={product.name}
                originalPrice={product.price}
                discountedPrice={product.discountprice}
                discountPercentage={product.discount}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductsListPage;
