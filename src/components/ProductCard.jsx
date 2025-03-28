import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <>
      <Link
        to={`/shop/product/${product.id}/${product.name}`}
        onClick={(e) => {
          e.preventDefault();
          setTimeout(() => {
            navigate(
              `/shop/product/${product.id}/${product.name}${location.search}`
            );
          }, 300);
        }}
        className="w-1/2 p-2 md:w-1/4 md:p-1 lg:p-2 group"
      >
        <div className="flex flex-col bg-gray7 rounded-md overflow-hidden group-hover:shadow-lg group-hover:scale-[.98] group-hover:bg-gray6 transition-all duration-500 ease-in-out">
          <div className="gambar flex w-full h-[13rem] relative overflow-hidden lg:h-[18rem]">
            <img
              className="absolute w-full h-full object-cover object-center group-hover:scale-110 group-hover:opacity-80 transition-all duration-[600ms] ease-in-out"
              src={product.images[0]}
              alt=""
            />
            <div className="absolute flex gap-x-1 top-2 right-2 ">
              {product.discount > 0 && (
                <div className="bg-abang w-[35px] h-[35px] rounded-full">
                  <span className="w-full h-full flex items-center justify-center font-semibold text-[.7rem] text-putih">
                    -{product.discount}%
                  </span>
                </div>
              )}
              {product.new && (
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
              {product.name}
            </h3>
            <p className="font-semibold text-[.8rem] text-gray4">
              {product.tag}
            </p>
            <div className="flex items-center gap-x-1">
              <p className="font-semibold text-[.95rem] text-gray1 md:text-[.9rem] lg:text-[1rem]">
                Rp.
                {(
                  product.price -
                  product.price * (product.discount / 100)
                ).toLocaleString("id-ID")}
              </p>
              {product.discount > 0 && (
                <p className="font-semibold text-[.7rem] text-gray5 line-through md:text-[.6rem] lg:text-[.8rem]">
                  Rp.{product.price.toLocaleString("id-ID")}
                </p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
