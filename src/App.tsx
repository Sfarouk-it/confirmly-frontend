import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import AccountSetup from "./pages/linkpage.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/accountsetup" element={<AccountSetup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>  
  )
}

export default App
