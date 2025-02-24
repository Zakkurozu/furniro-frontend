const Badge = () => {
  const content = [
    {
      id: 1,
      badge: "High Quality",
      isi: "crafted from top material",
      gambar: "/trophy.png",
    },
    {
      id: 2,
      badge: "Warranty Protection",
      isi: "Over 2 years",
      gambar: "/guarantee.png",
    },
    {
      id: 3,
      badge: "Free Shipping",
      isi: "Order over 150$",
      gambar: "/shipping.png",
    },
    {
      id: 4,
      badge: "24/7 Support",
      isi: "Dedicated support",
      gambar: "/customer-support.png",
    },
  ];
  return (
    <>
      <div className="bg-[#FAF3EA] py-5">
        <div className="container">
          <div className="flex flex-wrap justify-between gap-y-4">
            {content.map((item, index) => (
              <div
                key={index}
                className="w-1/2 md:w-1/4 flex items-center md:justify-center gap-x-1"
              >
                <img
                  src={item.gambar}
                  alt={`Gambar ${item.badge}.png`}
                  className="w-[20%]"
                />
                <div className="teks pe-2">
                  <p className="font-semibold md:text-[1rem]">{item.badge}</p>
                  <p className="font-semibold text-[.8rem] text-gray4">
                    {item.isi}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Badge;
