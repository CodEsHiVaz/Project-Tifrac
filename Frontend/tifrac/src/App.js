import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Home from "./Components/Home/Home";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
      </Routes>

    </div>
  );
}

export default App;
