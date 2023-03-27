import { Inter } from "next/font/google";
import { fetchNews } from "@/redux/туцы/newsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Serach from "@/component/functionalComponent/Serach";
import Categories from "@/component/OutletComponent/Categories";
import Header from "@/component/OutletComponent/Header";
import Outlet from "@/component/Outlet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [seaech, setSearch] = useState(false);

  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);
  const selectedCategories = useSelector(
    (state) => state.news.selectedCategories
  );

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const filteredNews = news.filter((article) =>
    selectedCategories.includes(article.category)
  );

  const categories = [...new Set(news.map((article) => article.category))];

  const [open, setOpen] = useState(false);
  return (
    <>
      <Header open={open} setOpen={setOpen} />

      <div className=" fixed right-5   z-[88888888888888888]    top-0">
        <div>
          <Serach setSearch={setSearch} seaech={seaech} />
        </div>
      </div>
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className=" bg-blue-400  right-9 fixed  z-[88888888888888888]   text-white p-[6px]"
      >
        <div className="w-6  rounded m-1 h-1 bg-white"></div>
        <div className="w-6  rounded m-1 h-1 bg-white"></div>
        <div className="w-6  rounded m-1 h-1 bg-white"></div>
      </div>

      <main className="flex w-full">
        <div className={open === false ? " hidden" : ""}>
          <Categories categories={categories} />
        </div>
        <Outlet />
      </main>
    </>
  );
}
