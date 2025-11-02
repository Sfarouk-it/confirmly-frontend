import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/Home";
import LoginPage from "./pages/authantification/LoginPage";
import SignupPage from "./pages/authantification/SignupPage";
import AccountSetup from "./pages/businessData/linkpage";
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
