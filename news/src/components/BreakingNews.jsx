import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/Provider";
import BreakingNew from "./BreakingNew";
import styles from "./breakingNews.module.css";

export default function BreakingNews() {
  const { apiKey, breakingNews, setBreakingNews } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayed((prevDisplayed) =>
        breakingNews.length > 0
          ? (prevDisplayed + 1) % breakingNews.length // Cycle back to 0
          : 0
      );
    }, 5000); // Adjust time interval as needed
    return () => clearInterval(interval);
  }, [breakingNews]);

  useEffect(() => {
    async function fetchBreakingNews() {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Cannot fetch Breaking News !!!");
        }
        const data = await response.json();
        setBreakingNews(data.articles);
        setIsLoading(false);
      } catch (error) {
        console.error("ERROR: ", error);
      }
    }
    fetchBreakingNews();
  }, [URL, setBreakingNews]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.newsContainer}>
          {breakingNews.map((news, index) => (
            <BreakingNew
              key={index}
              news={news}
              index={index}
              className={
                displayed === index
                  ? styles.newItemDisplayed // Active news item
                  : styles.newsItem // Inactive news item
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
