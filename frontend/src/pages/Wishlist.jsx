import React from 'react';

const Wishlist = ({ wishlistItems, setWishlistItems, addToCart }) => {
  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const moveToCart = (product) => {
    addToCart(product);
    removeItem(product.id);
  };

  return (
    <div style={{ padding: '40px 8%', minHeight: '80vh' }}>
      <h2 style={{ fontFamily: '"Bodoni Moda", serif', fontStyle: 'italic', fontSize: '32px', marginBottom: '30px' }}>
        My Wishlist ({wishlistItems.length} Items)
      </h2>

      {wishlistItems.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <p style={{ color: '#888' }}>Your wishlist is lonely. Add some styles!</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
          {wishlistItems.map(item => (
            <div key={item.id} style={wishlistCard}>
              <div style={{ position: 'relative' }}>
                <img src={item.img} alt={item.name} style={imgStyle} />
                <button onClick={() => removeItem(item.id)} style={closeBtn}>×</button>
              </div>
              <div style={{ padding: '15px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '16px', margin: '5px 0' }}>{item.name}</h3>
                <p style={{ fontWeight: 'bold', marginBottom: '15px' }}>₹{item.price}</p>
                <button onClick={() => moveToCart(item)} style={moveToBagBtn}>MOVE TO BAG</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Styles
const wishlistCard = { background: '#fff', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' };
const imgStyle = { width: '100%', height: '300px', objectFit: 'cover' };
const closeBtn = { position: 'absolute', top: '10px', right: '10px', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '30px', height: '30px', cursor: 'pointer', fontSize: '20px' };
const moveToBagBtn = { width: '100%', padding: '10px', backgroundColor: 'transparent', color: '#f42f7a', border: '1px solid #f42f7a', fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px' };

export default Wishlist;