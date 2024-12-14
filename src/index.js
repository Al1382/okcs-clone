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
            <Route path="/" element={<Navigate to="/fa/Home" />} />
            <Route path="/fa/Home" element={<Home />} />
            <Route path="/en/Home" element={<HomeEN />} /> {/* English Home Page */}
            <Route path="/fa/ProductsPage/:id" element={<ProductsPage />} />
            <Route path="/en/ProductsPage/:id" element={<ProductsPageEN />} />
            <Route path="/fa/ProductsListPage" element={<ProductsListPage />} />
            <Route path="/en/ProductsListPage" element={<ProductsListPageEN />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
