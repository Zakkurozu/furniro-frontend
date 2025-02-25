import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div>
      <form className="flex justify-center" action="">
        <div className="relative w-[80%]">
          <input
            className="relative font-medium text-[#1f2937] bg-[#e5e7eb] py-3 px-4 w-full rounded-lg focus:outline-[#9ca3af]"
            placeholder="Search..."
            type="text"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-lg">
            <FiSearch />
          </button>
        </div>
      </form>
      <hr className="my-3" />
    </div>
  );
};

export default Search;
