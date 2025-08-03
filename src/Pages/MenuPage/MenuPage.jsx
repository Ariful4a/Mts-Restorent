import SectionTile from '../../Components/SectionTitle/SectionTile';
import Cover from '../../Shered/Cover/Cover';
import menuImg from '../../assets/menu/menu-bg.png'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../hooks/useMenu';
import MenuCetegory from './MenuCetegory';

const MenuPage = () => {
    const [menu] = useMenu();

    const offered = menu.filter(item => item.category === "offered");
    const desserts = menu.filter(item => item.category === "dessert");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");

    return (
        <div>
            <Cover img={menuImg} title={"Our Menu"}></Cover>
          <div className='max-w-6xl mx-auto'>
              <SectionTile subHading={"Don't miss"} Hading={"TODAY'S OFFER"}></SectionTile>
            {/* Offered menu  */}
            <MenuCetegory items={offered}></MenuCetegory>

            <MenuCetegory items={desserts} img={dessertImg} title={"desserts"}></MenuCetegory>
            <MenuCetegory items={pizzas} img={pizzaImg} title={"pizzas"}></MenuCetegory>
            <MenuCetegory items={salads} img={saladImg} title={"salads"}></MenuCetegory>
            <MenuCetegory items={soups} img={soupImg} title={"soups"}></MenuCetegory>
          </div>

        </div>
    );
};

export default MenuPage;