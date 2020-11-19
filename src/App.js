import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Profile from "./component/profile"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [list, setList] = useState([]);

  const fetch = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setList(res.data))
      .catch();
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="App">
    <div className="container">
       <div className="row">
        {list.map((el, i) => (
          <div className="col-4">
            
            <Profile user={el} key={i} />
          </div >
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
