import React from "react";

const Header = ({setOpen,open}) => {
  return (
    <header className="w-full  bg-gray-50 text-black items-center ">
      <div className=" mx-auto max-w-[1200px] py-5 justify-between flex items-center">
        <ul className="flex gap-3">
          <li className=" cursor-pointer">news</li>
          <li
            className=" cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          >
            category
          </li>
          <li className=" cursor-pointer">about us</li>
          <li className=" cursor-pointer">warning</li>
        </ul>
        <div className=" text-2xl  font-bold    ">
          {" "}
          <div className="w-[80px]  ">
            <img
              src="https://cdn.pixabay.com/photo/2016/09/04/17/46/news-1644696_1280.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
