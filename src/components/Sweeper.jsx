import { FaArrowRight } from "react-icons/fa";
import sld1 from "../assets/img/sld1.png";
import sld2 from "../assets/img/sld2.png";
import sld3 from "../assets/img/sld3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Sweeper = () => {
  const sliderData = [
    {
      id: 1,
      img: sld1,
      title: "Inner Pace",
      category: "Bed Room",
    },
    {
      id: 2,
      img: sld2,
      title: "Modern Comfort",
      category: "Living Room",
    },
    {
      id: 3,
      img: sld3,
      title: "Elegant Simplicity",
      category: "Kitchen",
    },
  ];

  return (
    <div className="swiper-nav-wrapper relative">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={false}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        className="w-full relative"
      >
        {sliderData.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className={`flex flex-col !w-[70%] !h-[22rem] bg-gray-700 overflow-hidden lg:!h-[32rem]`}
          >
            <div className="gambar flex w-full h-full relative overflow-hidden">
              <img
                className="absolute w-full h-full object-cover object-center"
                src={item.img}
                alt={item.title}
              />
              <div
                className="absolute bottom-8 left-4 flex items-end 
              lg:left-6 lg:bottom-10"
              >
                <div className="flex flex-col bg-[#f4f4f4c2] gap-y-1 p-4 lg:min-w-[13rem]">
                  <p className="flex items-center gap-x-1 text-gray3 text-[.9rem] lg:text-[1rem]">
                    0{index + 1}{" "}
                    <span className="w-[15px] h-[2px] bg-gray3"></span>{" "}
                    {item.category}
                  </p>
                  <h3 className="text-[1.1rem] font-semibold md:text-[1rem] lg:text-[1.3rem]">
                    {item.title}
                  </h3>
                </div>
                <div>
                  <button className="bg-primary py-3 px-3 text-white">
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="custom-next absolute z-10 -right-2 top-1/2 -translate-y-1/2 bg-putih text-primary shadow-md rounded-full p-3">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Sweeper;
