import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import HeaderEN from "./HeaderEN";
import FooterEN from "./FooterEN";
import { useLanguage } from "./LanguageContext";

const Layout = ({ children }) => {
  const { language } = useLanguage();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      {/* Conditionally Render Header */}
      {language === "fa" ? <Header /> : <HeaderEN />}
      <Box
        component="main"
        sx={{
          flex: 1,
          marginTop: "87px",
        }}
      >
        {children}
      </Box>
      {/* Conditionally Render Footer */}
      {language === "fa" ? <Footer /> : <FooterEN />}
    </Box>
  );
};

export default Layout;
