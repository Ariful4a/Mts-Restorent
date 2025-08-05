import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  const { user } = useAuth();
  const navigate = useNavigate()

  const handleAddToCart = (food) => {
    console.log(food);

    if (user && user.email) {
        // Send database cart item 
    } else {
      Swal.fire({
        title: "You are not login right now",
        text: "Please login first!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
        //  Send login page 
        navigate('/login')
        }
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
          <span className="text-sm bg-gray-900 text-white px-3 py-1 rounded-full">
            ${price}
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {recipe.length > 80 ? recipe.slice(0, 80) + "..." : recipe}
        </p>
        <div className="mt-4 text-right">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-sm btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
