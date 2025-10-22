import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/accuil.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import AccountSetup from "./pages/linkpage.tsx";
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
