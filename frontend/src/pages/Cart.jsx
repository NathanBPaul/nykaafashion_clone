import React, { useState } from 'react';

const Cart = () => {
  // 1. Cart State
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: "Luxury Leather Satchel", 
      desc: "Premium Red Leather - One Size", 
      price: 8395, 
      qty: 1, 
      img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop" 
    }
  ]);

  // 2. Discount State (Starts at 0)
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const recommendations = [
    { id: 101, name: "Gold Hoop Earrings", price: 850, img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSVL0NmGPiA42TkpqsxA_81zhOOtA25IEhhNmgoIDmIHH6sCZ8cggXTpgLVS4tNSlCQWhfy0og0Qn8DzwtEN9EIszbjgLwiCurqJoHqEJ2cLHwX0sCq4jNYDFg5OIJJuBL1&usqp=CAc" },
    { id: 102, name: "Suede Clutch", price: 2400, img: "https://m.media-amazon.com/images/I/41o6mq6bIUL.jpg" },
    { id: 103, name: "Silver Bracelte", price: 899, img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfWN0f2pQXChgAc8iOl4gul_mJi6GDRu1CJR3PeE_lPWDL4TXfpsu3SU75IcTtXb2nCgYef-LGL-sXMTbiUzclETfHKFvaSiE7F6a6RiiOmM-s0qEE8jTl" },
    { id: 104, name: "Designer Sunglasses", price: 11500, img: "https://in.glassesstation.com/media/thumbs/920x575/media/luximages/0PR_17WS__1AB5S0_330Afw920fh575.png" },
    { id: 105, name: "Velvet Scarf", price: 1800, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR1CVKyi23XvWhQP6SHtGUY56-Zaa1wX84MFLLm0aCAB0kS-ctzEzZ9xTTFT2PPdOPR0krIYl3H09OrqM5mgu4_TtbsX7OtzGNUuUeuEBTQMZeeJq1Cgvfxr68ba92JppJDENL3Ryg&usqp=CAc" }
  ];

  // 3. Handlers
  const removeItem = (id) => setCartItems(cartItems.filter(item => item.id !== id));
  
  const updateQty = (id, delta) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const addToBag = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
      updateQty(product.id, 1);
    } else {
      setCartItems([...cartItems, { ...product, qty: 1, desc: "New Arrival" }]);
    }
  };

  // 4. Apply Discount Logic (Manual)
  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'NYKAA10') {
      setAppliedDiscount(500); // Apply a fixed discount
      alert("Coupon Applied! ₹500 off.");
    } else {
      alert("Invalid Coupon Code. Try 'NYKAA10'");
    }
  };

  // 5. Calculations
  const totalMRP = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const totalAmount = Math.max(0, totalMRP - appliedDiscount);

  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '40px 8%', minHeight: '100vh' }}>
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        
        {/* Left Side: Bag Items */}
        <div style={{ flex: '2', minWidth: '450px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '20px' }}>My Bag ({cartItems.length} Items)</h2>
          
          {cartItems.map(item => (
            <div key={item.id} style={cardStyle}>
              <img src={item.img} alt={item.name} style={imgStyle} />
              <div style={{ flex: '1' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h3 style={{ margin: '0' }}>{item.name}</h3>
                  <button onClick={() => removeItem(item.id)} style={removeBtnStyle}>REMOVE</button>
                </div>
                <p style={{ color: '#777', fontSize: '14px' }}>{item.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '15px' }}>
                  <button onClick={() => updateQty(item.id, -1)} style={qtyBtn}>-</button>
                  <span style={{ fontWeight: 'bold' }}>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)} style={qtyBtn}>+</button>
                  <span style={{ marginLeft: 'auto', fontWeight: 'bold' }}>₹{item.price * item.qty}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Recommended Section */}
          <h3 style={{ fontFamily: '"Bodoni Moda", serif', fontStyle: 'italic', marginTop: '50px' }}>Recommended For You</h3>
          <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', paddingBottom: '15px' }}>
            {recommendations.map(prod => (
              <div key={prod.id} style={recommendCard}>
                <img src={prod.img} alt={prod.name} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px' }} />
                <p style={{ fontSize: '12px', fontWeight: 'bold', margin: '8px 0 4px' }}>{prod.name}</p>
                <p style={{ fontSize: '12px', color: '#f42f7a', marginBottom: '10px' }}>₹{prod.price}</p>
                <button onClick={() => addToBag(prod)} style={addBtn}>ADD TO BAG</button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Manual Coupons & Totals */}
        <div style={{ flex: '1', minWidth: '320px' }}>
          <div style={priceCard}>
            <h4 style={{ margin: '0 0 15px 0' }}>Coupons</h4>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input 
                type="text" 
                placeholder="Enter Code (e.g. NYKAA10)" 
                style={inputStyle}
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button onClick={handleApplyCoupon} style={applyBtn}>APPLY</button>
            </div>
          </div>

          <div style={{ ...priceCard, marginTop: '20px' }}>
            <h4 style={{ color: '#888', fontSize: '12px', marginBottom: '15px' }}>PRICE DETAILS</h4>
            <div style={priceRow}><span>Total MRP</span><span>₹{totalMRP}</span></div>
            <div style={{ ...priceRow, color: '#f42f7a' }}><span>Discount</span><span>-₹{appliedDiscount}</span></div>
            <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '15px 0' }} />
            <div style={{ ...priceRow, fontWeight: 'bold', fontSize: '18px' }}>
              <span>Total Amount</span><span>₹{totalAmount}</span>
            </div>
            <button style={checkoutBtn}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- CSS Styles ---
const cardStyle = { display: 'flex', gap: '20px', background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #eee', marginBottom: '15px' };
const imgStyle = { width: '120px', height: '150px', objectFit: 'cover', borderRadius: '4px' };
const removeBtnStyle = { background: 'none', border: 'none', color: '#f42f7a', fontWeight: 'bold', cursor: 'pointer', fontSize: '12px' };
const qtyBtn = { width: '30px', height: '30px', border: '1px solid #ddd', background: 'white', cursor: 'pointer', borderRadius: '4px' };
const priceCard = { background: 'white', padding: '20px', borderRadius: '8px', border: '1px solid #eee' };
const priceRow = { display: 'flex', justifyContent: 'space-between', margin: '12px 0' };
const inputStyle = { flex: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '4px' };
const applyBtn = { padding: '0 15px', background: 'white', color: '#f42f7a', border: '1px solid #f42f7a', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' };
const checkoutBtn = { width: '100%', padding: '15px', background: '#f42f7a', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', marginTop: '10px', cursor: 'pointer' };
const recommendCard = { minWidth: '150px', background: 'white', padding: '10px', borderRadius: '8px', border: '1px solid #eee', textAlign: 'center' };
const addBtn = { width: '100%', padding: '8px', background: 'none', color: '#f42f7a', border: '1px solid #f42f7a', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '11px' };

export default Cart;