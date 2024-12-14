import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./FadeBox.css";

const useStyles = makeStyles(() => ({
  fadeBox: {
    opacity: 0,
    transition: "opacity 1s ease-in-out",
    display: "flex",
    backgroundColor: "#2c065b",
    color: "#ffffff",
    alignItems: "stretch",
  },
  visible: {
    opacity: 1,
  },
  imageSection: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
  contentSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },
}));

const FadeBox = () => {
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const fadeBox = document.getElementById("fadeBox");
    if (fadeBox) {
      const rect = fadeBox.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top < windowHeight / 2 && rect.bottom > 0) {
        setIsVisible(true);
      }
      else if (rect.bottom < windowHeight / 2 || rect.top > windowHeight) {
        setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <Box
      id="fadeBox"
      className={`${classes.fadeBox} ${isVisible ? classes.visible : ""}`}
    >
      {/* Left Section: Image */}
      <Box className={classes.imageSection}>
        <img
          src="/images/club.jpg"
          alt="Club"
          className={classes.image}
        />
      </Box>

      {/* Right Section: Content */}
      <Box className={classes.contentSection}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "35px",
            fontWeight: "bold",
            fontFamily: 'Vazirmatn',
            color: "#d32f2f", 
            marginBottom: "20px",
          }}
        >
          باشگاه مشتریان افق کوروش
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: 'Vazirmatn',
            color: "#ffffff",
            marginBottom: "20px",
          }}
        >
          یک عضویت...هزاران مزیت
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "19px",
            fontWeight: "normal",
            fontFamily: 'Vazirmatn',
            color: "#ffffff",
            marginBottom: "20px",
          }}
        >
          با عضویت در باشگاه مشتریان افق کوروش، علاوه بر دریافت بیشتر طرح ها و جشنواره ها، از تخفیف های مراکز خدماتی، رفاهی و تفریحی در سراسر کشور نیز بهره مند شوید
        </Typography>

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
          اطلاعات بیشتر و ورود
        </Button>
      </Box>
    </Box>
  );
};

export default FadeBox;
