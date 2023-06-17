import { useState } from "react";
import { useCartContext } from "../../Providers/CartProvider";
import "./Cart.css";

export const Cart = () => {
  const { cartItems, removeFromCart, changeItemQuantity, total, finalTotal } =
    useCartContext();
  const [cartMode, setCartMode] = useState(false);
  const toggleCart = () => {
    setCartMode(!cartMode);
  };

  return (
    <>
      <a
        className="btn btn-primary"
        onClick={() => toggleCart()}
        style={{
          position: "fixed",
          bottom: "5px",
          right: "5px",
          zIndex: "1000",
          background: "var(--blue-background)",
        }}
      >
        <i className="fas fa-cart-shopping"> Cart</i>
      </a>
      <div
        className={`sidecart text-center ${cartMode && "open-cart"}`}
        style={{ background: "var(--blue-background)" }}
      >
        <ul className="nav flex-column">
          <div
            className="text-light h4 px-4 text-center"
            style={{ margin: "10px" }}
          >
            Cart
            <div
              className="d-inline"
              style={{ marginLeft: "10px" }}
              onClick={() => toggleCart()}
            >
              <i className="far text-success float-right fa-arrow-alt-circle-right mt-1" />
            </div>
          </div>

          {cartItems?.length === 0 && (
            <h3 style={{ color: "white" }}>Your cart is empty!</h3>
          )}

          {cartItems?.map((cartItem) => {
            const { images, price, name, id, quantity } = cartItem;
            return (
              <div key={id}>
                {quantity > 0 && (
                  <div className="sidecart-item">
                    <li className="nav-link d-flex flex-wrap flex-row">
                      <div className="col-12 text-black h5 text-center p-0"></div>
                      <div className="col-4 p-0">
                        <img className="cart-img" src={images[0]} alt="cart-image" />
                        <div className="text-right text-dark d-flex flex-row justify-content-end align-items-center h6 m-0 p-0">
                          <button onClick={() => removeFromCart(id)}>
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="sidecart-price pl-0 col-6 text-right d-flex flex-wrap text-black">
                        <div className="product-name text-black">{name}</div>
                        <div
                          className="col-2 text-black justify-content-around d-flex"
                          style={{ alignItems: "center" }}
                        >
                          <div>
                            <button
                              className="quantity-change"
                              onClick={() => changeItemQuantity(id, "addOne")}
                            >
                              <i className="fas fa-plus" />
                            </button>
                          </div>
                          <div className="product-quantity m-0 p-0 h5">
                            {quantity}
                          </div>
                          <div>
                            <button
                              className="quantity-change"
                              onClick={() => changeItemQuantity(id, "minusOne")}
                            >
                              <i className="fas fa-minus" />
                            </button>
                          </div>
                        </div>
                        <div className="product-price">
                          Unit Price: ${price.toFixed(2)}
                        </div>
                        <div className="">
                          <span className="text-black">
                            <b>Total Cost: </b>
                          </span>{" "}
                          <span className="product-price-total">
                            ${(quantity * price).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </li>
                  </div>
                )}
              </div>
            );
          })}
        </ul>
        {cartItems?.length > 0 && (
          <>
            <div className="text-light h6 text-left mx-3">
              Cart Subtotal:{" "}
              <span className="text-success" id="sidecart-total-products">
                ${total.toFixed(2)}
              </span>
            </div>
            <div className="text-light h6 text-left mx-3">
              Shipping Cost:{" "}
              <span className="text-success" id="sidecart-total-products">
                $5.00
              </span>
            </div>
            <div className="text-light h6 text-left mx-3">
              Tax:{" "}
              <span className="text-success" id="sidecart-frete">
                ${(total * 0.0875).toFixed(2)}
              </span>{" "}
            </div>
            <div className="text-light h5 text-left mx-3">
              Total Cost:{" "}
              <span className="text-success" id="sidecart-total">
                ${finalTotal}
              </span>
            </div>
            <div className="p-2" style={{ marginBottom: "4rem" }}>
              <a href="/checkout" className="btn btn-success w-100">
                Proceed to Checkout
              </a>
            </div>
          </>
        )}
      </div>
    </>
  );
};
