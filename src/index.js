import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <I18nextProvider i18n={i18n}>
    <Router>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/create-new-chatbot" element={<CreateChatbot />} />
       <Route path="/open-chatbot" element={<OpenChatbot />} />
      
      </Routes>
      <Footer/>
    </Router>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
