import Link from "next/link";
import React from "react";

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <div className="font-bold">
      All Category
      {categories.map((data) => {
        return (
          <div
            key={data.category_id}
            className={`${data.category_id === activeId ? "bg-gray-300" : ""} mt-2 p-4`}
          >
            <Link href={`/category/${data.category_id}`} className="block">{data.category_name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default LeftSideBar;
