import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  const news = [
    {
      id: 1,
      headline:
        "Global Markets Show Signs of Recovery Amid Economic Uncertainty",
    },
    {
      id: 2,
      headline: "New Advances in AI Technology Transform Software Development",
    },
    {
      id: 3,
      headline: "Climate Change Talks Resume with Focus on Renewable Energy",
    },
  ];
  return (
    <div className="container mx-auto flex justify-between gap-4 bg-gray-300 p-3 rounded-sm">
      <button className="btn bg-[#D72050] text-white">Latest</button>
      <Marquee pauseOnHover={true}>
        {news.map((n)=>{
            return <span key={n.id} className="mx-8">{n.headline}</span>
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
