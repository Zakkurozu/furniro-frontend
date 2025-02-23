const ProductCard = ({ product }) => {
  return (
    <>
      {product.slice(0, 4).map((item, index) => (
        <div key={index} className="w-1/2 p-2">
          <div className="flex flex-col bg-gray7 rounded-md overflow-hidden">
            <div className="gambar flex w-full h-[13rem] relative overflow-hidden">
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
            <div className="teks space-y-1 p-2">
              <h3 className="font-semibold text-[1.17rem] text-gray1">
                {item.name}
              </h3>
              <p className="font-semibold text-[.8rem] text-gray4">
                {item.category}
              </p>
              <div className="flex items-center gap-x-1">
                <p className="font-semibold text-[.95rem] text-gray1">
                  Rp.
                  {(
                    item.price -
                    item.price * (item.discount / 100)
                  ).toLocaleString("id-ID")}
                </p>
                {item.discount > 0 && (
                  <p className="font-semibold text-[.7rem] text-gray5 line-through">
                    Rp.{item.price.toLocaleString("id-ID")}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
