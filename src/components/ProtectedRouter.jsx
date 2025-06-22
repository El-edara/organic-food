import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ element }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return cartItems.length > 0 ? element : <Navigate to={"/"} />;
};
export default ProtectedRouter;
