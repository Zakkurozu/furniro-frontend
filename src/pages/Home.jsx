import { useState } from "react";
import Badge from "../components/Badge";
import Galery from "../components/Galery";
import ProductList from "../components/ProductList";
import Range from "../components/Range";
import Sweeper from "../components/Sweeper";

const Home = () => {
  const [showBtn, setShowBtn] = useState(false);

  return (
    <>
      {/* hero section start */}
      <section className="hero">
        <div className="relative bg-[image:url('/public/bg.png')] bg-cover bg-center flex w-full h-[75vh] object-cover object-center lg:h-[85vh]">
          <div className="container relative">
            <div className="absolute px-5 py-10 bg-[#fff3e39a] bottom-20 right-10 rounded-md md:right-16 md:px-7 md:py-12">
              <div className="flex flex-col gap-3 font-poppins md:gap-y-2">
                <div className="atas">
                  <p
                    className="font-semibold text-gray1 tracking-[3px] 
                  md:text-[1.2rem]"
                  >
                    New Arrival
                  </p>
                </div>
                <div className="tengah space-y-[2px] md:space-y-[6px]">
                  <p
                    className="font-bold text-[1.5rem] text-primary w-[12rem] 
                  md:text-[1.7rem] md:w-[15rem]
                  lg:text-[2rem] lg:w-[18rem] lg:font-extrabold"
                  >
                    Discover Our New Collection
                  </p>
                  <p className="font-medium text-[.875rem] text-gray1 w-[18rem] md:text-[1.075rem] md:w-[22rem] lg:w-[25rem]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium at laborum iste amet aliquid doloribus.
                  </p>
                </div>
                <div className="bawah">
                  <button className="bg-primary py-3 px-6 md:py-4 md:px-8 md:mt-2 lg:px-10">
                    <span className="text-white font-bold uppercase">
                      Buy now
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end */}

      {/* pertama section start */}
      <section className="pertama my-[3rem]">
        <div className="container space-y-8">
          <div className="teks">
            <div className="flex flex-col items-center">
              <h1
                className="font-bold text-[1.3rem] text-gray1 
              md:text-[1.5rem] 
              lg:text-[1.7rem]"
              >
                Browse The Range
              </h1>
              <h3 className="text-center font-normal text-[.9rem] text-gray3 w-[80%] md:text-[1.1rem] md:w-[50%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </div>
          </div>
          <div className="konten">
            <div className="flex">
              <Range />
            </div>
          </div>
        </div>
      </section>
      {/* pertama section end */}

      {/* section kedua start */}
      <section className="kedua my-[3rem]">
        <div className="container space-y-4 md:space-y-8">
          <div className="teks">
            <h1
              className="text-center font-bold text-[1.3rem] text-gray1 
            md:text-[1.5rem]
            lg:text-[1.7rem]"
            >
              Our Products
            </h1>
          </div>
          <div className="konten">
            <ProductList showBtn={showBtn} />
          </div>
          {!showBtn && (
            <div className="tombol w-full flex">
              <button
                onClick={() => setShowBtn(true)}
                className="mx-auto mt-5 px-6 py-2 border-[1px] border-primary text-primary text-[.9rem] font-semibold"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </section>
      {/* section kedua end */}

      {/* section ketiga start */}
      <section className="ketiga my-[3rem]">
        <div className="bg-bgSec">
          <div className="container">
            <div className="flex flex-wrap justify-center items-center py-8 gap-y-5">
              <div className="w-full md:w-1/2 md:ps-10 lg:ps-16">
                <div className="flex flex-col px-2 gap-y-3">
                  <div className="teks space-y-1 md:space-y-2">
                    <h1
                      className="font-bold text-gray1 text-[1.3rem] max-w-[70%] 
                    md:text-[1.5rem] md:max-w-[80%]
                    lg:text-[2.2rem] lg:max-w-[70%]"
                    >
                      50+ Beautiful rooms inspiration
                    </h1>
                    <p
                      className="text-gray3 font-semibold text-[.95rem] max-w-[80%] 
                    md:max-w-[100%]
                    lg:text-[1.1rem] lg:max-w-[80%]"
                    >
                      Our designer already made a lot of beautiful prototipe of
                      rooms that inspire you
                    </p>
                  </div>
                  <div className="tombol">
                    <button className="bg-primary text-putih text-[.85rem] font-semibold px-5 py-3">
                      Explore more
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2">
                <Sweeper />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section ketiga end */}

      {/* section keempat start */}
      <section className="keempat my-[3rem]">
        <div className="container space-y-7">
          <div className="teks text-center">
            <p className="font-semibold text-[.9rem] text-gray3 lg:text-[1rem]">
              Share your setup with
            </p>
            <h1 className="font-bold text-[1.4rem] text-gray1 lg:text-[1.7rem]">
              #FurniroFurniture
            </h1>
          </div>
          <Galery />
        </div>
      </section>
      {/* section keempat end */}
      <Badge />
    </>
  );
};

export default Home;
