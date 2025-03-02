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
// import ProductList from "../components/ProductList";
import product from "../data/products";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [count, setCount] = useState(1);
  const [descActive, setDescActive] = useState(true);
  // const [currentLocation, setCurrentLocation] = useState(
  //   window.location.pathname
  // );
  const { pathname } = useLocation();

  // useEffect(() => {
  //   const updateLocation = () => {
  //     setCurrentLocation(window.location.pathname);
  //   };
  //   window.addEventListener("popstate", updateLocation);
  //   return () => window.removeEventListener("popstate", updateLocation);
  // }, []);

  useEffect(() => {
    const updateItems = () => {
      setIsMobile(window.innerWidth <= 768 ? true : false);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
                    {imageLoop.map((item, index) => (
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
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                    className="rounded-lg overflow-hidden shadow-lg h-80 md:h-96"
                  >
                    {imageLoop.map((item, index) => (
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
                  {productDetail.name}
                </h1>
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
                <div className="flex flex-col gap-1 mb-4">
                  <div className="flex gap-2 text-gray4 font-medium">
                    <p>Category : </p>
                    <p>{productDetail.category}</p>
                  </div>
                  <div className="flex gap-2 text-gray4 font-medium">
                    <p>Range : </p>
                    <p>{productDetail.range}</p>
                  </div>
                  <div className="flex gap-2 text-gray4 font-medium">
                    <p>Tags : </p>
                    <p>{productDetail.tag}</p>
                  </div>
                  <div className="flex gap-2 text-gray4 font-medium">
                    <p>Stock : </p>
                    <p>{productDetail.stock}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{productDetail.overview}</p>

                <div className="flex gap-3">
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
                  <button className="w-full border-2 border-gray1 py-3 px-4 rounded-xl transition-colors duration-300">
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
      </section>
    </>
  );
};

export default SingleProduct;
