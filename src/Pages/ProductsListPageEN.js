import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ProductAdEN from '../components/ProductAdWidget/ProductAdEN'; 
import productsEN from "../data/ProductsEN"; 

const ProductsListPageEN = () => {
  if (!productsEN || productsEN.length === 0) {
    return (
      <Box sx={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontFamily: "Vazirmatn", color: "#888" }}>
          There's no product to show
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
          Products List
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Mapping through the products array and displaying each product */}
          {productsEN.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductAdEN
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

export default ProductsListPageEN;
