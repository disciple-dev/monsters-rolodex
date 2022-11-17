import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const usersURI = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch(usersURI)
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const filtered = monsters.filter((user) => {
      if (!/[^\s]/.test(searchTerm)) return true;
      return user.name.toLowerCase().includes(searchTerm);
    });
    setFilteredMonsters(filtered);
  }, [monsters, searchTerm]);

  const onSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters"
        onChangeHanlder={onSearchChange}
        placeholder="Search monster"
      />
      <CardList listItems={filteredMonsters} />
    </div>
  );
};

export default App;
