import Bistro_Boss from "../Pages/BistroBoss/Bistro_Boss";
import Banner from "./Banner/Benner";
import Chef_section from "./CHEF_Section/Chef_section";
import Featured from "./Featured/Featured";
import Number from "./Number/Number";
import OrderSlide from "./OrderSlide/OrderSlide";
import PopularItems from "./PopolarItems/PopolarItems";
import Testomonial from "./Testomonial/Testomonial";


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
             <Number></Number>
             <Chef_section></Chef_section>
             <Featured></Featured>
             <Testomonial></Testomonial>
           </div>
        </div>
    );
};

export default Home;