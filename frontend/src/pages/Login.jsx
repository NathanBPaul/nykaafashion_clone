import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div style={authContainer}>
      <div style={authCard}>
        <h2 style={authTitle}>Login</h2>
        <form style={formStyle}>
          <input type="email" placeholder="Email" style={inputStyle} />
          <input type="password" placeholder="Password" style={inputStyle} />
          <button type="submit" style={submitBtn}>Continue</button>
        </form>
        <p style={switchText}>
          New to Nykaa Fashion? <Link to="/register" style={pinkLink}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

// Shared Styles for Login and Register
const authContainer = { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '85vh', backgroundColor: '#f9f9f9' };
const authCard = { width: '350px', padding: '40px', textAlign: 'center', backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', borderRadius: '8px' };
const authTitle = { color: '#f42f7a', marginBottom: '30px', fontSize: '28px', fontWeight: 'bold' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '15px' };
const inputStyle = { width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box' };
const submitBtn = { width: '100%', padding: '12px', backgroundColor: '#f42f7a', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' };
const switchText = { marginTop: '20px', fontSize: '14px', color: '#666' };
const pinkLink = { color: '#f42f7a', textDecoration: 'none', fontWeight: 'bold', marginLeft: '5px' };

export default Login;