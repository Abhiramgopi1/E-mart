import React from "react";
import { useCart } from "./context/CartContext";

const UserCart = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <>
      <div>
        <h2 className="y-cart">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty">Your Cart is Empty</p>
        ) : (
          <div>
            {cartItems.map((item) => {
              return (
                <div className="cart-section" key={item.id}>
                  <div className="cart-img">
                    <img src={item.image} alt={item.product} />
                  </div>
                  <div className="cart-details">
                    <h3>{item.product}</h3>
                    <h2>{item.price}</h2>
                    <h3>{item.model}</h3>
                  </div>

                  {/* Add Item to Cart */}
                  <button className="addBtn" onClick={() => addToCart(item)}>
                    +
                  </button>

                  {/* Display item count */}
                  <div className="itemcount">
                    {item.count > 0 ? `${item.count}` : "0"}
                  </div>

                  {/* Remove Item from Cart */}
                  <button
                    className="removeBtn"
                    onClick={() => removeFromCart(item)}
                  >
                    -
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default UserCart;
