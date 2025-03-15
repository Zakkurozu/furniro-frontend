import { CgBrowse } from "react-icons/cg";
import { LuClipboardCheck } from "react-icons/lu";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import Badge from "../components/Badge";

const About = () => {
  const content = [
    {
      id: 1,
      title: "Find your style",
      desc: "Browse our exclusive furniture collections design to match your home.",
      icon: <CgBrowse />,
    },
    {
      id: 2,
      title: "Review & Decide",
      desc: "Check product details, read reviews, and choose with confidence.",
      icon: <LuClipboardCheck />,
    },
    {
      id: 3,
      title: "Place Your Order",
      desc: "Enjoy seamless checkout with secure payment options for a smooth transaction.",
      icon: <MdShoppingCartCheckout />,
    },
    {
      id: 4,
      title: "Receive & Enjoy",
      desc: "Sit back and relax while we deliver your furniture straight to you.",
      icon: <FiPackage />,
    },
  ];

  return (
    <>
      <div className="bg-[image:url('/bg2.jpg')] h-[8rem] bg-cover bg-center md:h-[10rem]">
        <div className="flex justify-center items-center w-full h-full bg-[#294d3246]">
          <div className="flex flex-col items-center text-white">
            <img src="/logo.png" className="w-[2rem]" alt="" />
            <h1 className="text-2xl font-semibold">About Us</h1>
            <p className="flex items-center text-sm">
              Get in touch, and know us well
            </p>
          </div>
        </div>
      </div>

      {/* content start */}

      <section className="teks my-[2.2rem]">
        <div className="flex flex-col justify-center items-center gap-y-1 text-gray1">
          <h1 className="text-lg font-bold uppercase">our journey</h1>
          <p className="font-medium max-w-[70%] text-center text-[15px]">
            Transforming Houses into Homes with Style & Comfort.
          </p>
        </div>
      </section>

      <section className="my-[2.2rem] max-w-[100rem] mx-auto">
        <div className="flex flex-wrap items-center gap-y-8">
          <div className="w-full pe-10 md:w-1/2">
            <div
              className="py-5 rounded-br-[8rem] w-[90%] bg-primary relative 
              lg:rounded-br-[12rem]"
            >
              <div
                className="rounded-br-[8rem] w-[108%] h-[13rem] overflow-hidden 
                lg:rounded-br-[12rem] lg:w-[105%] lg:h-[18rem]"
              >
                <img
                  src="/bg.png"
                  className="h-full w-full object-cover object-center"
                  alt=""
                />
              </div>
              <div className="bg-[#fff3e3] py-4 rounded-lg w-fit absolute top-10 right-0 translate-x-14">
                <div className="flex justify-center items-center">
                  <h3 className="text-xl text-primary font-bold w-[45%]">
                    Furniro Furniture
                  </h3>
                  <img src="/logo.svg" className="w-[45px]" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 md:px-6">
            <div className="flex flex-col gap-y-2 text-gray1 lg:w-[80%]">
              <h2 className="text-2xl font-bold">
                Innovative Living with Furniro
              </h2>
              <hr className="border-primary border-[1px] w-[50%]" />
              <p className="font-medium lg:text-lg">
                Combining modern design and cutting-edge technology, Furniro
                delivers furniture solutions that are both stylish and
                functional. Every piece is crafted with precision to ensure your
                comfort and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="teks mt-[4rem] my-[2rem]">
        <div className="flex flex-col justify-center items-center gap-y-1 text-gray1">
          <h1 className="text-lg font-bold uppercase">
            Easy Shopping Experience
          </h1>
          <p className="font-medium max-w-[70%] text-center text-[15px]">
            From browsing to delivery - simple, fast, and convenient.
          </p>
        </div>
      </section>

      <section className="my-[2.5rem]">
        <div className="container">
          <div className="flex flex-wrap gap-y-10 px-12 lg:px-0">
            {content.map((item, index) => (
              <div
                key={index}
                className="w-full  
                        md:w-1/2 md:px-4
                        lg:w-1/4 lg:px-3"
              >
                <div className="card h-[18rem] px-3 flex justify-center items-center bg-[#fff3e3] rounded-lg drop-shadow-lg group hover:bg-primary hover:-translate-y-3 transition-all duration-500 ease-in-out">
                  <div className="flex flex-col justify-center items-center gap-y-3">
                    <div className="bg-primary w-[50px] h-[50px] rounded-full flex items-center justify-center group-hover:bg-[#fff3e3] transition-all duration-500 ease-in-out">
                      <div className="text-[#fff3e3] text-3xl font-semibold group-hover:text-primary transition-all duration-500 ease-in-out">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-[22px] text-gray2 font-semibold group-hover:text-[#fff3e3] transition-all duration-500 ease-in-out">
                      {item.title}
                    </h3>
                    <p className="text-center text-[18px] text-gray4 font-medium group-hover:text-[#fff3e3] transition-all duration-500 ease-in-out">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* content end */}
      <Badge />
    </>
  );
};

export default About;
