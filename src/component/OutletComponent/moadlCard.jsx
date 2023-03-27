import React, { useState } from "react";

const MoadlCard = ({
  id,

  image,
  description,
  content,
  views,
  category,
  author,
  tags,
  created_at,
  title,
  state,
  setState,
}) => {
  // absolute -translate-y-2/4 -translate-x-2/4
  return (
    <div
      onClick={() => setState((state) => !state)}
      className={state === true ? "modalCard" : "modalCard-none"}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" shadow-2xl  p-5 h-[400px  bg-neutral-600 z-50 top-[50%] left-[50% text-slate-200 w-[700px]"
      >
        <span>{title}</span>
        <div className=" w-full h-80">
          {" "}
          <img
            src={`https://nest-news-project.onrender.com/${image}`}
            alt="sample87"
          />
        </div>
        <div>{description}</div>
        <div className="bg-neutral-700 p-5">{content}</div>
        <div className="">
          <h1 className="  text-slate-100 p-5">{author}</h1>
        </div>
        <span>#{tags}</span>
      </div>
    </div>
  );
};

export default MoadlCard;
