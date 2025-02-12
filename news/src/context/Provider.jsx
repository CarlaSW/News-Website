import { createContext, useContext, useState } from "react";
const apiKEY = import.meta.env.VITE_APIKEY;

export const UserContext = createContext();
export default function Provider({ children }) {
  const [apiKey, setApiKey] = useState(apiKEY);
  const [breakingNews, setBreakingNews] = useState([]);
  const [categoryNews, setCategoryNews] = useState([]);
  const [query, setQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  return (
    <UserContext.Provider
      value={{
        apiKey,
        setApiKey,
        breakingNews,
        setBreakingNews,
        categoryNews,
        setCategoryNews,
        query,
        setQuery,
        searchList,
        setSearchList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
