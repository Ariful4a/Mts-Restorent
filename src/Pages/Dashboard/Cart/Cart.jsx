import useCart from "../../AddToCart/useCart";


const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce( (total, item) => total + item.price ,0);

  return (
    <div>
      <div className="flex flex-col text-center justify-center">
        {/* Cart Title */}
        <h2 className="text-amber-500 font-medium text-2xl">---My Cart---</h2>

        {/* Divider before text */}
        <div className="flex justify-center">
          <div className="divider divider-secondary w-[fit-content] min-w-[460px]"></div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl font-black">WANNA ADD MORE?</h1>

        {/* Divider after text */}
        <div className="flex justify-center">
          <div className="divider divider-secondary w-[fit-content] min-w-[460px]"></div>
        </div>
      </div>

      {/* Total price */}
      <div className="flex justify-evenly mb-10">
        <h2 className="text-4xl font-black">TOTAL ORDER: #{cart.length}</h2>
        <h2 className="text-4xl font-black">TOTAL PRICE: ${totalPrice}</h2>
        <button className="btn btn-success">PAY</button>
      </div>

      {/* Table with custom header */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-success">
                <th>
                  #
                </th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map(item => <tr key={item._id}>
                <th>
                 #
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt={item.name}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                 {item.name}
                </td>
                <td>{item.price}</td>
                <th>
                  <button className="btn btn-error btn-xs">Delete</button>
                </th>
              </tr>
              )
              }
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
