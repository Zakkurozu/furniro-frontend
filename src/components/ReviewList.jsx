import Review from "./Review";

const ReviewList = ({ product }) => {
  const reviews = [
    {
      id: 1,
      name: "Luffy",
      img: "https://i.pinimg.com/736x/55/80/69/558069868e9832a5d8e73ea751a7aa08.jpg",
      text: "Produk ini sangat bagus dan sesuai dengan harapan. Saya sangat puas dengan kualitasnya.",
    },
    {
      id: 2,
      name: "Zoro",
      img: "https://i.pinimg.com/736x/1c/c7/ae/1cc7ae89859253f5149b66fc0f0037e6.jpg",
      text: "Produk ini sangat bagus dan sesuai dengan harapan. Saya sangat puas dengan kualitasnya. Pengiriman cepat dan pelayanan ramah. Saya akan merekomendasikan produk ini kepada teman dan keluarga. Layanan pelanggan sangat responsif ketika saya memiliki pertanyaan tentang produk. Pengalaman berbelanja yang menyenangkan dan akan kembali berbelanja di sini lagi. Kualitas produk sesuai harga dan tahan lama. Sangat senang dengan pembelian ini dan akan menjadi pelanggan setia.",
    },
    {
      id: 3,
      name: "Sanji",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAue8UB2Cnc-Na51luxgmklhK5PFIM2efWoYofPQ7W-LffFHum8nTbfrYIuRj9j0QQSME&usqp=CAU",
      text: "Produk ini cukup bagus, tapi ada beberapa kekurangan minor. Secara keseluruhan masih puas.",
    },
    {
      id: 4,
      name: "Chopper",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR34jFCvh-iFoTNhyq6XmwNGS19N-EO2Xcfingc7527obHH1xshk4gYH24MK4qS7_UgMQQ&usqp=CAU",
      text: "Produk ini bagus dan sesuai dengan apa yang saya butuhkan, meskipun secara pengiriman bisa dibilang lambat karena ekspedisinya tapi syukur tidak ada kecacatan atau kerusakan pada produk",
    },
  ];
  return (
    <>
      <div>
        <div className="review w-full transition-all duration-150">
          <div className="flex flex-col w-full space-y-3">
            {reviews.map((item, index) => (
              <Review
                product={product}
                key={index}
                name={item.name}
                text={item.text}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewList;
