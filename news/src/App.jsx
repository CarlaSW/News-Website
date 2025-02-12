import { useState } from "react";
import Provider from "./context/Provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import News from "./pages/News";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/category/:id" element={<Category />}></Route>
          <Route path="/news/:id" element={<News />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
