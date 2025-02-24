import { useEffect, useRef, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { LuUserCog } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className=" px-5 py-3 bg-terang">
        <div className="container w-full flex justify-between items-center relative">
          <div onClick={() => navigate("/")} className="flex gap-1 items-start">
            <img src="/logo.png" alt="" className="w-8 md:w-10" />
            <h1 className="font-bold text-lg md:text-xl cursor-pointer">
              Furniro
            </h1>
          </div>
          <div
            ref={menuRef}
            className={`items-center gap-8 py-8 space-y-4 absolute w-[100%] overflow-hidden rounded-md bg-[#f4f4f4c2] 
              translate-x-1/2 right-1/2 translate-y-[100%] -bottom-5 z-10 
              transition-transform origin-top duration-300 ease-in-out
              ${isOpen ? "scale-y-100" : "scale-y-0"} 
              md:translate-y-0 md:bottom-auto md:flex md:w-auto md:scale-y-100 md:space-y-0 md:py-0`}
          >
            <div>
              <Link
                onClick={() => setIsOpen(false)}
                to="/"
                className="flex w-full justify-center font-medium"
              >
                Home
              </Link>
            </div>
            <div>
              <Link
                onClick={() => setIsOpen(false)}
                to="/shop"
                className="flex w-full justify-center font-medium"
              >
                Shop
              </Link>
            </div>
            <div>
              <Link
                onClick={() => setIsOpen(false)}
                to="/about"
                className="flex w-full justify-center font-medium"
              >
                About
              </Link>
            </div>
            <div>
              <Link
                onClick={() => setIsOpen(false)}
                to="/contact"
                className="flex w-full justify-center font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <button className="text-lg md:text-xl">
              <LuUserCog />{" "}
            </button>
            <button className="text-lg md:text-xl">
              <FiSearch />{" "}
            </button>
            <button className="text-lg md:text-xl">
              <FaRegHeart />{" "}
            </button>
            <button className="text-lg md:text-xl">
              <FiShoppingCart />{" "}
            </button>
            <button
              ref={buttonRef}
              onClick={handleOpen}
              className="flex flex-col gap-y-1 md:hidden"
            >
              <span className="w-[20px] h-[2px] bg-black"></span>
              <span className="w-[20px] h-[2px] bg-black"></span>
              <span className="w-[20px] h-[2px] bg-black"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
