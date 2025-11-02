import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/zezs/Home";
import LoginPage from "./pages/rfez/LoginPage";
import SignupPage from "./pages/rfez/SignupPage";
import AccountSetup from "./pages/zefz/linkpage";
import Dashboard from "./pages/ezfs/Dashboard";
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
