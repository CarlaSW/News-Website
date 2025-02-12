import { useNavigate } from "react-router-dom";
import styles from "./breakingNews.module.css";

export default function BreakingNew({ news, index, className }) {
  const navigate = useNavigate();

  function handleNavigateToNews() {
    console.log(news.title);
    navigate(`/news/${index}`, { state: { news } });
    window.scrollTo(0, 0); // Scroll to the top
  }

  return (
    <div onClick={handleNavigateToNews} className={className}>
      <img className={styles.newsImage} src={news.urlToImage} alt="News" />
      <p className={styles.newsTitle}>{news.title}</p>
    </div>
  );
}
