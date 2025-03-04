const Footer = () => {
  return (
    <>
      <footer className="flex flex-col border-[1px] border-t-gray6">
        <div className="atas">
          <div className="container">
            <div className="flex flex-wrap my-5 gap-y-8">
              <div className="w-full md:w-1/4">
                <div className="flex flex-col gap-y-7">
                  <h1 className="text-xl font-bold">Furniro.</h1>
                  <div className="addres font-normal text-gray4 max-w-[80%]">
                    <p>FunFun University of Fun Nation Gotham</p>
                    <p>BB 12345 Gotham</p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 md:w-1/4">
                <div className="flex flex-col gap-y-7">
                  <h2 className="font-semibold text-gray4">Links</h2>
                  <div className="links flex flex-col space-y-3 font-medium">
                    <a href="">Home</a>
                    <a href="">Shop</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                  </div>
                </div>
              </div>
              <div className="w-1/2 md:w-1/4">
                <div className="flex flex-col gap-y-7">
                  <h2 className="font-semibold text-gray4">Help</h2>
                  <div className="links flex flex-col space-y-3 font-medium">
                    <a href="">Payment Options</a>
                    <a href="">Returns</a>
                    <a href="">Privacy Police</a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/4">
                <div className="flex flex-col gap-y-7">
                  <h2 className="font-semibold text-gray4">NewsLetter</h2>
                  <form action="" className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="px-1 font-normal border-gray2 border-b-[2px] focus:outline-none"
                      name=""
                      id=""
                    />
                    <button
                      className="font-semibold uppercase border-gray2 border-b-[2px]"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div
          className={` bawah py-2 ${
            window.location.pathname.includes("/shop/product")
              ? "mb-[4.8rem] md:mb-0"
              : ""
          }`}
        >
          <div className="container">
            <div className="font-medium text-gray3">
              2025 &copy; Furniro. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
