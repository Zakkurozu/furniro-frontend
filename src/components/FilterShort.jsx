import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { useState } from "react";

const FilterShort = ({ filters, setFilters }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleIsFilterOpen = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => {
      let updateValues = prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value];

      return { ...prevFilters, [type]: updateValues };
    });
  };

  return (
    <div>
      <div className="bg-[#f9f0e7]">
        <div className="container">
          <div className="flex justify-between items-center gap-x-3 my-2 mx-2">
            <button
              onClick={toggleIsFilterOpen}
              className={`text-2xl text-gray3 ${
                isFilterOpen ? "bg-gray6" : ""
              } transition-all duration-150`}
            >
              <TbAdjustmentsHorizontal />
            </button>
            <div className="form-group flex items-center gap-3">
              <label htmlFor="" className="text-gray3 font-normal">
                Short by
              </label>
              <select
                defaultValue="0"
                className="focus:outline-none px-2 py-1 text-gray3 rounded-sm font-medium"
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, sortBy: e.target.value }))
                }
                name=""
                id=""
              >
                <option value="0">Default</option>
                <option value="1">Name</option>
                <option value="2">Price to high</option>
                <option value="3">Price to low</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-[#f9f0e7] overflow-hidden origin-top ${
          isFilterOpen ? " max-h-[15rem]" : " max-h-0"
        } transition-all ease-in-out duration-500`}
      >
        <div className="container space-y-2 my-3">
          <h1 className="text-lg font-semibold">Filters.</h1>
          <hr className="border-[1px] border-gray6" />
          <div className="flex flex-wrap gap-y-3 font-medium">
            <div className="w-1/3 px-2 space-y-2 text-gray3">
              <h3>Range</h3>
              <form>
                {["Dining", "Living", "Bedroom"].map((item, index) => (
                  <div
                    key={index}
                    className="form-group flex items-center gap-1"
                  >
                    <input
                      type="checkbox"
                      checked={filters.range.includes(item)}
                      onChange={() => handleFilterChange("range", item)}
                      name={item}
                      id={item}
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              </form>
            </div>
            <div className="w-1/3 px-2 space-y-2 text-gray3">
              <h3>Category</h3>
              <form>
                {["Sofa", "Bed", "Chair", "Lamp"].map((item, index) => (
                  <div
                    key={index}
                    className="form-group flex items-center gap-1"
                  >
                    <input
                      type="checkbox"
                      checked={filters.category.includes(item)}
                      onChange={() => handleFilterChange("category", item)}
                      name={item}
                      id={item}
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              </form>
            </div>
            <div className="w-1/3 px-2 space-y-2 text-gray3">
              <h3>Others</h3>
              <form>
                {["Discount", "New"].map((item, index) => (
                  <div
                    key={index}
                    className="form-group flex items-center gap-1"
                  >
                    <input
                      type="checkbox"
                      checked={filters.others.includes(item)}
                      onChange={() => handleFilterChange("others", item)}
                      name={item}
                      id={item}
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                ))}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterShort;
