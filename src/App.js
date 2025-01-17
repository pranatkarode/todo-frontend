import "./App.css";
import CreateNote from "./Components/CreateNote";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    // <div >
    //   <Register />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
