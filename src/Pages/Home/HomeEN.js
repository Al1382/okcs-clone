import React from 'react';
import { Button, Box } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from "react-router-dom"; // Import Link
import HeaderImg from '../../components/Slider/Slider';
import BannerEN from '../../components/Banner/BannerEN';
import DiscountEN from '../../components/Discount/DiscountEN';
import FadeBoxEN from '../../components/FadeBox/FadeBoxEN';
import Statistics from '../../components/Counter/CounterEN';

function HomeEN() {
  return (
    <React.Fragment>
      <CssBaseline />
      <HeaderImg /> 
      <BannerEN />
      <DiscountEN />

      {/* Box to center the Button with margin from the bottom */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom: '40px',
        }}
      >
        <Link
          to="/ProductsListPageEN"  
          style={{ textDecoration: "none" }}  
        >
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
            }}
          >
            See all products
          </Button>
        </Link>
      </Box>

      <FadeBoxEN />
      <Statistics />

      {/* Box to center the Button with margin from the bottom */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom: '40px',
        }}
      >
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
          }}
        >
          See all branches
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default HomeEN;
