import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        // If item exists, increase the count
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, count: i.count + 1 } : i
        );
      }
      // If item doesn't exist, add it with a count of 1
      return [...prevItems, { ...item, count: 1 }];
    });
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => {
      // If the item count is greater than 1, just decrease the count
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem && existingItem.count > 1) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, count: i.count - 1 } : i
        );
      }
      // Otherwise, remove the item from the cart completely
      return prevItems.filter((i) => i.id !== item.id);
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
