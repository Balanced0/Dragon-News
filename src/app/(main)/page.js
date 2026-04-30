import Image from "next/image";

async function getCategories(){
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data.news_category;
}

export default async function Home() {
  const categories = await getCategories();
  console.log(categories);
  return (
    <div className="container mx-auto p-4 grid grid-cols-12 gap-4">
      <div className="col-span-3 font-bold">All Category
        {
          categories.map((data) =>{
            return <div key={data.category_id} className="mt-2 bg-gray-300 p-4">
              {data.category_name}
            </div>
          })
        }
      </div>
      <div className="bg-green-400 col-span-6 font-bold">Dragon News Home</div>
      <div className="bg-purple-400 col-span-3 font-bold">Login With</div>
    </div>
  );
}
