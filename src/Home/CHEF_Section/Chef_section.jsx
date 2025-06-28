import img1 from "../../assets/home/slide5.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide1.jpg";
import SectionTile from "../../Components/SectionTitle/SectionTile";

const Chef_section = () => {
  const cards = [
    {
      img: img1,
      title: "Chef's Special 1",
      description: "Delicious handcrafted meal prepared by our top chef.",
    },
    {
      img: img3,
      title: "Chef's Special 2",
      description: "Savor the taste of authentic gourmet cuisine.",
    },
    {
      img: img4,
      title: "Chef's Special 3",
      description: "A unique blend of flavors from around the world.",
    },
  ];

  return (
    <div>
        <SectionTile subHading={"Should Try"} Hading={"CHEF RECOMMENDS"}></SectionTile>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto p-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-md hover:shadow-lg transition duration-300"
          >
            <figure className="w-full h-60 overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body flex flex-col justify-between">
              <h2 className="card-title">{card.title}</h2>
              <p>{card.description}</p>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-outline border-0 border-b-2 bg-black text-white border-amber-300">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef_section;
