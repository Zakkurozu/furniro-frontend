import { FiShoppingCart } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";
// import cartData from "../data/cart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShoppingCart = ({ handleCartOpen }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const removeFromCart = (index) => {
    const updateCart = cart.filter((_, i) => i !== index);
    setCart(updateCart);
    localStorage.setItem("cart", JSON.stringify(updateCart));

    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Shopping cart</h2>
        <FiShoppingCart />
      </div>
      <hr />
      <div className="space-y-2 overflow-y-scroll max-h-[18rem] no-scrollbar">
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center pb-2 border-b-[1px]"
            >
              <div className="gambar flex w-[6rem] h-[6rem] relative overflow-hidden rounded-md md:w-[8rem] md:h-[8rem]">
                <img
                  className="absolute w-full h-full object-cover object-center"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="teks flex-col">
                <p className="font-semibold">{item.name}</p>
                <div className="flex">
                  <p className="font-normal">{item.qty}</p>
                  <p className="mx-2">x</p>
                  <p className="font-semibold text-primary">
                    Rp. {item.price.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
              <div className="tombol">
                <button
                  className="text-2xl text-gray4"
                  onClick={() => removeFromCart(index)}
                >
                  <IoCloseCircle />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray5">There is no items</p>
        )}
      </div>
      <hr />
      <div className="flex justify-between">
        <p className="font-semibold">Total: </p>
        <p className="font-semibold text-primary">
          Rp.{" "}
          {cart
            .reduce((a, b) => a + b.price * b.qty, 0)
            .toLocaleString("id-ID")}
          ,00
        </p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            setTimeout(() => {
              handleCartOpen();
              navigate("/shop/checkout");
            }, 200);
          }}
          className="px-8 py-1 border-[1px] border-black rounded-full hover:bg-gray1 hover:text-putih active:bg-black transition-all duration-300 ease-in-out"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
