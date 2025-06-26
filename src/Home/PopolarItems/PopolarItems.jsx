import { useState } from "react";
import SectionTile from "../../Components/SectionTitle/SectionTile";
import MenuItem from "../../Shered/MenuItem/MenuItem";

const PopularItems = () => {
  const [menu, setMenu] = useState([]);

  useState(() => {
    fetch('menu.json')
    .then(res => res.json())
    .then(data => {
        const PopularMenu = data.filter(item => item.category === "popular");
        setMenu(PopularMenu);
    })
  }, []);

  return (
  <section>
    <SectionTile subHading="Check it out" Hading="From our menu">

    </SectionTile>
    <div className="grid grid-cols-1 md:grid-cols-2">
      {
        menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
      }
    </div>
  </section>
  );
};

export default PopularItems;
