"use client"
import React, { createContext, useContext, useState, ReactNode, FC } from 'react';
import Nav from '../../../components/Navbar';

// Step 1: Define the CartItem interface
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Step 2: Define the CartContextType interface
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}

// Step 3: Create the CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

// Step 4: Create the CartProvider component
export const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
      <div className=' bg- bg-pink-300 h-100%'>
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>

      <Nav/>
      {children}
    </CartContext.Provider>
      </div>
  );
};

// Step 5: Create the useCart hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Step 6: Create the Cart component
const Cart: FC = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="p-4 bg-pink-300 rounded-lg shadow-md">
      
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is currently empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center bg-white p-4 rounded-md shadow-sm">
              <div>
                <span className="font-medium">{item.name}</span> - ${item.price} x {item.quantity}
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Step 7: Create the ProductPage component
const ProductPage: FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    const product = {
      id: 1,
      name: 'Sample Product',
      price: 100,
      quantity: 1,
    };
    addToCart(product);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-2">Sample Product</h1>
      <p className="text-lg text-gray-700 mb-4">Price: $100</p>
      <button 
        onClick={handleAddToCart}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

// Step 8: Combine everything in the main component
const Page: FC = () => {
  return (
    <CartProvider>
      <div className="container mx-auto p-4">
        <ProductPage />
        <div className="mt-8">
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
};

export default Page;
