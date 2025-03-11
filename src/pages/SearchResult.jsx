import { useLocation } from "react-router-dom";
import Badge from "../components/Badge";
import { useState, useEffect } from "react";
import Products from "../data/products";
import ProductCard from "../components/ProductCard";

const SearchResult = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("keyword") || "";
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      if (query) {
        const lowerQry = query.toLowerCase();

        const startWithQry = Products.filter((product) =>
          product.name.toLowerCase().startsWith(lowerQry)
        ).sort((a, b) => a.name.localeCompare(b.name));

        const containQry = Products.filter(
          (product) =>
            product.name.toLowerCase().includes(lowerQry) &&
            !product.name.toLowerCase().startsWith(lowerQry)
        ).sort((a, b) => a.name.localeCompare(b.name));

        const finalResult = [...startWithQry, ...containQry];

        setResults(finalResult);
      } else {
        setResults([]);
      }

      setLoading(false);
    }, 500);
  }, [query]);

  return (
    <div>
      {/* hero start */}
      <div className="bg-[image:url('/bg2.jpg')] h-[8rem] bg-cover bg-center md:h-[10rem]">
        <div className="flex justify-center items-center w-full h-full bg-[#294d3246]">
          <div className="flex flex-col items-center text-white">
            <img src="/logo.png" className="w-[2rem]" alt="" />
            <h1 className="text-2xl font-semibold">Search</h1>
            <p className="flex items-center text-sm">Items {query}</p>
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* content start */}
      {/* <FilterShort filters={filters} setFilters={setFilters} /> */}
      <section className="my-4">
        <div className="container">
          <h2 className="font-bold text-xl mb-4">
            {loading
              ? "Loading result..."
              : results.length > 0
              ? `Found ${results.length} results for: "${query}"`
              : `No resutlt for: "${query}"`}
          </h2>
          <div className="flex flex-wrap w-full justify-start content-center gap-y-1">
            {loading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="w-1/2 p-2 h-[12rem] md:w-1/4 md:p-1 lg:p-2 "
                >
                  <div className="w-full h-full bg-gray-300 animate-pulse rounded-md"></div>
                </div>
              ))
            ) : results.length > 0 ? (
              results.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))
            ) : (
              <p>no data</p>
            )}
          </div>
        </div>
      </section>
      {/* content end */}
      <Badge />
    </div>
  );
};

export default SearchResult;
