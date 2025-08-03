import FoodCard from "../FoodCart/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-4 gap-8 mt-10">
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;