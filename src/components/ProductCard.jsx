import { useEffect, useState } from "react";

const ProductCard = ({ product }) => {
  const [itemShow, setItemShow] = useState(4);
  useEffect(() => {
    const updateItems = () => {
      setItemShow(window.innerWidth >= 768 ? 8 : 4);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  return (
    <>
      {product.slice(0, itemShow).map((item, index) => (
        <a
          href={`/product/${item.id}`}
          key={index}
          className="w-1/2 p-2 md:w-1/4 md:p-1 lg:p-2"
        >
          <div className="flex flex-col bg-gray7 rounded-md overflow-hidden">
            <div className="gambar flex w-full h-[13rem] relative overflow-hidden lg:h-[18rem]">
              <img
                className="absolute w-full h-full object-cover object-center"
                src={item.img}
                alt=""
              />
              <div className="absolute flex top-2 right-2 ">
                {item.discount > 0 && (
                  <div className="bg-abang w-[35px] h-[35px] rounded-full">
                    <span className="w-full h-full flex items-center justify-center font-semibold text-[.7rem] text-putih">
                      -{item.discount}%
                    </span>
                  </div>
                )}
                {item.new && (
                  <div className="bg-ijo w-[35px] h-[35px] rounded-full">
                    <span className="w-full h-full flex items-center justify-center font-semibold text-[.7rem] text-putih">
                      New
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="teks space-y-1 p-2 lg:p-4 lg:px-6">
              <h3 className="font-semibold text-[1.17rem] text-gray1 lg:font-bold">
                {item.name}
              </h3>
              <p className="font-semibold text-[.8rem] text-gray4">
                {item.category}
              </p>
              <div className="flex items-center gap-x-1">
                <p className="font-semibold text-[.95rem] text-gray1 md:text-[.9rem] lg:text-[1rem]">
                  Rp.
                  {(
                    item.price -
                    item.price * (item.discount / 100)
                  ).toLocaleString("id-ID")}
                </p>
                {item.discount > 0 && (
                  <p className="font-semibold text-[.7rem] text-gray5 line-through md:text-[.6rem] lg:text-[.8rem]">
                    Rp.{item.price.toLocaleString("id-ID")}
                  </p>
                )}
              </div>
            </div>
          </div>
        </a>
      ))}
    </>
  );
};

export default ProductCard;
