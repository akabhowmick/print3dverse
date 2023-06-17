import { SingleProduct } from "../../Components/SingleProductPage/SingleProduct";
import { products } from "../../products/products";

export const FullHome = () => {
  const displayProducts = products.filter(
    (product) => product.type === "full"
  );
  return (
    <div className="top-space">
      <div className="products-display">
        {displayProducts.map((product) => {
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
