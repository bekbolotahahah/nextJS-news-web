import { fetchNews } from "@/redux/туцы/newsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsPage from "@/component/News-List/News";
import NewsList from "@/component/News-List/Test";

export default function Outlet() {
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

  return (
    <>
      <div className="max-w-[1300px] mx-auto">
        {/* ==================================Заглушка============================================================ */}
        <div className=" max-w-[1250px] mx-auto text-xl  bg-stone-50 p-2 my-9  ">
          <h1 className=" text-2xl font-bold">
            Добро пожаловать на наш новостной сайт, который занимается
            публикацией самых актуальных и интересных новостей из разных
            областей жизни. Мы предлагаем нашим читателям широкий выбор тем: от
            политики и экономики до культуры и спорта. Мы следим за новостями со
            всего мира и предоставляем своим читателям самую актуальную
            информацию. Наши статьи основаны на фактах, мы стремимся дать
            объективную и независимую информацию. Мы публикуем статьи
          </h1>

          <div className="w-full  my-10">
            <img
              className=""
              src="https://img.freepik.com/free-vector/modern-website-banner-template_1361-1890.jpg?w=1380&t=st=1679650271~exp=1679650871~hmac=2744fa6eb234effec9d68f337edae9ca0fa077b9315062b5436b81556f278d22"
              alt=""
            />
          </div>
          <div className=" ">
            {" "}
            <h2 className=" text-xl font-semibold">
              {" "}
              различные темы, которые могут заинтересовать наших читателей. Наша
              команда журналистов и редакторов тщательно проверяют все новости,
              чтобы убедиться в их достоверности и точности. Мы также
              предоставляем нашим читателям возможность выразить свое мнение,
              обсудить новости и поделиться своими мыслями в комментариях к
            </h2>
          </div>
          <div>
            {" "}
            статьям. Наша цель - дать нашим читателям информацию, которая
            поможет им оставаться в курсе событий в мире и принимать осознанные
            решения. Мы надеемся, что вы найдете наш сайт интересным и
            информативным, и будете возвращаться к нам снова и снова.
          </div>
        </div>
        {/* ==================================Заглушка============================================================ */}

        {/* ==================================ListNews============================================================ */}
        <div className="bg-gray-50 p-6 my-12  max-w-[1300px] mx-auto">
          {filteredNews.length < 1 ? (
            <NewsList news={news} />
          ) : (
            <NewsPage news={filteredNews} />
          )}
        </div>
        {/* ==================================ListNews============================================================ */}
        <div></div>

        {/* ==================================Заглушка============================================================ */}

        <div className=" max-w-[1000px] mx-auto text-xs my-9  text-center">
          <h1 className=" text-2xl font-bold">
            {" "}
            Добро пожаловать на наш новостной сайт, который занимается
            публикацией самых актуальных и интересных новостей из разных
            областей жизни. Мы предлагаем нашим читателям широкий выбор тем: от
            политики и экономики до культуры и спорта. Мы следим за новостями со
            всего мира и предоставляем своим читателям самую актуальную
            информацию. Наши статьи основаны на фактах, мы стремимся дать
            объективную и независимую информацию. Мы публикуем статьи
          </h1>
          <br />
          <div className="w-full text-xl font-semibold">
            {" "}
            <img
              className="w-full"
              src="https://i0.wp.com/www.mangalorean.com/wp-content/uploads/2021/02/betting.jpg?resize=800%2C329&ssl=1"
              alt=""
            />
          </div>
          <br />
          статьям. Наша цель - дать нашим читателям информацию, которая поможет
          им оставаться в курсе событий в мире и принимать осознанные решения.
          Мы надеемся, что вы найдете наш сайт интересным и информативным, и
          будете возвращаться к нам снова и снова.
        </div>

        {/* ==================================Заглушка============================================================ */}
        {/* ==================================ListNews============================================================ */}

        <div className=" max-w-[1300px] bg-gray-50 mx-auto p-5 py-9 text-xl my-9  text-center">
          <NewsList news={news} />
        </div>
        {/* ==================================ListNews============================================================ */}

        <div>
          {/* ==================================ListNews============================================================ */}
          <section className=" bg-gray-50 p-6 my-11 max-w-[1300px] mx-auto ">
            <div className="  bg-white mx-auto max-w-[1150px]  relative  h-96 my-20">
              <div className="w-full flex">
                <div className="  relative w-1/2 h-96 ">
                  <span className="m-5 absolute text-slate-500">2.12.2020</span>
                  <div className=" w-full h-full absolute"></div>
                  <img
                    className="  w-full h-full"
                    src="https://i0.wp.com/www.completesports.com/wp-content/uploads/completesports.png?fit=640%2C384&ssl=1"
                    alt=""
                  />
                </div>
                <div className="klone w-1/2 z-50  ">
                  <div className="news-border my-2">
                    <h1 className=" text-2xl font-bold">
                      minima quibusdam alias impedit. Esse, earum sequi. Minus,
                      aspernatur.
                    </h1>
                  </div>
                  <div className=" flex text-xs">
                    <div className="news-border my-2 mr-2">
                      <h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolores enim fuga accusantium illum blanditiis,
                        quo hic!
                      </h1>
                    </div>
                    <div className="news-border my-2  mr-2">
                      <h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolores enim fuga accusantium illum blanditiis,
                        quo hic!
                      </h1>
                    </div>
                  </div>

                  <div className="news-border my-2">
                    <h1>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolores enim fuga accusantium{" "}
                    </h1>
                  </div>
                  <span className=" absolute bottom-4 text-slate-400">
                    {" "}
                    #cicic #odkofds
                  </span>
                </div>

                <div className=" bg-neutral-50 hover:bg-slate-100 p-1 absolute right-6 bottom-6">
                  <button>read more</button>
                </div>
              </div>
            </div>
            <div className="  bg-white mx-auto max-w-[1150px]    h-96 my-20">
              <div className="w-full flex">
                <div className="klone w-1/2 z-50 relative  ">
                  <div className="news-border my-2">
                    <h1 className=" text-2xl font-bold">
                      minima quibusdam alias impedit. Esse, earum sequi. Minus,
                      aspernatur.
                    </h1>
                  </div>
                  <div className=" flex text-xs">
                    <div className="news-border my-2 mr-2">
                      <h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolores enim fuga accusantium illum blanditiis,
                        quo hic!
                      </h1>
                    </div>
                    <div className="news-border my-2  mr-2">
                      <h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolores enim fuga accusantium illum blanditiis,
                        quo hic!
                      </h1>
                    </div>
                  </div>

                  <div className="news-border my-2">
                    <h1>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolores enim fuga accusantium{" "}
                    </h1>
                  </div>
                  <span className=" absolute bottom-4 text-slate-400">
                    {" "}
                    #cicic #odkofds
                  </span>
                  <div className=" bg-neutral-50 hover:bg-slate-100 p-1 absolute right-6 bottom-6">
                    <button>read more</button>
                  </div>
                </div>

                <div className="  relative w-1/2 h-96 ">
                  <span className="m-5 absolute text-slate-500">2.12.2020</span>
                  <div className=" w-full h-full absolute"></div>
                  <img
                    className="  w-full h-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3c1OZcrn4M0QOxVgBiGu9fJaSvnNITQ8Wg&usqp=CAU"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>{" "}
          {/* ==================================ListNews============================================================ */}
        </div>
      </div>
    </>
  );
}
