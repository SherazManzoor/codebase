import "./App.css";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Navbar from './routes/components/Navbar';
import Footer from './routes/components/Footer';
import Home from './routes/components/Home';
import Chatbot from './routes/components/Chatbot';
import CreateChatbot from './routes/CreateChatbot';
import OpenChatbot from './routes/OpenChatbot';
import { I18nextProvider } from "react-i18next";
// import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "./i18n";
import Pricing from './routes/components/Pricing';

import { useState } from "react";
i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en", // Default language if translation is missing
    supportedLngs: ["en", "ar"], // Supported languages
    backend: {
      loadPath: "../public/locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
    detection: {
      order: ["localStorage", "navigator"], // Check saved language preference first, then check browser language
    },
  });
function App() {
  const [activeLanguage, setActiveLanguage] = useState("English");

  return (
    
    <I18nextProvider i18n={i18n}>
    <Navbar activeLanguage={activeLanguage} setActiveLanguage={setActiveLanguage}/>
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/create-new-chatbot" element={<CreateChatbot />} />
       <Route path="/open-chatbot" element={<OpenChatbot />} />
       <Route path="/pricing" element={<Pricing />} />

      </Routes>
      </Router>
      <Footer/>
      </I18nextProvider>
    
  );
}

export default App;
