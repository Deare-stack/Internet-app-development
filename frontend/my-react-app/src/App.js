import React, { useState } from 'react';
import products from './Tile';  
import Nevbar from './Nevbar';
import './style.css'; // Import CSS
import './productStyle.css'; // Import CSS
import './Searchbar.css'; // Import CSS
function App() {
  const [cartCount, setCartCount] = useState(0);  // State to keep track of cart count

  const addToCart = () => {
    setCartCount(cartCount + 1);  // Function to increment the cart count
};

  return (
    <div className="App">
      <div>
            <Nevbar />
        </div>
    <nav>
    
    <form className="d-flex">
                <button className="btn" type="button">
                    <i className="bi-cart-fill me-1"></i>
                    Cart
                    <span className="Count">{cartCount}</span>
                </button>
            </form>
    </nav>
    
      <header className="App-header">
        <h1>Welcome to Amazon Coffee Shop</h1>
      </header>
      <div>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product">
                        <img src={product.img} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <button onClick={addToCart}>Add to Cart</button>
                    </div>
                  ))}
                  </div>
                  </div>
      <footer>
        <p>© 2024 Deare project</p>
      </footer>
    </div>
  );
}

export default App;
