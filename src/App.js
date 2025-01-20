import "./App.css";
import CreateNote from "./Components/CreateNote";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateNote from "./Components/UpdateNote";
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
        <Route path="/update/:id" element={<UpdateNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
