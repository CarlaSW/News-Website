import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/Provider";
import SearchItem from "./SearchItem";

export default function Search() {
  const { query, setQuery, apiKey, searchList, setSearchList } =
    useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
  useEffect(() => {
    async function fetchSearchPage() {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Cannot fetch Search List !!!");
        }
        const data = await response.json();
        console.log(data.articles);
        setSearchList(data.articles);
        setIsLoading(false);
      } catch (error) {
        console.error("ERROR: ", error);
      }
    }
    fetchSearchPage();
  }, [URL]);
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {searchList.map((news, index) => {
            return <SearchItem key={index} news={news} index={index} />;
          })}
        </div>
      )}
    </div>
  );
}
