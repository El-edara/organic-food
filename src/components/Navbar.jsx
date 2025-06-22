import { useDispatch } from "react-redux";
import { setSearch } from "../app/features/SearchSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center mt-4 mb-10 ">
      <div className="mb-2">
        <h3 className="text-xl text-gray-600 font-bold">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Organic Food</h1>
      </div>
      <div>
        <input
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="border border-gray-300 rounded-lg p-3 focus:outline-none lg:w-[25vw] text-sm bg-white"
          type="text"
          name="search"
          placeholder="Search..."
          autoComplete="off"
        />
      </div>
    </nav>
  );
};
export default Navbar;
