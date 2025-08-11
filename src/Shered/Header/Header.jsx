import { Link, useNavigate } from "react-router-dom";

import { ShoppingCartIcon } from "@heroicons/react/24/outline"; // Heroicons
import useCart from "../../Pages/AddToCart/useCart";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const [cart] = useCart();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menuPage">Menu</Link>
      </li>
      <li>
        <Link to="/orderPage/salad">Order</Link>
      </li>
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="navbar py-4">
          {/* Logo */}
          <div className="navbar-start">
            <Link
              to="/"
              className="text-2xl font-bold text-white hover:text-primary transition"
            >
              Foodies<span className="text-red-500">Zone</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-4 px-1 text-lg">
              {navLinks}
            </ul>
          </div>

          {/* Right Section */}
          <div className="navbar-end flex items-center gap-4">
            {/* Add to Cart Icon */}
            <Link to="/dashboard/cart" className="relative">
              <ShoppingCartIcon className="w-7 h-7 text-white hover:text-red-400 transition" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cart.length}
                </span>
              )}
            </Link>

            {/* User Info */}
            {user && (
              <div className="hidden lg:flex items-center gap-3">
                <img
                  src={user?.photoURL || "/default-avatar.png"}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white shadow"
                />
                <span className="font-semibold text-base">
                  {user.displayName}
                </span>
              </div>
            )}

            {/* Auth Buttons */}
            {user ? (
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-error text-white px-4"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="btn btn-sm btn-outline text-white border-white px-4"
              >
                Login
              </Link>
            )}

            {/* Mobile Dropdown */}
            <div className="dropdown dropdown-end lg:hidden">
              <label
                tabIndex={0}
                className="btn btn-ghost"
                aria-label="Open menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 text-black rounded-box w-52"
              >
                {navLinks}
                <li>
                  <Link to="/dashboard/cart" className="flex items-center gap-2">
                    <ShoppingCartIcon className="w-5 h-5" /> Cart{cart.length}
                  </Link>
                </li>
                {user && (
                  <li className="mt-2">
                    <span className="font-semibold">{user.displayName}</span>
                  </li>
                )}
                {user ? (
                  <li>
                    <button
                      onClick={handleLogout}
                      className="btn btn-sm btn-error text-white mt-2"
                    >
                      Logout
                    </button>
                  </li>
                ) : (
                  <li>
                    <Link to="/login" className="btn btn-sm btn-outline mt-2">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
