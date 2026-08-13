import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 100% Reliable Image Links for seamless offline/online display during the interview demo
  const [products] = useState([
    {
      id: 1,
      title: "Premium Casual Slim Fit T-Shirt",
      price: 22.30,
      category: "men's clothing",
      image: "men t-shirt.webp"
    },
    {
      id: 2,
      title: "Waterproof Winter Hooded Jacket",
      price: 56.99,
      category: "men's clothing",
      image: "raincoat.webp"
    },
    {
      id: 3,
      title: "Classy Solid Gold Petite Band",
      price: 168.00,
      category: "jewelery",
      image: "gold ring.webp"
    },
    {
      id: 4,
      title: "Silver Chain Classic Bracelet",
      price: 249.99,
      category: "jewelery",
      image: "silver chain.webp"
    },
    {
      id: 5,
      title: "High-Speed 1TB Internal SSD",
      price: 109.00,
      category: "electronics",
      image: "ssd.webp"
    },
    {
      id: 6,
      title: "Portable 2TB External Hard Drive",
      price: 64.00,
      category: "electronics",
      image: "hard drive.jpeg"
    },
    {
      id: 7,
      title: "Women's Designer Leather Handbag",
      price: 189.50,
      category: "women's clothing",
      image: "hand bag.jpeg"
    },
    {
      id: 8,
      title: "Elegant Cotton Floral Summer Dress",
      price: 45.00,
      category: "women's clothing",
      image: "dress.jpeg"
    }
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Client-side execution loop for searching and drop-down filters
  useEffect(() => {
    let result = products;

    if (category !== 'all') {
      result = result.filter((p) => p.category === category);
    }

    if (searchTerm) {
      result = result.filter((p) => 
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(result);
  }, [searchTerm, category, products]);

  return (
    <div className="store-container">
      <header className="store-header">
        <h1>🛍️ Smart Product Explorer</h1>
        <p>Built by KMC</p>
        
        <div className="controls">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="search-input"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select className="category-select" onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </div>
      </header>

      {/* Grid presentation container */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="img-container">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
              <span className="category-tag">{product.category}</span>
              <h3 title={product.title}>{product.title.substring(0, 35)}...</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <button className="view-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="no-results">No products found for "{searchTerm}"</div>
      )}
    </div>
  );
}

export default App;
