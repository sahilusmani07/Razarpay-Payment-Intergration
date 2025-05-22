import React from 'react';
import { FiSearch, FiHeart, FiShoppingBag } from 'react-icons/fi';
import { BsWallet2 } from 'react-icons/bs';
import '../public/Navbar.css';
import { fitMart } from '../Assets/assets';

function Navbar({ onSearch }) {
  // Scroll-to-top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={scrollToTop} style={{ cursor: 'pointer' }}>
        <img style={{ width: '60px', height: '60px' }} src={fitMart} alt="Logo" />
        <span className="navbar-title">FitMart</span>
      </div>

      <div className="navbar-search">
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search products e.g. Protein"
            className="search-input"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="navbar-icons">
        <button className="icon-button"><FiHeart /></button>
        <button className="icon-button"><BsWallet2 /></button>
        <button className="icon-button cart-button">
          <FiShoppingBag />
          <span className="cart-badge">2</span>
        </button>
      </div>
      
    </nav>
    
  );
}

export default Navbar;