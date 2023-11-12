import Users from "./components/Users/Users";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import Error from "./components/Error/Error";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    setLoading(true);

    axios
      .get(`${API_URL}/users`)
      .then((res) => {
        setUsers(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
        setError(err.message);
      });
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    } else if (error) {
      return <Error error={error} />;
    } else {
      return <Users users={users} />;
    }
  };

  return <div className="App">{renderContent()}</div>;
}

export default App;
