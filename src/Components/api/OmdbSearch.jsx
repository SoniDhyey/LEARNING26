import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export const OmdbSearch = () => {

  const [movies, setmovies] = useState([])
  const [searchParam, setsearchParam] = useState("Stranger Things")

  const navigate = useNavigate()   // ✅ navigation

  const searchMovie = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=6d733822&s=${searchParam}`
    )

    setmovies(res.data.Search || [])
  }

  // ✅ view details function
  const ViewDetails = (id) => {
    navigate(`/watch1/${id}`)
  }

  return (
    <div className="container mt-4">

      <h1 className="text-center mb-4">OMDB SEARCH</h1>

      <div className="text-center mb-4">
        <button
          className="btn btn-primary"
          onClick={searchMovie}
          style={{ margin: "50px", backgroundColor: "red", textAlign: "center" }}
        >
          Search
        </button>
      </div>

      <div className="row g-4">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="col-12 col-sm-6 col-md-4 col-lg-3">

            <div className="card h-100 shadow text-center p-3">

              <img
                src={movie.Poster}
                className="rounded-circle mx-auto"
                style={{ height: "250px", width: "250px", objectFit: "cover" }}
              />

              <button
                className="btn btn-success mt-3"
                onClick={() => ViewDetails(movie.imdbID)}
              >
                View Details
              </button>

              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">Year: {movie.Year}</p>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  )
}
