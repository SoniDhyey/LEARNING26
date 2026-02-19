import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Navbar = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search) return;

    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=6d733822&t=${search}`
      );

      if (res.data.Response === "True") {
        navigate(`/watch1/${res.data.imdbID}`);
        setSearch("");
      } else {
        alert("Movie not found!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-1">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-wrap"
            style={{ fontSize: "14px", gap: "2px" }}>

            <li className="nav-item">
              <Link className="nav-link p-1" to="/netflixhome">
              NetflixHome
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/netflixshows">
              Shows
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/netflixmovies">
              Movies
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/fundemo1">
              fundemo1
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/usestatedemo1">
              useState1
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/usestatedemo2">
              useState2
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/usestatedemo3">
              useState3
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/employees">
              employees
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/inputdemo1">
              input1
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/inputdemo2">
              input2
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/formdemo1">
              form1
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/formdemo2">
              form2
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/formdemo3">
              form3
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/formdemo4">
              form4
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/apidemo1">
              api1
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/apidemo2">
              api2
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/apidemo3">
               api3
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/omdb">
              omdb
              </Link></li>
            <li className="nav-item">
              <Link className="nav-link p-1" to="/Watch1">
              Watch1
              </Link></li>
              <li className="nav-item">
              <Link className="nav-link p-1" to="/apidemo4">
              api4
              </Link></li>

          </ul>

          {/* ✅ Updated Search Form */}
          <form className="d-flex ms-auto" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Movie..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ height: '30px', fontSize: '14px' }}
            />
            <button
              className="btn btn-outline-success btn-sm"
              type="submit"
            >
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
};
