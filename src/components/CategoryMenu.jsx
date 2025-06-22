import { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { setCategory } from "../app/features/CategorySlice";
import { useDispatch, useSelector } from "react-redux";
const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };
  useEffect(() => {
    listUniqueCategories();
  }, []);

  return (
    <div className="w-full relative ">
      <h2 className="text-xl font-semibold mb-3">Find the best food</h2>
      <div className="flex gap-3 overflow-x-auto whitespace-nowrap scroll-smooth pb-2">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-4 py-2 rounded-lg bg-gray-200 hover:bg-purple-500 hover:text-white transition duration-50 cursor-pointer font-semibold ${
            selectedCategory === "All" && "bg-purple-500 text-white"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            onClick={() => dispatch(setCategory(category))}
            key={index}
            className={`px-4 py-2 rounded-lg bg-gray-200 hover:bg-purple-500 hover:text-white transition duration-50 cursor-pointer font-semibold ${
              selectedCategory === category && "bg-purple-500 text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
export default CategoryMenu;
