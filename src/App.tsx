// import { Cardgrid } from "./components/Cardgrid";
import Dashboard from "./dashBoard/dashboard";
import { LoginPage } from "./SignupPage/LoginPage";
import { SignupPage } from "./SignupPage/SignupPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
