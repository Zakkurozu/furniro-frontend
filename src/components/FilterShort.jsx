import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { useState } from "react";

const FilterShort = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleIsFilterOpen = () => {
    setIsFilterOpen(!isFilterOpen);
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
                className="focus:outline-none px-2 py-1 text-gray3 rounded-sm font-medium"
                name=""
                id=""
              >
                <option selected value="0">
                  Default
                </option>
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
              <form action="">
                <div className="form-group flex items-center gap-1">
                  <input type="checkbox" name="Dining" id="Dining" />
                  <label htmlFor="Dining">Dining</label>
                </div>
                <div className="form-group flex items-center gap-1">
                  <input type="checkbox" name="Living" id="Living" />
                  <label htmlFor="Living">Living</label>
                </div>
                <div className="form-group flex items-center gap-1">
                  <input type="checkbox" name="Bedroom" id="Bedroom" />
                  <label htmlFor="Bedroom">Bedroom</label>
                </div>
              </form>
            </div>
            <div className="w-1/3 px-2 space-y-2 text-gray3">
              <h3>Category</h3>
              <form action="">
                <div className="form-group flex items-center gap-1">
                  <input type="checkbox" name="Sofa" id="Sofa" />
                  <label htmlFor="Sofa">Sofa</label>
                </div>
                <div className="form-group flex items-center gap-1">
                  <input type="checkbox" name="Bed" id="Bed" />
                  <label htmlFor="Bed">Bed</label>
                </div>
                <div className="form-group flex items-center gap-1">
                  <input type="checkbox" name="Chair" id="Chair" />
                  <label htmlFor="Chair">Chair</label>
                </div>
              </form>
            </div>
            <div className="w-1/3 px-2 space-y-2 text-gray3">
              <h3>Others</h3>
              <form action="">
                <div className="form-group flex items-center gap-1">
                  <input type="checkbox" name="Discount" id="Discount" />
                  <label htmlFor="Discount">Discount</label>
                </div>
                <div className="form-group flex items-center gap-1">
                  <input type="checkbox" name="New" id="New" />
                  <label htmlFor="New">New</label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterShort;
