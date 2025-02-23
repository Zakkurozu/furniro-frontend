import img1 from "../assets/img/s1img1.png";
import img2 from "../assets/img/s1img2.png";
import img3 from "../assets/img/s1img3.png";

const Range = () => {
  const Img = [
    { id: 1, img: img1, tittle: "Dining" },
    { id: 2, img: img2, tittle: "Living" },
    { id: 3, img: img3, tittle: "Bedroom" },
  ];

  return (
    <>
      <div className="flex mx-auto w-full justify-center items-center gap-2 text-gray1 md:gap-4 md:w-[85%]">
        {Img.map((item, index) => (
          <div key={index} className="w-1/3 space-y-2">
            <img className="w-full rounded-md" src={item.img} alt="" />
            <p className="font-semibold text-center md:text-[1.2rem]">
              {item.tittle}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Range;
