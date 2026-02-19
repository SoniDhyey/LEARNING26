import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Watch1 = () => {

  const { id } = useParams()   // get imdbID from URL
  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetchMovie()
  }, [id])

  const fetchMovie = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=6d733822&i=${id}`
    )

    setMovie(res.data)
  }

  return (
    <div className="container mt-4">

      <div className="card shadow p-4">

        <div className="row">

          <div className="col-md-4 text-center">
            <img
              src={movie.Poster}
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-8">

            <h2>{movie.Title}</h2>

            <p><b>Year:</b> {movie.Year}</p>
            <p><b>Genre:</b> {movie.Genre}</p>
            <p><b>Actors:</b> {movie.Actors}</p>
            <p><b>Plot:</b> {movie.Plot}</p>
            <p><b>IMDB Rating:</b> {movie.imdbRating}</p>

          </div>

        </div>

      </div>

    </div>
  )
}
