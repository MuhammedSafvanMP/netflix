import { api_key } from "../../constant/Constant";

export const Popular = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;
export const trending = `https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`;
export const action = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`;
export const originals = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_networks=213`;
export const ComedyMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=35`;
export const HorrorMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27`;
export const ActionMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=28`;
export const RomanceMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10749`;
export const Documentaries = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99`;
