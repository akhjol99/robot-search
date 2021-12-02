import "./styles.css";
import { useEffect, useState } from "react";
import { CardList } from "./components/card-list";
import { Search } from "./components/search-box";
export default function App() {
  const [data, setData] = useState([]);
  const [searchField, setSearchField] = useState("");
  const searchChanged = (e) => {
    setSearchField(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => setData(res));
  }, []);
  const filtered = data.filter((el) =>
    el.name.toLowerCase().includes(searchField)
  );
  return (
    <div className="App">
      <h1>Роботуудын хайлт</h1>
      <Search onSearch={searchChanged} />
      <CardList data={filtered} />
    </div>
  );
}
