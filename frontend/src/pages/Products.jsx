import React, { useState } from 'react';

const Products = ({ addToCart }) => {
  const [filter, setFilter] = useState('All');

  const productData = [
    { id: 1, category: "Women", name: "Floral A-Line Dress", price: 1995, img: "https://assets.ajio.com/medias/sys_master/root1/20250808/AJj7/689505238bfb9009ac6eabe6/-473Wx593H-700114234-blue-MODEL.jpg" },
    { id: 2, category: "Women", name: "Silk Wrap Saree", price: 4250, img: "https://rushini.in/cdn/shop/files/1_8bc903cf-eadf-4926-b9ab-6f55fcd99329.jpg?v=1690039502" },
    { id: 3, category: "Women", name: "High-Waist Trousers", price: 2100, img: "https://littleboxindia.com/cdn/shop/files/Pleated_High_Waisted_Wide_Leg_Trousers_in_Off-White_fac278c7-0a05-4ee6-8ff3-e88917135ed0.png?v=1757679910" },
    { id: 4, category: "Women", name: "Embroidered Kurta", price: 3500, img: "https://www.lakshita.com/cdn/shop/products/23SLK03035-S-12_8.jpg?v=1753960301" },
    { id: 5, category: "Women", name: "Velvet Evening Gown", price: 7999, img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500" },
    { id: 6, category: "Men", name: "Slim Fit Linen Shirt", price: 1750, img: "https://levi.in/cdn/shop/files/A13230110_01_Styleshot.jpg?v=1736856002" },
    { id: 7, category: "Men", name: "Classic Navy Blazer", price: 5999, img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500" },
    { id: 8, category: "Men", name: "Leather Chelsea Boots", price: 3450, img: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=500" },
    { id: 9, category: "Men", name: "Oversized Cotton Tee", price: 1200, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRgeBRQFvMLg3iS9UhAMLOQAAQ_ti3l19BbjjqIyn685G3ASPvD_fEm0uKOHNyKi_arUWZN8nhw8U4RC-RAivHwyvLGqsFUGybFsTVXihO8TsCXiBRD&usqp=CAc" },
    { id: 10, category: "Men", name: "Chino Trousers", price: 2800, img: "https://www.iconicindia.com/cdn/shop/files/1_9c0af95c-b0cc-4056-b556-54a6cd113055.jpg?v=1757161358" },
    { id: 11, category: "Kids", name: "Denim Dungarees", price: 1595, img: "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/H55385s.jpg?im=Resize,width=750" },
    { id: 12, category: "Kids", name: "Striped Cotton Frock", price: 999, img: "https://maaandbaby.com/cdn/shop/files/1_9af559cb-480e-4c65-ac97-5e03f8373fbf.jpg?v=1689573434" },
    { id: 13, category: "Kids", name: "Printed Sweatshirt", price: 1250, img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRCWF0sl0Ucu0dlepXFXpYvphmnNW_JYh4FQYyemXzu7sWjb55_qC0Yt4XsekJQ5zccapmQ3AgFihqAVViU56r21KZkwYJXuEh45oL9T-O7N5Dnv_7qMkj655nSztXzMrM25zCwoYB_&usqp=CAc" },
    { id: 14, category: "Kids", name: "Velcro Canvas Shoes", price: 1800, img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500" },
    { id: 15, category: "Kids", name: "Graphic T-Shirt", price: 750, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTFtgKZEXmwxasQpiPOLLIKU4rdoMoVkiDTSfcLUoV6qtODJWMoD9ljVYVYwZxt9-c8pGBm74ZhaVNBmmXc96QTuulYp1GiSTZozMZlVw1BesvftxZ96gBVkYrENXipTyevPKn8qIpE9w&usqp=CAc" },
  ];

  const filteredItems = filter === 'All' ? productData : productData.filter(item => item.category === filter);

  return (
    <div style={{ padding: '40px 5%' }}>
      <h2 style={{ fontFamily: '"Bodoni Moda", serif', fontStyle: 'italic', fontSize: '36px' }}>{filter} Collections</h2>
      
      {/* Filters */}
      <div style={{ display: 'flex', gap: '15px', margin: '30px 0' }}>
        {['All', 'Women', 'Men', 'Kids'].map(cat => (
          <button key={cat} onClick={() => setFilter(cat)} style={{
            padding: '10px 25px', border: filter === cat ? 'none' : '1px solid #ddd',
            backgroundColor: filter === cat ? '#f42f7a' : 'white', color: filter === cat ? 'white' : '#181114',
            fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px'
          }}>{cat.toUpperCase()}</button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
        {filteredItems.map(product => (
          <div key={product.id} className="product-card">
            <div style={{ height: '400px', overflow: 'hidden', borderRadius: '8px' }}>
              <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '15px 0' }}>
              <h3 style={{ fontSize: '16px', margin: '5px 0' }}>{product.name}</h3>
              <p style={{ fontWeight: 'bold', fontSize: '18px' }}>₹{product.price}</p>
              <button 
                onClick={() => addToCart(product)} 
                style={addBtnStyle}
              >
                ADD TO BAG
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const addBtnStyle = { width: '100%', padding: '12px', backgroundColor: '#f42f7a', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' };

export default Products;