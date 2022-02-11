import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/card";
import Details from "./components/details";
import "./App.css";

function App () {
  let [data, setData] = useState([]);

  const fetchData = () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setData(data))

  useEffect(() => {
    fetchData()
  }, [])


  return (
      <div className="page">
        <Router>
          <Routes>
            <Route exact path="/" element=
              {data.map((data, index) => (
              <Card key={index} data={data}/>
              ))}
            />

            <Route path="/details/:id" element=
              {<Details data={data}/>} 
            />

          </Routes>
        </Router>
      </div>
  )
}

export default App;
