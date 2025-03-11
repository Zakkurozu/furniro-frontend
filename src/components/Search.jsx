import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Products from "../data/products";

const Search = ({ handleSearchOpen, setSearchOpen, inputRef, searchOpen }) => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const [preview, setPreview] = useState([]);

  useEffect(() => {
    const keydown = (e) => {
      if (e.key === "/") {
        setSearchOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    };
    document.addEventListener("keydown", keydown);
    return () => document.removeEventListener("keydown", keydown);
  }, []);

  const handleSearch = () => {
    if (keyword.trim()) {
      navigate(`/search?keyword=${encodeURIComponent(keyword)}`);
      inputRef.current?.blur();
      handleSearchOpen();
    }
    setTimeout(() => {
      setKeyword("");
    }, 500);
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    if (searchOpen === false) {
      setTimeout(() => {
        setKeyword("");
      }, 500);
    }
  }, [searchOpen]);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (keyword) {
        const lowerKwrd = keyword.toLowerCase();

        const result = Products.filter((product) =>
          product.name.toLowerCase().startsWith(lowerKwrd)
        ).sort((a, b) => a.name.localeCompare(b.name));

        setPreview(result);
      } else {
        setPreview([]);
      }
    }, 500);
    return () => clearTimeout(delaySearch);
  }, [keyword]);

  return (
    <div>
      <div className="flex justify-center">
        <div className="relative w-[80%]">
          <input
            ref={inputRef}
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={onEnter}
            placeholder="Search..."
            type="text"
            className="relative font-medium text-[#1f2937] bg-[#e5e7eb] py-3 px-4 w-full rounded-lg focus:outline-[#9ca3af]"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-lg"
          >
            <FiSearch />
          </button>
        </div>
      </div>
      {preview.length > 0 && (
        <div>
          <hr className="my-3" />
          <div className="max-h-[20rem] overflow-y-scroll no-scrollbar">
            <ul className="space-y-2 font-medium px-3 py-1">
              {preview.map((item, index) => (
                <li key={index} className="w-full">
                  <Link
                    className="w-full"
                    onClick={() => {
                      handleSearchOpen();
                      setTimeout(() => {
                        navigate(`/shop/product/${item.id}/${item.name}`);
                      }, 300);
                    }}
                  >
                    <div className="flex items-center gap-x-2 hover:bg-gray6 active:bg-gray6 rounded-md transition-all duration-200 ease-in-out">
                      <div className="gambar w-[4rem] h-[4rem]">
                        <img
                          className="object-cover object-center w-full h-full"
                          src={item.images[0]}
                          alt={`${item.name}.png`}
                        />
                      </div>
                      <div className="teks">
                        <p>{item.name}</p>
                        <p className="text-gray3 font-normal text-sm">
                          {item.tag}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
