import { fetchNews, setSelectedCategories } from "../../redux/туцы/newsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Categories({ categories }) {
  const dispatch = useDispatch();
  const selectedCategories = useSelector(
    (state) => state.news.selectedCategories
  );

  const handleCategoryChange = (e) => {
    const selected = [...selectedCategories];
    if (e.target.checked) {
      selected.push(e.target.value);
    } else {
      const index = selected.indexOf(e.target.value);
      if (index > -1) {
        selected.splice(index, 1);
      }
    }
    dispatch(setSelectedCategories(selected));
  };

  return (
    <div className=" bg-neutral-300 w-52 relative h-full">
      <div className=" text-slate-800 fixed p-5 text-xl font-light">
        {categories.map((category) => (
          <div key={category}>
            <label>
              <input
                className=""
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={handleCategoryChange}
              />
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Categories;
