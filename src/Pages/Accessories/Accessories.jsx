import { SingleProduct } from "../../Components/SingleProductPage/SingleProduct";
import { products } from "../../products/products";

export const Accessories = () => {
  const displayAccessories = products.filter(
    (product) => product.type === "accessory"
  );
  return (
    <div className="top-space">
      <div className="products-display">
        {displayAccessories.map((product) => {
          if (product) {
            return (
              <SingleProduct
                class="home-product-banner"
                key={product.id}
                product={product}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
