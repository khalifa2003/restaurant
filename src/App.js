import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./Component/NavBar";
import Header from "./Component/Header";
import Category from "./Component/Category";
import ItemsLest from "./Component/ItemsList";
import { items } from "./data";

const App = () => {
  const [itemsData, setItemsData] = useState(items);

  const categories = ["الكل", ...new Set(items.map((i) => i.category))];

  // filter by category
  const filterCategory = (cat) => {
    if (cat === "الكل") {
      setItemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setItemsData(newArr);
    }
  };
  // filter by search from
  const filterSearch = (word) => {
    if (word !== "") {
      const newArr = items.filter((item) => item.title === word);
      setItemsData(newArr);
    }
  };

  return (
    <div className="color-body font">
      <NavBar filterSearch={filterSearch} />
      <Container>
        <Header />
        <Category filterCategory={filterCategory} categories={categories} />
        <ItemsLest itemsData={itemsData} />
      </Container>
    </div>
  );
};

export default App;
