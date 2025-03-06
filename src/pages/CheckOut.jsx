import Badge from "../components/Badge";
import ProductPay from "../components/ProductPay";

const CheckOut = () => {
  return (
    <>
      {/* hero start */}
      <div className="bg-[image:url('/bg2.jpg')] h-[8rem] bg-cover bg-center md:h-[10rem]">
        <div className="flex justify-center items-center w-full h-full bg-[#294d3246]">
          <div className="flex flex-col items-center text-white">
            <img src="/logo.png" className="w-[2rem]" alt="" />
            <h1 className="text-2xl font-semibold">Checkout</h1>
            <p className="flex items-center text-sm">Complete your order</p>
          </div>
        </div>
      </div>
      {/* hero end */}

      {/* content start */}
      <section className="my-4">
        <div className="container">
          <div className="flex flex-wrap justify-between items-start gap-y-3">
            <div className="w-full md:px-2">
              <h2 className="font-bold text-2xl">Billing details</h2>
            </div>

            {/* kiri atau bawah */}
            <div className="w-full md:w-1/2 order-2 md:order-1 md:px-2">
              <div className=" p-2">
                <form action="">
                  <div className="form-group mb-4 flex gap-x-4">
                    <div className="w-1/2">
                      <div className="flex flex-col space-y-3">
                        <label className="w-full font-medium" htmlFor="">
                          First Name
                        </label>
                        <input
                          className="w-full p-3 text-gray2 font-medium rounded-lg border-2 border-gray4 focus:outline-primary"
                          type="text"
                          name=""
                          id=""
                        />
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="flex flex-col space-y-3">
                        <label className="w-full font-medium" htmlFor="">
                          Last Name
                        </label>
                        <input
                          className="w-full p-3 text-gray2 font-medium rounded-lg border-2 border-gray4 focus:outline-primary"
                          type="text"
                          name=""
                          id=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <div className="flex flex-col space-y-3">
                      <label className="font-medium" htmlFor="">
                        Phone Number
                      </label>
                      <input
                        className="w-full p-3 text-gray2 font-medium rounded-lg border-2 border-gray4 focus:outline-primary"
                        type="number"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <div className="flex flex-col space-y-3">
                      <label className="font-medium" htmlFor="">
                        Email Address
                      </label>
                      <input
                        className="w-full p-3 text-gray2 font-medium rounded-lg border-2 border-gray4 focus:outline-primary"
                        type="email"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <div className="flex flex-col space-y-3">
                      <label className="w-full font-medium" htmlFor="">
                        Address
                      </label>
                      <textarea
                        className="w-full p-3 h-[6rem] text-gray2 font-medium rounded-lg border-2 border-gray4 focus:outline-primary"
                        name=""
                        id=""
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <div className="flex flex-col space-y-3">
                      <label className="font-medium" htmlFor="">
                        Zip code
                      </label>
                      <input
                        className="w-full p-3 text-gray2 font-medium rounded-lg border-2 border-gray4 focus:outline-primary"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* kanan atau atas */}
            <div className="w-full md:w-1/2 order-1 lg:ps-[5rem] md:order-2">
              <ProductPay />
            </div>
          </div>
        </div>
      </section>
      {/* content end */}
      <Badge />
    </>
  );
};

export default CheckOut;
