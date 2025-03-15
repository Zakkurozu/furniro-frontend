import { useEffect, useRef, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { LuUserCog } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import Search from "../components/Search";
import ShoppingCart from "../components/ShoppingCart";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setmenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const menuRef = useRef(null);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const cartRef = useRef(null);
  const buttonRef = useRef(null);
  const searchBtnReff = useRef(null);
  const cartBtnReff = useRef(null);

  // const testProps = "ini teks yang dikirim dari parent dengan props";

  const handleMenuOpen = () => {
    setmenuOpen((prev) => !prev);
  };
  const handleSearchOpen = () => {
    setSearchOpen((prev) => !prev);
    if (!searchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleCartOpen = () => {
    setCartOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setmenuOpen(false);
      }
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        searchBtnReff.current &&
        !searchBtnReff.current.contains(event.target)
      ) {
        setSearchOpen(false);
      }
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        cartBtnReff.current &&
        !cartBtnReff.current.contains(event.target)
      ) {
        setCartOpen(false);
      }
    };
    if (menuOpen || searchOpen || cartOpen) {
      document.addEventListener("click", handleClickOutside, true);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [menuOpen, searchOpen, cartOpen]);

  // cart data
  const [cartLength, setCartLength] = useState(
    JSON.parse(localStorage.getItem("cart"))?.length || 0
  );

  useEffect(() => {
    const updateCartLength = () => {
      setTimeout(
        () =>
          setCartLength(JSON.parse(localStorage.getItem("cart"))?.length || 0),
        800
      );
    };

    window.addEventListener("storage", updateCartLength);

    return () => window.removeEventListener("storage", updateCartLength);
  }, []);

  return (
    <>
      <nav className=" px-5 py-3 bg-putih shadow-sm">
        <div className="container w-full flex justify-between items-center relative">
          <div
            onClick={() => (window.location.href = "/")}
            className="flex gap-1 items-start"
          >
            <img src="/logo.svg" alt="" className="w-8 md:w-10" />
            <h1 className="font-bold text-lg md:text-xl cursor-pointer">
              Furniro
            </h1>
          </div>
          <div
            ref={menuRef}
            className={`items-center gap-8 px-6 py-5 space-y-4 absolute w-[100%] overflow-hidden rounded-md bg-putih 
              translate-x-1/2 right-1/2 translate-y-[100%] -bottom-5 z-10 
              transition-transform origin-top duration-300 ease-in-out
              ${menuOpen ? "scale-y-100" : "scale-y-0"} 
              md:translate-y-0 md:bottom-auto md:flex md:w-auto md:scale-y-100 md:space-y-0 md:py-0 md:px-0`}
          >
            <div className=" md:hidden">
              <p className="font-semibold text-xl">Menu</p>
              <hr />
            </div>
            <div>
              <NavLink
                to={"/"}
                onClick={(e) => {
                  setmenuOpen(false);
                  e.preventDefault();
                  setTimeout(() => navigate("/"), 300);
                }}
                className={({ isActive }) =>
                  `flex w-full justify-center font-medium ${
                    isActive ? "text-primary font-bold underline" : "text-black"
                  } transition-all duration-300 ease-in-out`
                }
              >
                Home
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/shop"
                onClick={(e) => {
                  setmenuOpen(false);
                  e.preventDefault();
                  setTimeout(() => navigate("/shop"), 300);
                }}
                className={({ isActive }) =>
                  `flex w-full justify-center font-medium ${
                    isActive ? "text-primary font-bold underline" : "text-black"
                  } transition-all duration-300 ease-in-out`
                }
              >
                Shop
              </NavLink>
            </div>
            <div>
              <NavLink
                to={"/about"}
                onClick={(e) => {
                  setmenuOpen(false);
                  e.preventDefault();
                  setTimeout(() => navigate("/about"), 300);
                }}
                className={({ isActive }) =>
                  `flex w-full justify-center font-medium ${
                    isActive ? "text-primary font-bold underline" : "text-black"
                  } transition-all duration-300 ease-in-out`
                }
              >
                About
              </NavLink>
            </div>
            <div>
              <NavLink
                to={"/contact"}
                onClick={(e) => {
                  setmenuOpen(false);
                  e.preventDefault();
                  setTimeout(() => navigate("/contact"), 300);
                }}
                className={({ isActive }) =>
                  `flex w-full justify-center font-medium ${
                    isActive ? "text-primary font-bold underline" : "text-black"
                  } transition-all duration-300 ease-in-out`
                }
              >
                Contact
              </NavLink>
            </div>
            <hr className="md:hidden" />
          </div>
          <div className="flex gap-4 items-center">
            <button className="text-lg md:text-xl">
              <LuUserCog />{" "}
            </button>
            <button
              ref={searchBtnReff}
              onClick={handleSearchOpen}
              className="text-lg md:text-xl"
            >
              <FiSearch />{" "}
            </button>
            <button className="text-lg md:text-xl">
              <FaRegHeart />{" "}
            </button>
            <button
              ref={cartBtnReff}
              onClick={handleCartOpen}
              className="text-lg md:text-xl relative"
            >
              <div
                className={`bg-abang w-[12px] h-[12px] rounded-full absolute -translate-y-1/2 translate-x-1/2 top-0 right-0 ${
                  cartLength > 0 ? "scale-100" : "scale-0"
                } transition-all duration-150`}
              >
                <span className="w-full h-full flex items-center justify-center text-[7px] text-putih">
                  {cartLength}
                </span>
              </div>
              <FiShoppingCart />{" "}
            </button>
            <button
              ref={buttonRef}
              onClick={handleMenuOpen}
              className="flex flex-col gap-y-1 md:hidden"
            >
              <span className="w-[20px] h-[2px] bg-black"></span>
              <span className="w-[20px] h-[2px] bg-black"></span>
              <span className="w-[20px] h-[2px] bg-black"></span>
            </button>
          </div>

          {/* search open */}
          <div
            ref={searchRef}
            className={`items-center gap-8 py-4 px-3 space-y-4 absolute w-[100%] overflow-hidden rounded-md bg-putih 
            translate-x-1/2 right-1/2 translate-y-[100%] -bottom-5 z-10 
            transition-transform origin-top duration-300 ease-in-out
            ${searchOpen ? "scale-y-100" : "scale-y-0"} 
            md:w-[60%] md:translate-x-0 md:right-0
            lg:w-[40%]`}
          >
            <Search
              setSearchOpen={setSearchOpen}
              handleSearchOpen={handleSearchOpen}
              inputRef={inputRef}
              searchOpen={searchOpen}
            />
          </div>

          {/* cart open */}
          <div
            ref={cartRef}
            className={`items-center gap-8 py-4 px-5 absolute w-[80%] overflow-hidden rounded-md bg-putih translate-x-0 right-0 translate-y-[100%] -bottom-5 z-10 transition-transform origin-top duration-300 ease-in-out shadow-sm
            ${cartOpen ? "scale-y-100" : "scale-y-0"} 
            md:w-[50%]
            lg:w-[30%]`}
          >
            <ShoppingCart handleCartOpen={handleCartOpen} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
