import React, { useState, useEffect, useRef } from "react";
import { Grid, Typography, Box } from "@mui/material";

const CounterEN = () => {
  const dataTopRow = [
    { title: "Products", value: 3200, img: "/icons/icon1.png", showPlus: true },
    { title: "Employees", value: 21000, img: "/icons/icon2.png", showPlus: true },
    { title: "Branches", value: 4000, img: "/icons/icon3.png", showPlus: true },
  ];

  const dataBottomRow = [
    { title: "States", value: 31, showPlus: false },
    { title: "Cities", value: 686, showPlus: false },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(
    [...dataTopRow, ...dataBottomRow].map(() => 0)
  );

  const sectionRef = useRef();

  const handleScroll = () => {
    const section = sectionRef.current;
    if (section) { 
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top < windowHeight / 2 && rect.bottom > 0) {
        setIsVisible(true);
      } else {
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

  useEffect(() => {
    if (isVisible) {
      [...dataTopRow, ...dataBottomRow].forEach((item, index) => {
        let start = 0;
        const end = item.value;
        const increment = Math.ceil(end / 20);
        const interval = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(interval);
          }
          setCounts((prevCounts) =>
            prevCounts.map((count, i) => (i === index ? start : count))
          );
        }, 50);
      });
    }
  }, [isVisible]);

  return (
    <Box
      sx={{
        padding: "50px",
        textAlign: "center",
        fontFamily: "Vazirmatn", // Apply fontFamily globally
      }}
      ref={sectionRef}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left part: Top Row (Products, Employees, Branches) */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {dataTopRow.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={4}
                key={index}
                sx={{ textAlign: "center" }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "gray",
                    fontFamily: "Vazirmatn",
                    fontSize: "25px",
                  }}
                >
                  {item.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 1,
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    alt={item.title}
                    sx={{
                      height: '60px',
                      marginLeft: 1,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      color: "red",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontFamily: "Vazirmatn",
                      fontSize: "60px",
                    }}
                  >
                    {counts[index]}
                    {item.showPlus && "+"}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right part: Bottom Row (City and Province) */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            {dataBottomRow.map((item, index) => (
              <Grid item xs={12} key={index} sx={{ textAlign: "center" }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "gray",
                    fontFamily: "Vazirmatn",
                    fontSize: "25px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "60px",
                    textAlign: "center",
                    fontFamily: "Vazirmatn",
                  }}
                >
                  {counts[index + dataTopRow.length]}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CounterEN;
