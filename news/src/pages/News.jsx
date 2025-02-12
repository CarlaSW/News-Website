import Header from "../components/Header";
import HeaderInside from "../components/HeaderInside";
import styles from "./newsPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function News() {
  const location = useLocation(); // Get the location object
  const { news } = location.state || {}; // Access the state that was passed with navigate
  const navigate = useNavigate();
  function navigateToUrl() {
    navigate(`${news.url}`);
  }

  return (
    <div>
      <HeaderInside />
      <div>
        <p className={styles.title}>{news.title}</p>
        <div className={styles.imageConatiner}>
          <img className={styles.image} src={news.urlToImage}></img>
        </div>
        <div className={styles.info}>
          <p className={styles.sourceName}>
            Source: <span className={styles.answer}>{news.source.name}</span>
          </p>
          <p className={styles.author}>
            Author: <span className={styles.answer}>{news.author}</span>
          </p>
          <p className={styles.date}>
            Publication Date and Time:{" "}
            <span className={styles.answer}>{news.publishedAt}</span>
          </p>
        </div>
        <div className={styles.details}>
          <p className={styles.info}>Description: </p>
          <p className={styles.description}>{news.description}</p>
          <p className={styles.info}>News Details: </p>
          <p className={styles.content}>{news.content}</p>
        </div>
        <button className={styles.fullArticle} onClick={navigateToUrl}>
          View full article
        </button>
      </div>
    </div>
  );
}
