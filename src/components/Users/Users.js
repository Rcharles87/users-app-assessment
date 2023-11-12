import { useState } from "react";
import User from "../User/User";
import SearchBar from "../SearchBar/SearchBar";
import "./Users.css";

const Users = ({ users }) => {
  const [expanded, setExpanded] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleExpandedToggle = (id) => {
    if (!expanded.includes(id)) {
      const newExpanded = [...expanded, id];
      setExpanded(newExpanded);
    } else {
      const removed = expanded.filter((currId) => currId !== id);
      setExpanded(removed);
    }
  };

  let dataToDisplay = users;

  if (searchInput) {
    dataToDisplay = users.filter((user) => {
      const { company, name, country } = user;
      const lowerCaseName = name.toLowerCase();
      const lowerCaseCompany = company.toLowerCase();
      const lowerCaseCountry = country.toLowerCase();

      return (
        lowerCaseName.includes(searchInput.toLowerCase()) ||
        lowerCaseCompany.includes(searchInput.toLowerCase()) ||
        lowerCaseCountry.includes(searchInput.toLowerCase())
      );
    });
  }

  const renderContent = () => {
    if (dataToDisplay.length === 0) {
      return <div>No results for {searchInput}</div>;
    } else {
      return (
        <div>
          {dataToDisplay.map((user) => {
            const { id } = user;
            return (
              <User
                key={id}
                user={user}
                expanded={expanded.includes(user.id)}
                onClick={() => handleExpandedToggle(user.id)}
              />
            );
          })}
        </div>
      );
    }
  };

  return (
    <article className="Users">
      <h1>Our Users</h1>
      <SearchBar
        users={users}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        expanded={expanded}
        setExpanded={setExpanded}
      />
      {renderContent()}
    </article>
  );
};

export default Users;
