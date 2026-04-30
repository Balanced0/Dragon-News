export async function getCategories(){
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data.news_category;
}

export async function getNewsByCategorieId(id){
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
  const data = await res.json();
  return data.data;
}