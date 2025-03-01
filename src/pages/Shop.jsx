import { useState } from "react";
import Badge from "../components/Badge";
import FilterShort from "../components/FilterShort";
import ProductList from "../components/ProductList";

const Shop = () => {
  const [filters, setFilters] = useState({
    range: [],
    category: [],
    others: [],
    sortBy: "0",
  });

  return (
    <>
      {/* hero start */}
      <div className="bg-[image:url('/bg2.jpg')] h-[8rem] bg-cover bg-center md:h-[10rem]">
        <div className="flex justify-center items-center w-full h-full bg-[#294d3246]">
          <div className="flex flex-col items-center text-white">
            <img src="/logo.png" className="w-[1.6rem]" alt="" />
            <h1 className="text-xl font-medium">Shop</h1>
            <p className="flex items-center text-xs">find any furniture</p>
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* content start */}
      <FilterShort filters={filters} setFilters={setFilters} />
      <section className="my-4">
        <div className="container">
          <ProductList filters={filters} />
        </div>
      </section>
      {/* content end */}
      <Badge />
    </>
  );
};

export default Shop;
