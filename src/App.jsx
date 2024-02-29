import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./pages/Welcome";
import { Routes, Route } from "react-router-dom";
import SignUp from "./welcome/signup/Signup";

export default function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={ <Welcome />} />
    <Route path="/signup" element={ <SignUp /> } />
  
   </Routes>
   {/* <Navbar />
   <Header /> */}
   </>
  )
}