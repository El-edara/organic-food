import { useState } from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const ITEMS_PER_PAGE = 8; // Number of items per page

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const [currentPage, setCurrentPage] = useState(1);

  const handleToaster = (name) => toast.success(`${name} Added!`);

  // Filter food items based on category and search
  const filteredFoods = FoodData.filter((food) =>
    category === "All"
      ? food.name.toLowerCase().includes(search.toLowerCase())
      : food.category === category &&
        food.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredFoods.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredFoods.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle previous/next
  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      {/* Food Items Grid */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-6 mx-6 my-10">
        {currentItems.length > 0 ? (
          currentItems.map((food) => (
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
          ))
        ) : (
          <div className="w-full text-center py-10">
            <h3 className="text-xl font-semibold text-gray-600">
              No food items found matching your criteria
            </h3>
          </div>
        )}
      </div>

      {/* Pagination - Only show if there are items */}
      {filteredFoods.length > ITEMS_PER_PAGE && (
        <div className="max-w-1/2 mx-auto flex flex-col sm:flex-row justify-between items-center mt-8 mb-4 px-4">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg transition duration-100 font-semibold ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
            }`}
          >
            Prev
          </button>

          <div className="flex flex-wrap justify-center gap-2 my-4 sm:my-0">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentPage === number
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {number}
                </button>
              )
            )}
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg transition duration-100 font-semibold ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700 cursor-pointer"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default FoodItems;
