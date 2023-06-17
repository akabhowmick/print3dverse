import { SingleProduct } from "../../Components/SingleProductPage/SingleProduct";
import { products } from "../../products/products";

export default function FrontHome() {
  const displayProducts = products.filter(
    (product) => product.type === "front"
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
}
