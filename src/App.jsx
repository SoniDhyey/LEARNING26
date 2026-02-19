import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import { HeaderComponent } from "./components/HeaderComponent";
import { FooterComponent } from "./components/FooterComponent";
import ContentComponent from "./components/ContentComponent";
import { MapDemo1 } from "./components/MapDemo1";
import { MapDemo2 } from "./components/MapDemo2";
import { MapDemo3 } from "./components/MapDemo3";
import { MapDemo4 } from "./components/MapDemo4";
import { MapDemo5 } from "./components/MapDemo5";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/NetflixHome";
import { NetflixMovies } from "./components/NetflixMovies";
import { NetflixShows } from "./components/NetflixShows";
import { Navbar } from "./components/Navbar";
import { HomeComponent } from "./components/HomeComponent";
import { Watch } from "./components/Watch";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { FunctionDemo1 } from "./components/FunctionDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStateDemo3 } from "./components/UseStateDemo3";
import { InputDemo1 } from "./components/input/InputDemo1";
import { InputDemo2 } from "./components/input/InputDemo2";
import { FormDemo1 } from "./components/Form/FormDemo1";
import { FormDemo2 } from "./components/Form/FormDemo2";
import { FormDemo3 } from "./components/Form/FormDemo3";
import { FormDemo4 } from "./components/Form/FormDemo4";
import {Employees} from './components/Employees'
import { ApiDemo1 } from "./components/api/ApiDemo1";
import {ApiDemo2} from "./components/api/ApiDemo2"
import { ApiDemo3 } from "./components/api/ApiDemo3";
import { OmdbSearch } from "./components/api/OmdbSearch";
import { Watch1 } from "./components/api/Watch1";
import {ApiDemo4} from "./Components/api/ApiDemo4"




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
        <Route path="/usestatedemo1" element ={<UseStateDemo1/>}></Route>
        <Route path="/usestatedemo2" element ={<UseStateDemo2/>}></Route>
        <Route path="/usestatedemo3" element ={<UseStateDemo3/>}></Route>
        <Route path="/fundemo1" element ={<FunctionDemo1/>}></Route>
        <Route path="/employees" element ={<Employees/>}></Route>
        <Route path="/inputdemo1" element = {<InputDemo1/>}></Route>
        <Route path="/inputdemo2" element = {<InputDemo2/>}></Route>
        <Route path="/formdemo1" element = {<FormDemo1/>}></Route>
        <Route path="/formdemo2" element = {<FormDemo2/>}></Route>
        <Route path="/formdemo3" element = {<FormDemo3/>}></Route>
        <Route path="/formdemo4" element = {<FormDemo4/>}></Route>
        <Route path="/apidemo1" element ={<ApiDemo1/>}></Route>
         <Route path="/apidemo2" element ={<ApiDemo2/>}></Route>
         <Route path="/apidemo3" element ={<ApiDemo3/>}></Route>
         <Route path="/Omdb" element ={<OmdbSearch/>}></Route>
         <Route path="/watch1/:id" element={<Watch1/>}></Route>
         <Route path="/apidemo4"element={<ApiDemo4/>}></Route>

 

         
      </Routes>
    

    </div>
  );
}

export default App;