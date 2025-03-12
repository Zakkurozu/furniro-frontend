import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/img/s1img1.png";
import img2 from "../assets/img/s1img2.png";
import img3 from "../assets/img/s1img3.png";

const Range = () => {
  const navigate = useNavigate();
  const Img = [
    { id: 1, img: img1, name: "dining" },
    { id: 2, img: img2, name: "living" },
    { id: 3, img: img3, name: "bedroom" },
  ];

  return (
    <>
      <div className="flex mx-auto w-full justify-center items-center gap-2 text-gray1 md:gap-4 md:w-[85%]">
        {Img.map((item, index) => (
          <Link
            onClick={() =>
              setTimeout(() => navigate(`/shop/range/${item.name}`), 300)
            }
            key={index}
            className="w-1/3 space-y-2 pb-2 rounded-xl group hover:bg-gray6 hover:shadow-lg hover:scale-[98%] transition-all duration-[600ms] ease-in-out"
          >
            <div className="w-full rounded-md overflow-hidden ">
              <img
                className="object-cover object-center group-hover:scale-110 group-hover:brightness-75 transition-all duration-[600ms] ease-in-out"
                src={item.img}
                alt=""
              />
            </div>
            <p className="font-semibold text-center md:text-[1.3rem] capitalize">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Range;
