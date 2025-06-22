import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const Succes = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" size={20} />
      ) : (
        <>
          <div className="text-3xl font-bold mb-4">Order Successfully!</div>
          <p>Your order has been successfully placed</p>
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-100 cursor-pointer font-semibold my-3 shadow-lg"
            onClick={() => navigate("/")}
          >
            Back to home page
          </button>
        </>
      )}
    </div>
  );
};
export default Succes;
