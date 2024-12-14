import React from 'react';
import { Button, Box } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from "react-router-dom"; // Import Link
import HeaderImg from '../../components/Slider/Slider';
import Banner from '../../components/Banner/Banner';
import Discount from '../../components/Discount/Discount';
import FadeBox from '../../components/FadeBox/FadeBox';
import Statistics from '../../components/Counter/Counter';

function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <HeaderImg /> 
      <Banner />
      <Discount />

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
          to="/ProductsListPage"  
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
            مشاهده همه محصولات
          </Button>
        </Link>
      </Box>

      <FadeBox />
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
          نمایش تمامی شعب
        </Button>
      </Box>
    </React.Fragment>
  );
}

export default Home;
