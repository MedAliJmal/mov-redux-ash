import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Entete from "./components/Entete";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="App">
      <Entete handleSearch={handleSearch} handleCategory={handleCategory} />
      <AddMovie />
      <MovieList search={search} category={category} />
    </div>
  );
}

export default App;
