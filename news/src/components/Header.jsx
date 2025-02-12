import styles from "./header.module.css";
import logo from "../images/logo.png";
import settings from "../images/settings.webp";
import { useContext } from "react";
import { UserContext } from "../context/Provider";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { query, setQuery } = useContext(UserContext);
  const navigate = useNavigate();
  function handleSearch(e) {
    setQuery(e.target.value);
  }
  function handleRefresh() {
    setQuery("");
    navigate("/");
  }
  return (
    <div className={styles.header}>
      <div className={styles.leftHeader}>
        <img
          onClick={handleRefresh}
          className={styles.logoIcon}
          src={logo}
        ></img>
      </div>
      <div className={styles.midHeader}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            handleSearch(e);
          }}
        ></input>
      </div>
      <div className={styles.rightHeader}>
        <img className={styles.settingsIcon} src={settings}></img>
      </div>
    </div>
  );
}
