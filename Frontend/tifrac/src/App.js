import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Home from "./Components/Home/Home";
import Cheatsheet from "./Components/Science/Cheatsheet";
import Videos from "./Components/Science/Videos";
import Physics from "./Components/Science/subject/Physics"
import Chemistry from "./Components/Science/subject/Chemistry"
import Maths from "./Components/Science/subject/Maths"
import Biology from "./Components/Science/subject/Biology"




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/physics"} element={<Physics/>} />
        <Route path={"/chemistry"} element={<Chemistry/>} />
        <Route path={"/maths"} element={<Maths/>} />
        <Route path={"/biology"} element={<Biology/>} />
        <Route path={"/videos/:id"} element={<Videos/>} />
        <Route path={"/cheatsheet/:id"} element={<Cheatsheet/>} />
      </Routes>

    </div>
  );
}

export default App;
