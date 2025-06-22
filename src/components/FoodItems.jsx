import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleToaster = (name) => toast.success(`${name} Added!`);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap justify-center lg:justify-start gap-4 mx-6 my-10 ">
        {FoodData.filter((food) =>
          category === "All"
            ? food.name.toLowerCase().includes(search.toLowerCase())
            : food.category === category &&
              food.name.toLowerCase().includes(search.toLowerCase())
        ).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            img={food.img}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            handleToaster={handleToaster}
          />
        ))}
      </div>
    </>
  );
};
export default FoodItems;
