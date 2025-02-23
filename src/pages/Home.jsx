import img1 from "../assets/img/s1img1.png";
import img2 from "../assets/img/s1img2.png";
import img3 from "../assets/img/s1img3.png";
import Galery from "../components/Galery";
import ProductList from "../components/ProductList";
import Sweeper from "../components/Sweeper";

const Home = () => {
  return (
    <>
      {/* hero section start */}
      <section className="hero">
        <div className="relative bg-[image:url('/public/bg.png')] bg-cover bg-center flex w-full h-[75vh] object-cover object-center">
          <div className="container relative">
            <div className="absolute px-5 py-10 bg-[#fff3e39a] top-[65%] -translate-y-1/2 right-10 md:right-16 rounded-md">
              <div className="bg"></div>
              <div className="flex flex-col gap-3 font-poppins">
                <div className="atas">
                  <p className="font-semibold text-gray1 tracking-[3px] md:text-[1.2rem]">
                    New Arrival
                  </p>
                </div>
                <div className="tengah space-y-[2px]">
                  <p className="font-bold text-[1.5rem] text-primary w-[12rem] md:text-[1.7rem] md:w-[15rem]">
                    Discover Our New Collection
                  </p>
                  <p className="font-medium text-[.875rem] text-gray1 w-[18rem]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium at laborum iste amet aliquid doloribus.
                  </p>
                </div>
                <div className="bawah">
                  <button className="bg-primary py-3 px-6">
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
              <h1 className="font-bold text-[1.3rem] text-gray1">
                Browse The Range
              </h1>
              <h3 className="text-center font-normal text-[.9rem] text-gray3 w-[80%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
            </div>
          </div>
          <div className="konten">
            <div className="flex">
              <div className="flex w-full justify-center items-center gap-2 text-gray1">
                <div className="w-1/3 space-y-2">
                  <img className="w-full" src={img1} alt="" />
                  <p className="font-semibold text-center">Dining</p>
                </div>
                <div className="w-1/3 space-y-2">
                  <img className="w-full" src={img2} alt="" />
                  <p className="font-semibold text-center">Living</p>
                </div>
                <div className="w-1/3 space-y-2">
                  <img className="w-full" src={img3} alt="" />
                  <p className="font-semibold text-center">Bedrom</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* pertama section end */}

      {/* section kedua start */}
      <section className="kedua my-[3rem]">
        <div className="container space-y-3">
          <div className="teks">
            <h1 className="text-center font-bold text-[1.3rem] text-gray1">
              Our Products
            </h1>
          </div>
          <div className="konten">
            <ProductList />
          </div>
          <div className="tombol w-full flex">
            <button className="mx-auto mt-5 px-6 py-2 border-[1px] border-primary text-primary text-[.9rem] font-semibold">
              Show more
            </button>
          </div>
        </div>
      </section>
      {/* section kedua end */}

      {/* section ketiga start */}
      <section className="ketiga my-[3rem]">
        <div className="bg-bgSec">
          <div className="container">
            <div className="flex flex-wrap justify-center items-center py-8 gap-y-5">
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col px-2 gap-y-3">
                  <div className="teks space-y-1">
                    <h1 className="font-bold text-gray1 text-[1.3rem] max-w-[70%] ">
                      50+ Beautiful rooms inspiration
                    </h1>
                    <p className="text-gray3 text-[.95rem] max-w-[80%]">
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
              <div className="w-full lg:w-1/2 px-2">
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
            <p className="font-semibold text-[.9rem] text-gray3">
              Share your setup with
            </p>
            <h1 className="font-bold text-[1.4rem] text-gray1">
              #FurniroFurniture
            </h1>
          </div>
          <Galery />
        </div>
      </section>
      {/* section keempat end */}
    </>
  );
};

export default Home;
