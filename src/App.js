import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import AddAndSub from './Components/AddAndSub';
import NavBar from './Components/NavBar';
import NoMatch from './NoMatch';
import Home from './Home';
import Multiply from './Components/Multiply';
import LogIn from './Components/LogIn';
import useToken from './Components/useToken';
import Select from './Components/Select';
import Test from './Components/Test';
import { initialFacts } from './Components/testfacts';
import SelectLevel from './Components/SelectLevel';

function App() {

  // const { token, setToken } = useToken();

  // if (!token) {
  //   return <LogIn setToken={setToken} />
  // }

  const [facts, setFacts] = useState(initialFacts);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/MathEquationGenerator" element={<Home />} />
        <Route path="/select" element={<Select />} />
        <Route path="/add-and-sub" element={<AddAndSub />} />
        <Route path="/multiply" element={<Multiply />} />
        <Route path="/select-level" element={<SelectLevel />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

      {/* <Test facts={facts} /> */}
    </div>
  );

}

export default App;