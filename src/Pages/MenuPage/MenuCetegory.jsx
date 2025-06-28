import Cover from "../../Shered/Cover/Cover";
import MenuItem from "../../Shered/MenuItem/MenuItem";

const MenuCetegory = ({ items, img, title }) => {
  return (
    <div>
       {title && <Cover img={img} title={title}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCetegory;
