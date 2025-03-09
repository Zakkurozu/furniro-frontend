import { FaClock, FaLocationDot, FaPhone } from "react-icons/fa6";
import Badge from "../components/Badge";

const Contact = () => {
  return (
    <>
      <div className="container my-[3rem]">
        {/* section atas */}
        <div className="flex flex-col gap-y-[2rem] mb-[4rem] md:px-[5rem] lg:px-[10rem]">
          <div className="teks text-center space-y-1">
            <h2 className="text-xl font-bold capitalize md:text-2xl">
              Get in touch with us
            </h2>
            <p className="font-medium text-gray4 mx-auto md:max-w-[90%] lg:max-w-[80%]">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>
          </div>
          <div className="form md:px-[5rem] lg:px-[8rem]">
            <form action="">
              <div className="form-group mb-4">
                <div className="flex flex-col space-y-3">
                  <label className="font-medium" htmlFor="">
                    Your Name
                  </label>
                  <input
                    className="w-full p-3 text-gray2 font-medium rounded-lg border-2 border-gray4 focus:outline-primary"
                    placeholder="Add name"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="form-group mb-4">
                <div className="flex flex-col space-y-3">
                  <label className="font-medium" htmlFor="">
                    Email address
                  </label>
                  <input
                    className="w-full p-3 text-gray2 font-medium rounded-lg border-2 border-gray4 focus:outline-primary"
                    placeholder="YourEmail@xsmpl.com"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="form-group mb-4">
                <div className="flex flex-col space-y-3">
                  <label className="font-medium" htmlFor="">
                    Subject
                  </label>
                  <input
                    className="w-full p-3 text-gray2 font-medium rounded-lg border-2 border-gray4 focus:outline-primary"
                    placeholder="This optional"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="form-group mb-4">
                <div className="flex flex-col space-y-3">
                  <label className="w-full font-medium" htmlFor="">
                    Message
                  </label>
                  <textarea
                    className="w-full p-3 h-[8rem] text-gray2 font-medium rounded-lg border-2 border-gray4 focus:outline-primary"
                    placeholder="Hey, i'd like to ask about..."
                    name=""
                    id=""
                  ></textarea>
                </div>
              </div>
              <div className="form-group mb-4 mt-[2rem]">
                <div className="flex justify-center">
                  <button className="py-3 w-[50%] bg-primary text-white font-semibold">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* section bawah */}
        <div className="flex gap-x-3 justify-evenly md:max-w-[45rem] mx-auto">
          <div className="flex w-1/3 flex-col justify-start">
            <span className="text-sm md:text-xl flex items-center gap-x-2">
              <FaLocationDot />
              <p className="font-semibold">Address</p>
            </span>
            <div className="text-sm ms-5 md:text-base md:ms-7 md:w-[13rem]">
              <p>123 3rd SE Avenue, Fun Nation FN1000, Fun City</p>
            </div>
          </div>
          <div className="flex w-1/3 flex-col justify-start">
            <span className="text-sm md:text-xl flex items-center gap-x-2">
              <FaPhone />
              <p className="font-semibold">Phone</p>
            </span>
            <div className="text-sm ms-5 md:text-base md:ms-7 md:w-[13rem]">
              <p>Mobile: +(62) 123 4567</p>
              <p>Hotline: +(62) 456 7890</p>
            </div>
          </div>
          <div className="flex w-1/3 flex-col justify-start">
            <span className="text-sm md:text-xl flex items-center gap-x-2">
              <FaClock />
              <p className="font-semibold">Working Time</p>
            </span>
            <div className="text-sm ms-5 md:text-base md:ms-7 md:w-[14rem]">
              <p>Monday-Friday: 9.00 - 22.00</p>
              <p>Saturday-Sunday: 9.00 - 20.00</p>
            </div>
          </div>
        </div>
      </div>
      <Badge />
    </>
  );
};

export default Contact;
