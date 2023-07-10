import './App.css';
import { Routes, Route } from "react-router-dom";
import AddAndSub from './Components/AddAndSub';
import NavBar from './Components/NavBar';
import NoMatch from './NoMatch';
import Home from './Home';
import Mult from './Components/Mult';


function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/MathEquationGenerator/" element={<Home />} />
        <Route path="/add-and-sub" element={<AddAndSub />} />
        <Route path="/mult" element={<Mult />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );

}

export default App;