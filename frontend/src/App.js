import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import ReadUser from "./ReadUser";
import UpdateUser from "./UpdateUser";
import Navbar from "./Navbar";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/readuser/:id" element={<ReadUser />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
