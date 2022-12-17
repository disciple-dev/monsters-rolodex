import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";

const usersURI = "https://jsonplaceholder.typicode.com/users";

export interface IUser {
  id: string,
  name: string,
  email: string
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [monsters, setMonsters] = useState<IUser[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      return await getData<IUser[]>(usersURI);
    }
    fetchUsers().then(users => {
      setMonsters(users);
    })
  }, []);

  useEffect(() => {
    const filtered = monsters.filter((user) => {
      if (!/[^\s]/.test(searchTerm)) return true;
      return user.name.toLowerCase().includes(searchTerm);
    });
    setFilteredMonsters(filtered);
  }, [monsters, searchTerm]);

  const onSearchChange = (event:ChangeEvent<HTMLInputElement>):void => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters"
        onChangeHandler={onSearchChange}
        placeholder="Search monster"
      />
      <CardList listItems={filteredMonsters} />
    </div>
  );
};

export default App;
