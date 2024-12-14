import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import HomeEN from "./Pages/Home/HomeEN"; // Import the English Home Page
import Layout from "./components/layout/Layout";
import 'typeface-roboto';
import ProductsPage from "./Pages/ProductsPage";
import ProductsPageEN from "./Pages/ProductsPageEN";
import ProductsListPage from "./Pages/ProductsListPage";
import ProductsListPageEN from "./Pages/ProductsListPageEN";
import { LanguageProvider } from "./components/layout/LanguageContext";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/HomeEN" element={<HomeEN />} /> {/* English Home Page */}
            <Route path="/ProductsPage/:id" element={<ProductsPage />} />
            <Route path="/ProductsPageEN/:id" element={<ProductsPageEN />} />
            <Route path="/ProductsListPage" element={<ProductsListPage />} />
            <Route path="/ProductsListPageEN" element={<ProductsListPageEN />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
