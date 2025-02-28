import { useState, useRef, useEffect } from "react";

const Review = ({ name, text, img, product }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTextClamped, setIsTextClamped] = useState(false);
  const textRef = useRef(null);

  const checkTextClamped = () => {
    const element = textRef.current;
    if (element) {
      const isClamped = element.scrollHeight > element.clientHeight;
      setIsTextClamped(isClamped);
    }
  };

  useEffect(() => {
    checkTextClamped();

    window.addEventListener("resize", checkTextClamped);

    return () => {
      window.removeEventListener("resize", checkTextClamped);
    };
  }, [text]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className=" space-y-1 bg-putih p-3 w-full rounded-lg shadow-md">
        <div className="flex justify-start gap-3 items-center">
          <img
            className="w-10 h-10 rounded-full border-[1px] object-cover object-center"
            src={img}
            alt=""
          />
          <h2 className="font-medium text-gray3">{name}</h2>
        </div>
        <p className="text-gray4 font-medium">Produk: {product}</p>
        <div className="">
          <p
            ref={textRef}
            className={`${
              isExpanded ? "" : "line-clamp-2"
            } transition-all duration-200`}
          >
            {text}
          </p>
          {isTextClamped && (
            <button onClick={toggleExpand} className="text-primary font-medium">
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
