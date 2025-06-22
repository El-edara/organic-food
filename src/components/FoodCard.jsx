import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/features/CartSlice";

const FoodCard = ({ id, name, img, price, desc, rating, handleToaster }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, img, price, rating }));
    handleToaster(name);
  };
  return (
    <div className="flex flex-col w-[300px] bg-white shadow-lg rounded-lg p-4 m-2 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 cursor-pointer border border-purple-500">
      <img
        className="w-auto h-[150px] object-cover hover:scale-105 cursor-grab transition-all duration-300 ease-in-out"
        src={img}
        alt={name}
      />
      <div className="flex justify-between items-center mt-2 mb-2 font-bold text-md">
        <h2>{name}</h2>
        <span className="text-purple-600">${price}</span>
      </div>
      <p>{desc.slice(0, 90)}...</p>
      <div className="flex justify-between items-center mt-auto pt-2">
        <span className="flex font-bold">
          <FaStar className="text-yellow-500 mt-[1px] mr-1" size={18} />
          {rating}
        </span>
        <button
          onClick={handleAddToCart}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-100 cursor-pointer font-semibold"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default FoodCard;
