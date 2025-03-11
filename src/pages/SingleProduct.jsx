import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import { useLocation, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import ReviewList from "../components/ReviewList";
import product from "../data/products";
import ProductCard from "../components/ProductCard";
import { BsFillCartCheckFill } from "react-icons/bs";

const SingleProduct = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [count, setCount] = useState(1);
  const [descActive, setDescActive] = useState(true);
  const { pathname } = useLocation();
  const [alert, setAlert] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateItems = () => {
      setIsMobile(window.innerWidth <= 768 ? true : false);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, [pathname]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { id } = useParams();
  const productDetail = product.find((item) => item.id === Number(id));

  const image = productDetail.images;
  const imageLoop = [...image];

  const similarProduct = product.filter(
    (item) =>
      item.category === productDetail.category && item.id !== productDetail.id
  );

  if (!productDetail) {
    return <h2>Product Not Found</h2>;
  }

  // cart function
  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find((item) => item.prodId === productDetail.id);
    if (existingItem) {
      cart = cart.map((item) =>
        item.prodId === productDetail.id
          ? { ...item, qty: item.qty + count }
          : item
      );
    } else {
      const newItem = {
        id: cart.length + 1,
        prodId: productDetail.id,
        name: productDetail.name,
        img: productDetail.images[0],
        qty: count,
        price:
          productDetail.price -
          productDetail.price * (productDetail.discount / 100),
      };
      cart.push(newItem);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));

    setTimeout(() => setAlert(true), 500);
    setTimeout(() => setAlert(false), 1500);
  };

  return (
    <>
      <section className="my-4">
        <div className="container mx-auto px-4 space-y-5">
          <div className="flex flex-wrap -mx-4 items-center">
            {/* Bagian Gambar */}
            <div className="w-full px-4 md:w-1/2 mb-6 md:mb-0">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Swiper Thumbnail (Vertikal) */}
                <div className="w-full md:w-1/6 order-2 md:order-1">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    // loop={true}
                    spaceBetween={8}
                    slidesPerView={4}
                    direction={`${isMobile ? "horizontal" : "vertical"}`}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="h-20 md:h-96 vertical-thumb-swiper"
                  >
                    {loading
                      ? imageLoop.map((_, index) => (
                          <SwiperSlide key={index}>
                            <div className="w-full h-full bg-gray-400 animate-pulse rounded-md"></div>
                          </SwiperSlide>
                        ))
                      : imageLoop.map((item, index) => (
                          <SwiperSlide
                            key={index}
                            className="cursor-pointer rounded overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-300"
                          >
                            <img
                              src={item}
                              className="w-full h-full object-cover"
                              alt={`Thumbnail ${index + 1}`}
                            />
                          </SwiperSlide>
                        ))}
                  </Swiper>
                </div>

                {/* Swiper Utama (Hero) */}
                <div className="w-full md:w-5/6 order-1 md:order-2">
                  <Swiper
                    // loop={true}
                    spaceBetween={10}
                    navigation={false}
                    thumbs={{ swiper: thumbsSwiper }}
                    // autoplay={{
                    //   delay: 5000,
                    //   disableOnInteraction: false,
                    //   pauseOnMouseEnter: true,
                    // }}
                    modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                    className="rounded-lg overflow-hidden shadow-lg h-80 md:h-96"
                  >
                    {loading
                      ? imageLoop.map((_, index) => (
                          <SwiperSlide
                            key={index}
                            className="aspect-w-16 aspect-h-12"
                          >
                            <div className="w-full h-full bg-gray-400 animate-pulse rounded-md"></div>
                          </SwiperSlide>
                        ))
                      : imageLoop.map((item, index) => (
                          <SwiperSlide
                            key={index}
                            className="aspect-w-16 aspect-h-12"
                          >
                            <img
                              src={item}
                              className="w-full h-full object-cover"
                              alt={`Nature ${index + 1}`}
                            />
                          </SwiperSlide>
                        ))}
                  </Swiper>
                </div>
              </div>
            </div>

            {/* Bagian overview */}
            <div className="w-full px-4 md:w-1/2">
              <div className="bg-white p-2 md:p-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                  {loading ? (
                    <div className="w-[50%] h-8 bg-gray-400 animate-pulse rounded-md"></div>
                  ) : (
                    productDetail.name
                  )}
                </h1>
                {loading ? (
                  <div className="w-[70%] h-8 mb-3 bg-gray-400 animate-pulse rounded-md"></div>
                ) : (
                  <div className="flex items-center mb-4">
                    <span className="text-xl font-semibold text-gray4">
                      Rp.{" "}
                      {(
                        productDetail.price -
                        productDetail.price * (productDetail.discount / 100)
                      ).toLocaleString("id-ID")}
                    </span>
                    {productDetail.discount > 0 && (
                      <div className="flex items-center">
                        <span className="ml-2 text-sm line-through text-gray-400">
                          Rp.{productDetail.price.toLocaleString("id-ID")}
                        </span>
                        <span className="ml-2 bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                          {productDetail.discount}% OFF
                        </span>
                      </div>
                    )}
                    {productDetail.new && (
                      <span className="ml-2 bg-green-200 text-green-600 text-xs px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                )}
                <div className="flex flex-col gap-1 mb-4">
                  {loading ? (
                    <div className="w-[30%] h-6 bg-gray-400 animate-pulse rounded-md"></div>
                  ) : (
                    <div className="flex gap-2 text-gray4 font-medium">
                      <p>Category : </p>
                      <p>{productDetail.category}</p>
                    </div>
                  )}
                  {loading ? (
                    <div className="w-[30%] h-6 bg-gray-400 animate-pulse rounded-md"></div>
                  ) : (
                    <div className="flex gap-2 text-gray4 font-medium">
                      <p>Range : </p>
                      <p>{productDetail.range}</p>
                    </div>
                  )}
                  {loading ? (
                    <div className="w-[30%] h-6 bg-gray-400 animate-pulse rounded-md"></div>
                  ) : (
                    <div className="flex gap-2 text-gray4 font-medium">
                      <p>Tags : </p>
                      <p>{productDetail.tag}</p>
                    </div>
                  )}
                  {loading ? (
                    <div className="w-[30%] h-6 bg-gray-400 animate-pulse rounded-md"></div>
                  ) : (
                    <div className="flex gap-2 text-gray4 font-medium">
                      <p>Stock : </p>
                      <p>{productDetail.stock}</p>
                    </div>
                  )}
                </div>
                {loading ? (
                  <div className="w-[90%] h-[4.5rem] mb-4 bg-gray-400 animate-pulse rounded-md"></div>
                ) : (
                  <p className="text-gray-600 mb-4">{productDetail.overview}</p>
                )}

                <div className="flex gap-3 fixed  bottom-0 left-0 bg-white shadow-[0px_-4px_10px_rgba(0,0,0,0.1)] px-3 py-3 z-10 w-full md:static md:shadow-none md:bg-transparent">
                  <div className="flex gap-5 justify-center items-center border-2 border-gray5 px-2 py-3 rounded-xl font-medium">
                    <button
                      onClick={() => setCount(count - 1)}
                      className={`px-2 ${
                        count <= 1 ? "pointer-events-none text-gray6" : ""
                      }`}
                    >
                      -
                    </button>
                    <span className="mx-2">{count}</span>
                    <button
                      onClick={() => setCount(count + 1)}
                      className={`px-2 ${
                        count >= productDetail.stock
                          ? "pointer-events-none text-gray6"
                          : ""
                      }`}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="w-full border-2 border-gray1 py-3 px-4 rounded-xl lg:hover:bg-gray3 lg:hover:text-white active:bg-gray1 active:text-white transition-colors duration-300"
                  >
                    Add to chart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-[1px]" />

          {/* Deskripsi section */}
          <div className="flex flex-col items-center gap-y-8">
            <div className="flex gap-3 justify-center font-normal text-lg">
              <button
                onClick={() => setDescActive(true)}
                className={`${
                  descActive ? "text-gray1 font-medium underline" : "text-gray5"
                } transition-all duration-150`}
              >
                Description
              </button>
              <button
                onClick={() => setDescActive(false)}
                className={`${
                  descActive
                    ? "text-gray5"
                    : " text-gray1 font-medium underline"
                } transition-all duration-150`}
              >
                Review
              </button>
            </div>
            <div className="isi px-1 py-3 w-full md:w-[70%] max-h-[25rem] overflow-y-scroll no-scrollbar">
              {descActive && (
                <div className="deskripsi transition-all duration-150">
                  <p>{productDetail.descripton}</p>
                </div>
              )}
              {descActive === false && (
                <ReviewList product={productDetail.name} />
              )}
            </div>
          </div>
          <hr className="border-[1px]" />

          {/* Related section */}
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold my-4">Related Product</h1>
            <div className=" md:w-[90%]">
              <div className="flex flex-wrap w-full justify-start content-center gap-y-1">
                {similarProduct.length > 0 ? (
                  similarProduct.map((item) => (
                    <ProductCard key={item.id} product={item} />
                  ))
                ) : (
                  <p className="text-center font-medium">No related product</p>
                )}
              </div>
            </div>
          </div>
        </div>
        {alert && (
          <div className="bg-[#ffffff5d] w-full h-full fixed z-10 translate-x-1/2 right-1/2 -translate-y-1/2 top-1/2">
            <div className="absolute w-[15rem] h-[7rem] bg-gray1 rounded-xl translate-x-1/2 right-1/2 -translate-y-1/2 top-1/2">
              <div className="flex h-full justify-center items-center">
                <p className="text-white font-semibold flex items-center gap-2">
                  <BsFillCartCheckFill className="text-2xl" /> Adding {count}{" "}
                  {count > 1 ? "items" : "item"} to cart
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SingleProduct;
