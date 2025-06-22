import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import ItemsCard from "./ItemsCard";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activerCart, setActiverCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQty = cartItems.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div
        className={`select-none fixed z-50 top-0 right-0 h-screen bg-white w-2/3  p-5 shadow-lg ${
          activerCart ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-400 ease-in-out`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiverCart(!activerCart)}
            size={25}
            className="rounded-full mr-5 lg:mr-0 cursor-pointer bg-red-500 hover:scale-105 hover:bg-red-600  text-white transition duration-100 ease-in-out"
          />
        </div>
        <hr className="my-2 w-full text-purple-800 mb-4" />
        {cartItems.length > 0 ? (
          cartItems.map((food, index) => (
            <ItemsCard
              key={Math.random(index)}
              id={food.id}
              name={food.name}
              img={food.img}
              price={food.price}
              rating={food.rating}
              qty={food.qty}
            />
          ))
        ) : (
          <p className="text-gray-800">No items in cart</p>
        )}
        <div className="absolute bottom-0 w-8/9 bg-white ">
          <h3 className="text-lg font-semibold text-gray-800">
            Items: {totalQty}
          </h3>
          <h3 className="text-lg font-semibold text-gray-800">
            Total Amount: {totalPrice}
          </h3>
          <hr className="my-2 w-full" />
          <button
            onClick={() => navigate("/succes")}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-100 cursor-pointer font-semibold my-3 w-full shadow-lg"
          >
            Checkout
          </button>
        </div>
      </div>
      <FiShoppingCart
        onClick={() => setActiverCart(!activerCart)}
        className={`fixed bottom-10 right-10 z-49 bg-white p-3 rounded-xl shadow-lg cursor-pointer hover:scale-110 hover:bg-purple-500 transition duration-100 ease-in-out hover:text-white border border-purple-500 text-purple-500 ${
          totalQty > 0 && "animate-bounce delay-300 transition-all"
        }`}
        size={70}
      />
    </div>
  );
};
export default Cart;
