import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Navbar from '../Components/navbar.jsx';
import Footer from '../Components/Footer.jsx';
 import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

 
const root = document.getElementById('root');
createRoot(root).render(
<>   
     <App />
    
    </>
 );
