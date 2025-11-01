import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.tsx";
import LoginPage from "./pages/Authantification/LoginPage.tsx";
import SignupPage from "./pages/Authantification/SignupPage.tsx";
import AccountSetup from "./pages/BusinessData/linkpage.tsx";
import Dashboard from "./pages/Dashboard.tsx";
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
