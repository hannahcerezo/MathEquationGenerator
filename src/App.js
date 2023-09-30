import './App.css';
import { Routes, Route } from "react-router-dom";
import AddAndSub from './Components/AddAndSub';
import NavBar from './Components/NavBar';
import NoMatch from './NoMatch';
import Home from './Home';
import Multiply from './Components/Multiply';
import LogIn from './Components/LogIn';
import useToken from './Components/useToken';
import Select from './Components/Select';

function App() {

  // const { token, setToken } = useToken();

  // if (!token) {
  //   return <LogIn setToken={setToken} />
  // }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/MathEquationGenerator" element={<Home />} />
        <Route path="/select" element={<Select />} />
        <Route path="/add-and-sub" element={<AddAndSub />} />
        <Route path="/multiply" element={<Multiply />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );

}

export default App;