import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import product from "../data/products";
import { useLocation } from "react-router-dom";

const ProductList = ({ filters, showBtn }) => {
  const [itemShow, setItemShow] = useState(8);
  const [currentView, setCurrentView] = useState(1);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (window.location.pathname === "/") {
      setItemShow(window.innerWidth <= 768 ? 4 : 8);
    } else if (window.location.pathname === "/shop") {
      setItemShow(window.innerWidth <= 768 ? 8 : 12);
    }
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/") {
      if (showBtn) {
        setItemShow((prev) => prev + 4);
      }
      console.log(itemShow);
    }
  }, [showBtn]);

  useEffect(() => {
    if (location.pathname === "/") {
      setLoading(false);
    } else {
      setLoading(true);
    }
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
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

  const totalPage = Math.ceil(filterProducts.length / itemShow);
  const startIndex = (currentView - 1) * itemShow;
  const endIndex = startIndex + itemShow;
  const paginateView = filterProducts.slice(startIndex, endIndex);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView]);

  return (
    <>
      <div className="flex flex-wrap w-full justify-center content-center gap-y-1">
        {loading ? (
          Array.from({ length: itemShow }).map((_, index) => (
            <div
              key={index}
              className="w-1/2 p-2 h-[12rem] md:w-1/4 md:p-1 lg:p-2 "
            >
              <div className="w-full h-full bg-gray-300 animate-pulse rounded-md"></div>
            </div>
          ))
        ) : paginateView.length > 0 ? (
          paginateView.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))
        ) : (
          <p className="text-gray-500 text-center w-full">No products found</p>
        )}
      </div>

      {window.location.pathname !== "/" && totalPage > 1 && (
        <div className="flex justify-center items-center gap-x-2 mt-4">
          <button
            className="p-3 font-semibold bg-gray6 text-black rounded-md"
            disabled={currentView === 1}
            onClick={() => setCurrentView((prev) => prev - 1)}
          >
            Prev
          </button>
          {[...Array(totalPage)].map((_, index) => (
            <button
              key={index}
              className={`p-3 font-semibold rounded-md ${
                currentView === index + 1
                  ? "bg-primary text-white"
                  : "bg-gray6 text-black"
              }`}
              onClick={() => setCurrentView(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="p-3 font-semibold bg-gray6 text-black rounded-md"
            disabled={currentView === totalPage}
            onClick={() => setCurrentView((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default ProductList;
