import { updateSearchTerm } from "@/redux/Search/searchSlice";
import React from "react";
import { useDispatch } from "react-redux";

const Serach = ({ setSearch, seaech }) => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setTimeout(() => {
      dispatch(updateSearchTerm(event.target.value));
    }, 300);
  };

  setTimeout(() => {}, 3000);
  return (
    <div className="w-full   items-center p-4">
      <div className="flex max-w-[1200px] mx-auto ">
        <input
          type="text"
          onChange={handleChange}
          className={
            seaech === true
              ? "w-48 p-3 bg-neutral-200  transition-all  "
              : " w-0 p-1   transition-all   "
          }
          placeholder="..."
        />
        <button
          onClick={() => {
            setSearch(!seaech);
          }}
          className=" bg-blue-400  text-white p-3 "
        >
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.668 9.66797C15.668 13.2578 12.7578 16.168 9.16797 16.168C5.57812 16.168 2.66797 13.2578 2.66797 9.66797C2.66797 6.07812 5.57812 3.16797 9.16797 3.16797C12.7578 3.16797 15.668 6.07812 15.668 9.66797Z"
              stroke="#F4F8FB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.9154 18.4154L14.582 15.082"
              stroke="#F4F8FB"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Serach;
