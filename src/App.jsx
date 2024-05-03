import Welcome from "./pages/Welcome";
import { Routes, Route } from "react-router-dom";
import SignUp from "./welcome/signup/Signup";
import Home from "./pages/Home";
import OverReviw from "./components/overReview/OverReviw";
import TvseriesList from "./components/tvseries/TvseriesList";
import AllMoviesLIst from "./components/allMovies/AllMoviesLIst";
import NewtrendingList from "./components/new&trending/New&trendingList";
import SearchMovie from "./components/serchMovie/SearchMovie";

export default function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={ <Welcome />} />
    <Route path="/signup" element={ <SignUp /> } />
   <Route path="/home" element={ <Home /> } />
    <Route path="/home/:id" element={ <OverReviw /> } />
    <Route path="/home/tvseries" element={ <TvseriesList /> } />
    <Route path="/home/allmovies" element={ <AllMoviesLIst /> } />
    <Route path="/home/newtrendigs" element={ <NewtrendingList /> } />
    <Route path="/home/movieSearch" element={ <SearchMovie /> } />






  
   </Routes>
   </>
  )
}