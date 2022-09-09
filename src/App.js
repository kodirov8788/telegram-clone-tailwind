import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />




        <Route path="*" element={<h1 className="text-[100px] text-center font-bold text-blue-700">404 error: ishini qil!</h1>} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
