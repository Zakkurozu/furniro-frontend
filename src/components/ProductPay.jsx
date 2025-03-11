import { useEffect, useState } from "react";
import { TbTrashXFilled } from "react-icons/tb";

const ProductPay = () => {
  const [loading, setLoading] = useState({});
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  const [payment, setPayment] = useState("");

  useEffect(() => {
    const handleStorageChange = () => {
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const removeFromCart = (index) => {
    setLoading((prev) => ({ ...prev, [index]: true }));

    setTimeout(() => {
      const updateCart = cart.filter((_, i) => i !== index);
      setCart(updateCart);
      localStorage.setItem("cart", JSON.stringify(updateCart));

      setLoading((prev) => {
        const newLoading = { ...prev };
        delete newLoading[index];
        return newLoading;
      });

      window.dispatchEvent(new Event("storage"));
    }, 400);
  };

  //   payment data
  const paymentData = [
    {
      id: 1,
      name: "paypal",
      tax: 3,
      img: "/paypal.png",
    },
    {
      id: 2,
      name: "mastercard",
      tax: 1.2,
      img: "/mastercard.png",
    },
    {
      id: 3,
      name: "bank transfer",
      tax: 2,
      img: "/tfbank.png",
    },
    {
      id: 4,
      name: "visa",
      tax: 0,
      img: "/visa.png",
    },
  ];

  const totalTax = paymentData.find((item) => item.name === payment)?.tax;
  const totalPay = cart.reduce((a, b) => a + b.price * b.qty, 0);

  return (
    <>
      <div>
        <div className="p-2">
          <div className="flex">
            <div className="w-[65%] md:w-[70%] lg:w-[50%] pe-1">
              <div className="flex flex-col space-y-2">
                <h3 className="font-medium text-xl mb-3">Product</h3>
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center pb-2"
                    >
                      <div className="gambar flex w-[4rem] h-[4rem] relative overflow-hidden rounded-md">
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
                        {loading[index] ? (
                          <img
                            src="/loading.gif"
                            className="w-[1.5rem] h-[1.5rem]"
                            alt="loading.png"
                          />
                        ) : (
                          <button
                            className="text-2xl text-gray4 hover:text-red-500 transition-all duration-300 ease-in-out"
                            onClick={() => removeFromCart(index)}
                          >
                            <TbTrashXFilled />
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className=" text-gray5">There is no item</p>
                )}
              </div>
            </div>
            <div className="w-[40%] lg:w-[50%] ps-4">
              <div className="flex flex-col space-y-2">
                <h3 className="font-medium text-xl mb-3">Subtotal</h3>
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <div className="teks flex-col">
                        <div className="flex">
                          <p className="font-normal text-gray1">
                            Rp.{" "}
                            {(item.price * item.qty).toLocaleString("id-ID")}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className=" text-gray5">There is no data</p>
                )}
                <hr />
                <p className="font-semibold text-primary">
                  Rp. {totalPay.toLocaleString("id-ID")}
                </p>
              </div>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex flex-col gap-y-3">
            <p className="font-normal text-gray1">
              Make your payment valid with these option to paid your order,
              please use your order ID as a payment reference. Your order will
              not be shipped until the funds have cleared.
            </p>
            <div className="flex flex-col gap-y-3 mb-4">
              <h3 className="font-semibold text-lg mb-2">
                Choose your payment method
              </h3>
              {paymentData.map((item, index) => (
                <label
                  key={index}
                  htmlFor={item.name}
                  className="w-full cursor-pointer"
                >
                  <input
                    type="radio"
                    name="payment"
                    id={item.name}
                    className="hidden peer"
                    value={item.name}
                    onChange={(e) =>
                      setTimeout(() => setPayment(e.target.value), 300)
                    }
                  />
                  <div
                    className="form-group flex gap-x-3 items-center w-full border-[1px] px-4 py-3 border-gray-300 rounded-lg transition-all duration-200 
                peer-checked:border-blue-400 peer-checked:bg-blue-50"
                  >
                    <div className="px-2 py-1 border-[1px] w-[70px] border-gray5 rounded-sm">
                      <img
                        src={item.img}
                        className="h-[30px] w-auto mx-auto"
                        alt={item.name}
                      />
                    </div>
                    <span className="font-semibold text-lg capitalize">
                      {item.name}
                    </span>
                  </div>
                </label>
              ))}
            </div>

            <div className="flex flex-col py-3 px-3 fixed bottom-0 left-0 w-full bg-white shadow-[0px_-4px_10px_rgba(0,0,0,0.1)] md:shadow-none md:static">
              <div
                className={`flex flex-col overflow-hidden ${
                  payment ? "max-h-[20rem]" : "max-h-0"
                } transition-all duration-500 ease-in-out`}
              >
                <div className="flex items-center gap-x-1">
                  <p className=" font-semibold">Payment :</p>
                  <p className="text-lg text-blue-500 font-semibold capitalize">
                    {payment}
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <p className=" font-semibold">Tax :</p>
                  <p className="text-lg text-blue-500 font-semibold capitalize">
                    {totalTax}%
                  </p>
                </div>
                <div className="flex items-center gap-x-1">
                  <p className="text-lg font-semibold">Total :</p>
                  <p className="text-xl text-primary font-semibold">
                    IDR.{" "}
                    {(totalPay + (totalPay * totalTax) / 100).toLocaleString(
                      "id-ID"
                    )}
                  </p>
                </div>
                <hr className="my-2" />
              </div>
              <div className="flex py-1">
                <div className="flex items-center justify-center w-full">
                  <button className="px-4 py-3 border-2 border-gray1 rounded-xl w-[60%]">
                    Place your order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPay;
