import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/Provider";
import CategoryItem from "../components/CategoryItem";
import Header from "../components/Header";
import HeaderInside from "../components/HeaderInside";

export default function Category() {
  const { id } = useParams();
  const { apiKey, categoryNews, setCategoryNews } = useContext(UserContext);
  const URL = ` https://newsapi.org/v2/everything?q=${id}&apiKey=${apiKey}`;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchCategoryNews() {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Cannot fetch ${id} news !!!`);
        }
        const data = await response.json();
        console.log(data.articles);
        setCategoryNews(data.articles);
        setIsLoading(false);
      } catch (error) {
        console.error("ERROR: ", error);
      }
    }
    fetchCategoryNews();
  }, [URL, id]);
  return (
    <div>
      <HeaderInside />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {categoryNews.map((news, index) => {
            return <CategoryItem key={index} news={news} index={index} />;
          })}
        </div>
      )}
    </div>
  );
}
