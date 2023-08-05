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
import CreateChatbot from './routes/components/CreateChatbot';
import OpenChatbot from './routes/OpenChatbot';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
