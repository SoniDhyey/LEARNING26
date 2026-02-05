import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { HeaderComponent } from "./Components/HeaderComponent";
import { FooterComponent } from "./Components/FooterComponent";
import ContentComponent from "./Components/ContentComponent";
import { MapDemo1 } from "./Components/MapDemo1";
import { MapDemo2 } from "./Components/MapDemo2";
import { MapDemo3 } from "./Components/MapDemo3";
import { MapDemo4 } from "./Components/MapDemo4";
import { MapDemo5 } from "./Components/MapDemo5";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./Components/NetflixHome";
import { NetflixMovies } from "./Components/NetflixMovies";
import { NetflixShows } from "./Components/NetflixShows";
import { Navbar } from "./Components/Navbar";
import { HomeComponent } from "./Components/HomeComponent";
import  ErrorNotFound  from "./Components/ErrorNotFound";
import { Watch } from "./Components/Watch";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/netflixhome" element={<NetflixHome />}></Route>
        <Route path="/netflixmovies" element={<NetflixMovies />}></Route>
        <Route path="/netflixshows" element={<NetflixShows />}></Route>
        <Route path="/" element = {<HomeComponent/>}></Route>
        <Route path="/watch/:name" element = {<Watch/>}></Route>
        <Route path="/*" element = {<ErrorNotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;