import styles from "./categoryNews.module.css";
import { useNavigate } from "react-router-dom";

export default function CategoryItem({ news, index }) {
  const navigate = useNavigate();
  function handleNavigateToNews() {
    navigate(`/news/${index}`, { state: { news } });
    window.scrollTo(0, 0); // Scroll to the top
  }
  const isHover = false;
  return (
    <div className={styles.newsItem} onClick={handleNavigateToNews}>
      <img className={styles.newsImage} src={news.urlToImage}></img>
      <p className={styles.description}>{news.description}</p>
      <p className={styles.newsTitle}>
        {news.title} <span className={styles.author}>By {news.author}</span>{" "}
        <span className={styles.publicationDate}>
          Publication Date: {news.publishedAt}
        </span>
      </p>
    </div>
  );
}
