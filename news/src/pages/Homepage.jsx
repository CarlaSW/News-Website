import Header from "../components/Header";
import styles from "./homepage.module.css";
import sportsIcon from "../images/sports.jpg";
import politicsIcon from "../images/politics.png";
import healthIcon from "../images/health.png";
import businessIcon from "../images/business.png";
import environmentIcon from "../images/environment.png";
import scienceIcon from "../images/science.png";
import BreakingNews from "../components/BreakingNews";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/Provider";
import Search from "../components/Search";

export default function Homepage() {
  const navigate = useNavigate();
  const { query, setQuery } = useContext(UserContext);
  function handleSportsButton() {
    navigate("/category/sports");
  }
  function handlePoliticsButton() {
    navigate("/category/politics");
  }
  function handleHealthButton() {
    navigate("/category/health");
  }
  function handleBusinessButton() {
    navigate("/category/business");
  }
  function handleEnvironmentButton() {
    navigate("/category/environment");
  }
  function handleScienceButton() {
    navigate("/category/science");
  }
  return (
    <div>
      <Header />
      {query ? (
        <Search />
      ) : (
        <>
          <BreakingNews />
          <p className={styles.pickCategory}>Pick Your Category Of Interest</p>
          <div className={styles.categories}>
            <button
              className={styles.sportsButton}
              onClick={handleSportsButton}
            >
              <img className={styles.sportsIcon} src={sportsIcon}></img>
              <p className={styles.sportsName}>Sports</p>
            </button>
            <button
              className={styles.politicsButton}
              onClick={handlePoliticsButton}
            >
              <img className={styles.politicsIcon} src={politicsIcon}></img>
              <p className={styles.politicsName}>Politics</p>
            </button>
            <button
              className={styles.healthButton}
              onClick={handleHealthButton}
            >
              <img className={styles.healthIcon} src={healthIcon}></img>
              <p className={styles.healthName}>Health</p>
            </button>
            <button
              className={styles.businessButton}
              onClick={handleBusinessButton}
            >
              <img className={styles.businessIcon} src={businessIcon}></img>
              <p className={styles.businessName}>Business</p>
            </button>
            <button
              className={styles.environmentButton}
              onClick={handleEnvironmentButton}
            >
              <img
                className={styles.environmentIcon}
                src={environmentIcon}
              ></img>
              <p className={styles.environmentName}>Environment</p>
            </button>
            <button
              className={styles.scienceButton}
              onClick={handleScienceButton}
            >
              <img className={styles.scienceIcon} src={scienceIcon}></img>
              <p className={styles.scienceName}>Science</p>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
