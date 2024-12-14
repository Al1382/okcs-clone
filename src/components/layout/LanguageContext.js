import React, { createContext, useContext, useState } from "react";

// Create the context
export const LanguageContext = createContext();

// Create the provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fa");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fa" ? "en" : "fa"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the LanguageContext
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
