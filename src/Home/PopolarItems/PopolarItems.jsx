import SectionTile from "../../Components/SectionTitle/SectionTile";
import MenuItem from "../../Shered/MenuItem/MenuItem";
import useMenu from "../../hooks/useMenu";

const PopularItems = () => {
  const [menu] = useMenu();

  const popular = menu.filter(item => item.category === 'popular');


  return (
  <section className="max-w-6xl mx-auto mb-10">
    <SectionTile subHading="Check it out" Hading="From our menu">

    </SectionTile>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {
        popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
      }
    </div>
  </section>
  );
};

export default PopularItems;
