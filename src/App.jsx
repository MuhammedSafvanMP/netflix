import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./pages/Welcome";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={ <Welcome />} />
  
   </Routes>
   {/* <Navbar />
   <Header /> */}
   </>
  )
}