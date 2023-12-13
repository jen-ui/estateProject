import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/Home/pages/Home";
import About from "./features/About/pages/About";
import SignIn from "./features/SignIn/pages/SignIn";
import SignUp from "./features/SignUp/pages/SignUp";
import Profile from "./features/Profile/pages/Profile";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
