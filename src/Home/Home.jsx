import Bistro_Boss from "../Pages/BistroBoss/Bistro_Boss";
import Banner from "./Banner/Benner";
import OrderSlide from "./OrderSlide/OrderSlide";
import PopularItems from "./PopolarItems/PopolarItems";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-6xl mx-auto">
                <OrderSlide></OrderSlide>
            </div>
           <div className="mt-15">
             <Bistro_Boss></Bistro_Boss>
             <div>
                <PopularItems></PopularItems>
             </div>
           </div>
        </div>
    );
};

export default Home;