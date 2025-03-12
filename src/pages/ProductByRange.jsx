import { useParams } from "react-router-dom";
import product from "../data/products";
import ProductCard from "../components/ProductCard";
import Badge from "../components/Badge";
import { useEffect, useState } from "react";

const ProductByRange = () => {
  const { range } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 800);
    window.scrollTo({ top: "0" });
  }, []);

  console.log(loading);

  const prodByRange = product.filter(
    (item) => String(item.range).toLowerCase() === range.toLowerCase()
  );

  return (
    <>
      {/* hero start */}
      <div className="bg-[image:url('/bg2.jpg')] h-[8rem] bg-cover bg-center md:h-[10rem]">
        <div className="flex justify-center items-center w-full h-full bg-[#294d3246]">
          <div className="flex flex-col items-center text-white">
            <img src="/logo.png" className="w-[2rem]" alt="" />
            <h1 className="text-2xl font-semibold capitalize">Range {range}</h1>
            <p className="flex items-center text-sm">find any furniture</p>
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* content start */}
      <div className="container mb-[3rem]">
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-semibold my-6 md:ms-5">
            {loading ? "Loading..." : `Found ${prodByRange.length} items`}
          </h1>
          <div className=" w-full mx-auto md:w-[95%]">
            <div className=" flex flex-wrap w-full justify-start content-center gap-y-1">
              {loading ? (
                Array.from({ length: prodByRange.length }).map((_, index) => (
                  <div
                    key={index}
                    className="w-1/2 p-2 h-[12rem] md:w-1/4 md:p-1 lg:p-2 "
                  >
                    <div className="w-full h-full bg-gray-300 animate-pulse rounded-md"></div>
                  </div>
                ))
              ) : prodByRange.length > 0 ? (
                prodByRange.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))
              ) : (
                <p>no data</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* content end */}

      <Badge />
    </>
  );
};

export default ProductByRange;
