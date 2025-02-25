import { FiShoppingCart } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5";

const ShoppingCart = () => {
  const order = [
    {
      id: 1,
      name: "Asgard sofa",
      qty: 1,
      price: 250000,
      img: "/cart/1.png",
    },
    {
      id: 2,
      name: "Casaliving Wood",
      qty: 2,
      price: 270000,
      img: "/cart/2.png",
    },
  ];
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">Shopping cart</h2>
        <FiShoppingCart />
      </div>
      <hr />
      <div className="space-y-2 overflow-y-scroll max-h-[18rem] no-scrollbar">
        {order.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center pb-2 border-b-[1px]"
          >
            <div
              className="gambar flex w-[6rem] h-[6rem] relative overflow-hidden rounded-md
          md:w-[8rem] md:h-[8rem]"
            >
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
              <button className="text-2xl text-gray4">
                <IoCloseCircle />
              </button>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className="flex justify-between">
        <p className="font-semibold">Total: </p>
        <p className="font-semibold text-primary">
          Rp.{" "}
          {order
            .reduce((a, b) => a + b.price * b.qty, 0)
            .toLocaleString("id-ID")}
          ,00
        </p>
      </div>
      <div className="flex justify-end">
        <button className="px-8 py-1 border-[1px] border-black rounded-full">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
