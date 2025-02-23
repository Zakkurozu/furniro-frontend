const Galery = () => {
  const images = [
    "/galery/1.png",
    "/galery/2.png",
    "/galery/3.png",
    "/galery/4.png",
    "/galery/5.png",
  ];
  const images2 = [
    "/galery/6.png",
    "/galery/7.png",
    "/galery/8.png",
    "/galery/9.png",
    "/galery/10.png",
  ];
  const duplicatedImages = [...images, ...images];
  const duplicatedImages2 = [...images2, ...images2];
  return (
    <>
      <div className="relative space-y-3 overflow-hidden lg:w-[80%] mx-auto max-h-[25rem]">
        <div className="flex flex-col gap-3">
          {/* Baris Pertama */}
          <div className="flex gap-3 w-max flex-nowrap animate-scroll">
            {duplicatedImages.map((src, index) => (
              <img
                key={index}
                src={src}
                className="h-auto max-h-[12rem] w-auto object-cover"
                alt={`Gallery ${index}`}
              />
            ))}
          </div>
          {/* Baris Kedua (Delay untuk efek lebih smooth) */}
          <div className="flex gap-3 w-max flex-nowrap animate-scroll2">
            {duplicatedImages2.map((src, index) => (
              <img
                key={index}
                src={src}
                className="h-auto max-h-[12rem] w-auto object-cover"
                alt={`Gallery ${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Galery;
