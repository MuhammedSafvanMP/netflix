import Welcome from "./pages/Welcome";
import { Routes, Route } from "react-router-dom";
import SignUp from "./welcome/signup/Signup";
import Home from "./pages/Home";
import OverReviw from "./components/overReview/OverReviw";

export default function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={ <Welcome />} />
    <Route path="/signup" element={ <SignUp /> } />
   <Route path="/home" element={ <Home /> } />
    <Route path="/home/:id" element={ <OverReviw /> } />
  
   </Routes>
   </>
  )
}