import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount, wishlistCount }) => {
  return (
    <nav style={navContainerStyle}>
      {/* Left: Brand Logo in Bodoni Moda Italic */}
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline' }}>
        <span style={nykaaLogoStyle}>NYKAA</span>
        <span style={fashionLogoStyle}>FASHION</span>
      </Link>

      {/* Center: Search Bar */}
      <div style={searchContainerStyle}>
        <span className="material-symbols-outlined" style={{ color: '#888', fontSize: '20px' }}>search</span>
        <input 
          type="text" 
          placeholder="Search for products, styles, brands" 
          style={searchInputStyle} 
        />
        <span className="material-symbols-outlined" style={{ color: '#888', fontSize: '20px' }}>photo_camera</span>
      </div>

      {/* Right: Action Icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
        {/* Profile/Login */}
        <Link to="/login" style={iconLinkStyle}>
          <span className="material-symbols-outlined">person</span>
        </Link>
        
        {/* Wishlist Icon - Now functional with dynamic badge */}
        <Link to="/wishlist" style={{ ...iconLinkStyle, position: 'relative' }}>
          <span className="material-symbols-outlined">favorite</span>
          {wishlistCount > 0 && (
            <span style={badgeStyle}>{wishlistCount}</span>
          )}
        </Link>
        
        {/* Shopping Bag Icon - Dynamic badge */}
        <Link to="/cart" style={{ ...iconLinkStyle, position: 'relative' }}>
          <span className="material-symbols-outlined">shopping_bag</span>
          {cartCount > 0 && (
            <span style={badgeStyle}>{cartCount}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

// --- Styles ---

const navContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 50px',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #e8e8e8',
  position: 'sticky',
  top: 0,
  zIndex: 1000
};

const nykaaLogoStyle = {
  fontFamily: '"Bodoni Moda", serif',
  color: '#f42f7a',
  fontSize: '28px',
  fontWeight: '900',
  fontStyle: 'italic',
  letterSpacing: '-1px'
};

const fashionLogoStyle = {
  fontFamily: '"Bodoni Moda", serif',
  color: '#000000',
  fontSize: '28px',
  fontWeight: '400',
  fontStyle: 'italic',
  marginLeft: '2px'
};

const searchContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f4f4f4',
  padding: '8px 15px',
  borderRadius: '4px',
  width: '400px',
  gap: '10px'
};

const searchInputStyle = {
  border: 'none',
  backgroundColor: 'transparent',
  outline: 'none',
  width: '100%',
  fontSize: '14px'
};

const iconLinkStyle = {
  textDecoration: 'none',
  color: '#181114',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center'
};

const badgeStyle = {
  position: 'absolute',
  top: '-5px',
  right: '-8px',
  backgroundColor: '#f42f7a',
  color: 'white',
  fontSize: '10px',
  padding: '2px 5px',
  borderRadius: '50%',
  fontWeight: 'bold'
};

export default Navbar;