import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/Home";
import LoginPage from "./pages/authontification/LoginPage";
import SignupPage from "./pages/authontification/SignupPage";
import AccountSetup from "./pages/businessdata/linkpage";
import Dashboard from "./pages/dashboard/Dashboard";
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/accountsetup" element={<AccountSetup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>  
  )
}

export default App
