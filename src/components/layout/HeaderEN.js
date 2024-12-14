import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useLanguage } from "./LanguageContext"; // Importing the useLanguage hook

const HeaderEN = () => {
  const { language, toggleLanguage } = useLanguage(); // Get language and toggleLanguage from context
  const navigate = useNavigate(); // Initialize navigate hook
  
  const buttons = [
    { image: "/icons/about-us.png", text: "About Us" },
    { image: "/icons/Franchise.png", text: "Franchise" },
    { image: "/icons/festivals.png", text: "Festivals" },
    { image: "/icons/club.png", text: "Customer Club" },
    { image: "/icons/online-shopping.png", text: "Online Shop" },
    { image: "/icons/products.png", text: "Products", link: "/en/ProductsListPage" },
  ];

  const handleLanguageToggle = () => {
    // Toggle the language first
    toggleLanguage();
    // Navigate to the correct home page based on the selected language
    if (language === "fa") {
      navigate("/en/Home"); // Redirect to the English home page
    } else {
      navigate("/fa/Home"); // Redirect to the Persian home page
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#ffffff",
        color: "#000000",
        zIndex: 10,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          minHeight: "80px",
          paddingY: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#ffffff",
              color: "#000000",
              borderColor: "#000000",
              fontFamily: "Roboto",
              fontSize: "13px",
              borderRadius: "30px",
              padding: "6px 16px",
              marginBottom: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            Sign In / Register
            <PersonIcon fontSize="small" />
          </Button>

          <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <Button
              sx={{
                width: "35px",
                height: "35px",
                minWidth: "35px",
                borderRadius: "50%",
                backgroundColor: "#d32f2f",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: "#d32f2f",
                },
              }}
            >
              <img
                src="/icons/lenz.png"
                alt="Lens Icon"
                style={{
                  width: "16px",
                  height: "16px",
                  objectFit: "contain",
                }}
              />
            </Button>

            {/* Language Switch Button */}
            <Button
              sx={{
                width: "35px",
                height: "35px",
                minWidth: "35px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                borderColor: "#d32f2f",
                color: "#d32f2f",
                borderWidth: "2px",
                borderStyle: "solid",
                padding: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "bold",
                fontFamily: "Roboto",
                lineHeight: "1",
                "&:hover": {
                  backgroundColor: "#d32f2f",
                  color: "#ffffff",
                },
              }}
              onClick={handleLanguageToggle} // Change language and navigate
            >
              FA
            </Button>

            <Button
              sx={{
                width: "35px",
                height: "35px",
                minWidth: "35px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                borderColor: "#d32f2f",
                color: "#d32f2f",
                borderWidth: "2px",
                "&:hover": {
                  backgroundColor: "#d32f2f",
                  color: "#ffffff",
                },
              }}
            >
              <LocationOnIcon fontSize="small" />
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: "16px", marginLeft: "auto" }}>
          <ButtonGroup variant="text" aria-label="button group" sx={{ fontFamily: "Roboto" }}>
            {buttons.map((btn, index) => (
              <Link
                key={index}
                to={btn.link || "#"}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "gray",
                    fontFamily: "Roboto",
                    "&:hover": {
                      color: "red",
                    },
                  }}
                >
                  <img
                    src={btn.image}
                    alt={btn.text}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginBottom: "4px",
                    }}
                  />
                  <Typography variant="caption">{btn.text}</Typography>
                </Button>
              </Link>
            ))}
          </ButtonGroup>

          <Link to="/en/Home">
            <IconButton disableRipple sx={{ padding: 0 }}>
              <img
                src="/icons/logo.png"
                alt="Website Icon"
                style={{
                  width: "185px",
                  height: "70px",
                  objectFit: "contain",
                }}
              />
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderEN;
