import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useContext } from "react"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { AuthContext } from "./context/AuthContext"
function App() {
  const { currentUser } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }
    return children
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1 className="text-[100px] text-center font-bold text-blue-700">404 error: ishini qil!</h1>} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
