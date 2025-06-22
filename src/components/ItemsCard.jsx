import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDelete, MdWavingHand } from "react-icons/md";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../app/features/CartSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const ItemsCard = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();
  const handleRemoveClick = () => {
    dispatch(removeFromCart(id));
    toast(`${name} Removed!`, {
      icon: <MdWavingHand />,
    });
  };
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        onClick={handleRemoveClick}
        className=" absolute right-7 text-gray-700 cursor-pointer hover:scale-110 hover:text-purple-500"
      />
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div className=" leading-5">
        <h2 className="text-gray-800 font-bold">{name}</h2>
        <div className="flex justify-between">
          <span className="text-purple-500 font-bold">${price}</span>
          <div className=" flex justify-center items-center gap-2 absolute right-7">
            <FiMinus
              onClick={() =>
                qty > 1
                  ? dispatch(decrementQty({ id }))
                  : dispatch(removeFromCart(id))
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-purple-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <FiPlus
              onClick={() => dispatch(incrementQty({ id }))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-purple-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemsCard;
