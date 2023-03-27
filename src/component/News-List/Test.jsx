import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

import MoadlCard from "../OutletComponent/moadlCard";
function NewsList({ news }) {
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const filteredItems = news.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //-------------------pagination------------------------
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  //--------------------pagination--------------------------

  //====================ITEM==================================
  const [state, setState] = useState(true);
  const [id, setID] = useState(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [content, setContent] = useState(null);
  const [views, setViews] = useState(null);
  const [category, setCategory] = useState(null);
  const [author, setAuthor] = useState(null);
  const [tags, setTags] = useState(null);
  const [created_at, setCreated_at] = useState(null);
  //====================ITEM==================================

  // Вычисляем индекс первого элемента на странице
  const startIndex = currentPage * itemsPerPage;
  // Фильтруем данные по индексу и количеству элементов на странице
  const selectedItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className=" flex flex-wrap ">
       
        <div className=" z-50"> {id !== null ? (
          <MoadlCard
            id={id}
            image={image}
            description={description}
            content={content}
            views={views}
            category={category}
            author={author}
            tags={tags}
            created_at={created_at}
            title={title}
            setState={setState}
            state={state}
          />
        ) : null}</div>

        {selectedItems.map((item) => (
          <div
            key={item.id}
            className="  bg-white mx-auto  w-full  relative  h-96 my-10"
          >
            <div className="w-full flex">
              <div className=" bg-slate-400 relative  w-1/2 h-96 ">
                <span className="m-5 absolute text-slate-500">
                  {item.created_at}
                </span>   <div className=" w-full h-full absolute"></div>
                <img
                  src={`https://nest-news-project.onrender.com/${item.image}`}
                  alt=""
                />
              </div>
              <div className="klone w-1/2   ">
                <div className="news-border my-2">
                  <h1 className=" text-2xl font-bold">{item.title}</h1>
                </div>
                <div className=" flex text-xs">
                  <div className="news-border my-2 mr-2">
                    <h1>{item.description}</h1>
                  </div>
                  <div className="news-border my-2  mr-2">
                    <h1>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Dolores enim fuga accusantium illum blanditiis, quo hic!
                    </h1>
                  </div>
                </div>

                <div className="news-border my-2">
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolores enim fuga accusantium{" "}
                  </h1>
                </div>
                <span className="absolute bottom-4   text-slate-400"># {item.tags}</span>
                <span className=" absolute bottom-4   right-0 text-slate-400">
                 
                  
                  <button
                    className=" bg-neutral-50 hover:bg-slate-100 p-1  right-6 bottom-6"
                    onClick={() => {
                      setID(item.id),
                        setImage(item.image),
                        setTitle(item.title),
                        setDescription(item.description),
                        setContent(item.content),
                        setViews(item.views),
                        setCategory(item.category),
                        setAuthor(item.author),
                        setTags(item.tags),
                        setCreated_at(item.created_at);
                      setState(true);
                    }}
                  >
                    more
                  </button>
                </span>
              </div>
            </div>
          </div>
          //   <figure key={item.id} className="snip1347">
          //     <img
          //       src={`https://nest-news-project.onrender.com/${item.image}`}
          //       alt="sample87"
          //     />
          //     <div className="date">{item.created_at}</div>
          //     <figcaption>
          //       <h2>{item.title}</h2>
          //       <p>{item.description}</p>
          //     </figcaption>
          //     <button
          //       className=" bg-neutral-600 rounded-lg p-1 m-1"
          //       onClick={() => {
          //         setID(item.id),
          //           setImage(item.image),
          //           setTitle(item.title),
          //           setDescription(item.description),
          //           setContent(item.content),
          //           setViews(item.views),
          //           setCategory(item.category),
          //           setAuthor(item.author),
          //           setTags(item.tags),
          //           setCreated_at(item.created_at);
          //         setState(true);
          //       }}
          //     >
          //       more
          //     </button>
          //   </figure>
        ))}
      </div>

      <ReactPaginate
        previousLabel={"← "}
        nextLabel={" →"}
        pageCount={Math.ceil(news.length / itemsPerPage)}
        onPageChange={handlePageClick}
        containerClassName={"flex items-center gap-2 font-bold"}
        previousLinkClassName={"previousPage"}
        nextLinkClassName={"nextPage"}
        disabledClassName={"disabled"}
        activeClassName={"bg-gray-600 p-1 text-white rounded-full"}
      />
    </>
  );
}
export default NewsList;
