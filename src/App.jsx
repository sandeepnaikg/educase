import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="flex justify-center h-screen items-center bg-white">
      <Routes>
        <Route element={<ProfilePage />} path="/profile" />
        <Route element={<SignupPage />} path="/signup" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<LandingPage />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
