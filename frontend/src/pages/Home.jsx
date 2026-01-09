import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={heroContainerStyle}>
      {/* High-Quality Hero Image from actual fashion source */}
      <img 
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
        alt="Fashion Banner" 
        style={heroImageStyle} 
      />
      
      {/* Overlay Content */}
      <div style={overlayStyle}>
        <h1 style={titleStyle}>The Fashion Edit</h1>
        <p style={subtitleStyle}>Discover the latest trends in luxury and style.</p>
        
        {/* Only this button is functional */}
        <button 
          onClick={() => navigate('/products')} 
          style={shopNowBtnStyle}
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

// --- Styles ---
const heroContainerStyle = {
  position: 'relative',
  width: '100%',
  height: 'calc(100vh - 80px)', // Adjust 80px based on your Navbar height
  overflow: 'hidden',
};

const heroImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
};

const overlayStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.2)', // Subtle dark overlay to make text pop
  color: 'white',
  textAlign: 'center',
};

const titleStyle = {
  fontFamily: '"Bodoni Moda", serif',
  fontSize: '64px',
  fontStyle: 'italic',
  fontWeight: '900',
  marginBottom: '10px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
};

const subtitleStyle = {
  fontSize: '18px',
  marginBottom: '30px',
  fontWeight: '400',
  letterSpacing: '1px',
};

const shopNowBtnStyle = {
  padding: '15px 40px',
  backgroundColor: '#f42f7a', // Nykaa Pink
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'transform 0.2s',
};

export default Home;