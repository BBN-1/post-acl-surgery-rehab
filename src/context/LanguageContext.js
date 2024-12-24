import { createContext, useState } from "react";

// Creating a context for language with default values
export const LanguageContext = createContext({
    language: "", // Default language value
    setLanguage: () => {}, // Default function to set language
});

// LanguageProvider component to provide language context to its children
export const LanguageProvider = ({ children }) => {
    // State to manage the current language, default is "en"
    const [language, setLanguage] = useState("en");

    return (
        // Providing the current language and function to change it to the context
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children} {/* Rendering children components */}
        </LanguageContext.Provider>
    );
};
