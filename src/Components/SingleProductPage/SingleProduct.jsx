/* eslint-disable react/prop-types */
import { ImageCarousel } from "../ImageCarousel";
import "./SingleProduct.css";
import Typography from "@mui/material/Typography";
import { useCartContext } from "../../Providers/CartProvider";
import { Link } from "react-router-dom";

export const SingleProduct = ({ product, comingFrom }) => {
  const {
    images,
    details,
    shortDetails,
    name,
    id,
    desc,
    price,
    learnMoreLink,
  } = product;
  const { addToCart, cartItems, removeFromCart } = useCartContext();
  const toggleInCart = () => {
    if (cartItems.find((item) => item.id === id)) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  return (
    <div className="mt-5 mb-5">
      <div className="row d-flex justify-content-center" id="product-row">
        <div className="col-md-10">
          <div className="card" style={{ background: "whitesmoke" }}>
            <div className="row">
              <div className="col-md-6">
                <div className="images p-3">
                  <div className="text-center p-4">
                    <ImageCarousel images={images} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product p-4">
                  <div className="mt-4 mb-3">
                    <h5 className="text-uppercase">{name}</h5>
                    <div className="price flex-row align-items-center">
                      {" "}
                      <span className="act-price">${price}</span>
                      <div className="ml-2">
                        {" "}
                        <small className="dis-price">
                          ${(price * 1.4).toFixed(2)}
                        </small>{" "}
                        <span>40% OFF</span>{" "}
                      </div>
                    </div>
                  </div>
                  <p className="about">{desc}</p>
                  {comingFrom === "home-page"
                    ? shortDetails.map((detail) => {
                        return (
                          <Typography
                            variant="body2"
                            color={"black"}
                            key={detail}
                            style={{ padding: "0.5rem 0", lineHeight: "1.5" }}
                          >
                            {detail}
                          </Typography>
                        );
                      })
                    : details.map((detail) => {
                        return (
                          <Typography
                            variant="body2"
                            color={"black"}
                            key={detail}
                            style={{ padding: "0.5rem 0", lineHeight: "1.5" }}
                          >
                            {detail}
                          </Typography>
                        );
                      })}
                  <div className="cart mt-4 align-items-center product-buttons">
                    <button
                      className="btn text-uppercase mr-2 px-4 btn btn-2 btn-sep icon-cart"
                      onClick={() => toggleInCart()}
                    >
                      {cartItems.find((item) => item.id === id)
                        ? "Remove from Cart"
                        : "Add To Cart!"}
                    </button>
                    {comingFrom === "home-page" && (
                      <button
                        className="btn text-uppercase"
                        style={{
                          marginLeft: "1rem",
                          marginTop: "1rem",
                        }}
                      >
                        <Link className="learn-more-btn" to={learnMoreLink}>
                          Learn More!
                        </Link>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
