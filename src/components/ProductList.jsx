import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import product from "../data/products";

const ProductList = ({ location, filters }) => {
  const [itemShow, setItemShow] = useState(product.length);
  useEffect(() => {
    const updateItems = () => {
      if (window.location.pathname === "/") {
        setItemShow(window.innerWidth <= 768 ? 4 : 8);
      } else if (window.location.pathname === location) {
        setItemShow(4);
      }
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const filterProducts = product
    .filter((item) => {
      if (filters?.range?.length > 0 && !filters.range.includes(item.range)) {
        return false;
      }
      if (
        filters?.category?.length > 0 &&
        !filters.category.includes(item.category)
      ) {
        return false;
      }
      if (filters?.others?.includes("Discount") && item.discount <= 0) {
        return false;
      }
      if (filters?.others?.includes("New") && !item.new) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (filters?.sortBy === "1") return a.name.localeCompare(b.name);

      const priceA = a.price - (a.price * (a.discount || 0)) / 100;
      const priceB = b.price - (b.price * (b.discount || 0)) / 100;
      if (filters?.sortBy === "2") return priceA - priceB;
      if (filters?.sortBy === "3") return priceB - priceA;
      return 0;
    });

  return (
    <>
      <div className="flex flex-wrap w-full justify-center content-center gap-y-1">
        {filterProducts.length > 0 ? (
          filterProducts
            .slice(0, itemShow)
            .map((item) => <ProductCard key={item.id} product={item} />)
        ) : (
          <p className="text-gray-500 text-center w-full">No products found</p>
        )}
      </div>
    </>
  );
};

export default ProductList;
