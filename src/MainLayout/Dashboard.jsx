import { NavLink, Outlet } from "react-router";
import { FaCalendarAlt, FaEnvelope, FaHome, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { MdPayment, MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import useCart from "../Pages/AddToCart/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="flex container mx-auto">
            {/* dashboard side bar  */}
            <div className="w-64 min-h-screen bg-success rounded-2xl">
                <ul className="menu p-4 w-full space-y-4">
                    <li className="bg-[#32327d] text-white rounded w-full font-black">
                        <NavLink to={'/dashboard/cart'}><FaHome />User Home</NavLink>
                    </li>
                    <li className="bg-[#32327d] text-white rounded w-full">
                        <NavLink to={'/dashboard/cart'}><FaCalendarAlt />Reservation</NavLink>
                    </li>
                    <li className="bg-[#32327d] text-white rounded w-full">
                        <NavLink to={'/dashboard/cart'}><MdPayment />Payment History</NavLink>
                    </li>
                    <li className="bg-[#32327d] text-white rounded w-full">
                        <NavLink to={'/dashboard/cart'}><FaShoppingCart /> My cart <span>({cart.length})</span></NavLink>
                    </li>
                    <li className="bg-[#32327d] text-white rounded w-full">
                        <NavLink to={'/dashboard/cart'}><MdReviews />Add Review</NavLink>
                    </li>
                    <li className="bg-[#32327d] text-white rounded w-full">
                        <NavLink to={'/dashboard/cart'}><TbBrandBooking />My Booking</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li className="bg-[#32327d] text-white rounded w-full">
                        <NavLink to={'/'}><FaHome />Home</NavLink>
                    </li>
                    <li className="bg-[#32327d] text-white rounded w-full">
                        <NavLink to={'/dashboard/cart'}><GiHamburgerMenu />Menu</NavLink>
                    </li>
                    <li className="bg-[#32327d] text-white rounded w-full">
                        <NavLink to={'/dashboard/cart'}><FaShoppingBag />Shop</NavLink>
                    </li>
                    <li className="bg-[#32327d] text-white rounded w-full">
                        <NavLink to={'/dashboard/cart'}><FaEnvelope />Contact</NavLink>
                    </li>
                </ul>
            </div>

            {/* Dashboard content  */}
            <div className="flex-1 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;