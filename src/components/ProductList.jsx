import ProductCard from "./ProductCard";
import product from "../data/products";

const ProductList = ({ location }) => {
  return (
    <>
      <div className="flex flex-wrap w-full justify-center content-center gap-y-1">
        <ProductCard location={location} product={product} />
      </div>
    </>
  );
};

export default ProductList;
