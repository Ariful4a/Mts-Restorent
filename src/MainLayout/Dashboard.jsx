import { NavLink, Outlet } from "react-router";
import { FaShoppingCart } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar  */}
            <div className="w-64 min-h-screen bg-orange-500 rounded-2xl">
                <ul className="menu p-4">
                    <li>
                        
                        <NavLink to={'/dashboard/cart'}><FaShoppingCart /> My cart</NavLink>
                    </li>
                </ul>
            </div>

            {/* Dashboard content  */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;