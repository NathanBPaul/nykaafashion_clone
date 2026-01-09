import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '80vh',
      backgroundColor: '#f9f9f9' 
    }}>
      <div className="card" style={{ 
        width: '350px', 
        padding: '40px', 
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: '#ffffff'
      }}>
        <h2 style={{ color: '#f42f7a', marginBottom: '30px', fontSize: '28px' }}>Register</h2>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="Full Name" style={inputStyle} />
          <input type="email" placeholder="Email" style={inputStyle} />
          <input type="password" placeholder="Password" style={inputStyle} />
          <input type="password" placeholder="Confirm Password" style={inputStyle} />
          
          <button className="btn-primary" style={{ 
            marginTop: '10px',
            backgroundColor: '#f42f7a',
            color: 'white',
            padding: '12px',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Create Account
          </button>
        </form>

        <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
          Already have an account? 
          <Link to="/login" style={{ 
            color: '#f42f7a', 
            textDecoration: 'none', 
            fontWeight: 'bold',
            marginLeft: '5px' 
          }}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '4px',
  border: '1px solid #ddd',
  fontSize: '14px',
  boxSizing: 'border-box'
};

export default Register;