import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import AddAndSub from './Components/AddAndSub';
import NavBar from './Components/NavBar';
import NoMatch from './NoMatch';
import Home from './Home';
import Multiply from './Components/Multiply';
import LogIn from './Components/LogIn';


function App() {

  // const [token, setToken] = useState();

  // if (!token) {
  //   return <LogIn setToken={setToken} />
  // }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-and-sub" element={<AddAndSub />} />
        <Route path="/multiply" element={<Multiply />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );

}

export default App;