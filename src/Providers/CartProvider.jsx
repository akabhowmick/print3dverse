/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState, useEffect, createContext, useContext } from "react";
import { products } from "../products/products";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);

  useEffect(() => {
    let cartTotal = 0;
    cartItems.forEach((item) => {
      cartTotal += item.price * item.quantity;
    });
    setTotal(cartTotal);
    setFinalTotal((cartTotal * 1.0875 + 5).toFixed(2))
  }, [cartItems]);

  useEffect(() => {
    const maybeCart = localStorage.getItem("cart");
    if (maybeCart) {
      setCartItems(JSON.parse(maybeCart));
    }
  }, []);

  const updateCartInLocalStorage = (cartArrayItems) => {
    localStorage.setItem("cart", JSON.stringify(cartArrayItems));
    if (cartArrayItems.length === 0) {
      localStorage.removeItem("cart");
    }
  };

  const addToCart = (id) => {
    let product = products.find((product) => product.id === id);
    if (!cartItems.find((product) => product.id === id)) {
      updateCartInLocalStorage([...cartItems, product]);
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    updateCartInLocalStorage(cartItems.filter((item) => item.id !== id));
  };

  const changeItemQuantity = (id, changeType) => {
    const changeAmount = changeType === "addOne" ? 1 : -1;
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + changeAmount };
      } else {
        return item;
      }
    });
    setCartItems(newCartItems);
    updateCartInLocalStorage(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        total,
        setTotal,
        addToCart,
        removeFromCart,
        changeItemQuantity,
        finalTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  return {
    cartItems: context.cartItems,
    setCartItems: context.setCartItems,
    total: context.total,
    setTotal: context.setTotal,
    addToCart: context.addToCart,
    removeFromCart: context.removeFromCart,
    changeItemQuantity: context.changeItemQuantity,
    finalTotal: context.finalTotal
  };
};
