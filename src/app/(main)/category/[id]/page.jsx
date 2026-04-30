import React from "react";
import LeftSideBar from "@/components/homepage/news/LeftSideBar";
import RightSideBar from "@/components/homepage/news/RightSideBar";
import {getCategories} from "@/lib/data"
import {getNewsByCategorieId} from "@/lib/data"

const NewsCategoryPage = async ({ params }) => {
  const { id } = await params;
  const categories = await getCategories();
  const news = await getNewsByCategorieId(id);
  return (
    <div className="container mx-auto p-4 grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
      </div>
      <div className="bg-green-400 col-span-6 font-bold">
        {news.map((n) => {
          return <div key={n._id}>{n.title}</div>;
        })}
      </div>
      <div className="col-span-3">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default NewsCategoryPage;
