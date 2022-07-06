import React, { useState, useEffect } from "react";
import "./banner.css";
import axios from "../../api/axios";
import requests from "../../api/Request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie.name || movie.original_name}
        </h1>
        <div className="banner__buttons" style={{ paddingTop: "18px" }}>
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description" style={{ paddingTop: "18px" }}>
          {truncate(movie?.overview, 145)}
        </p>
      </div>
      <div className="banner--fadeBottom" />
    </div>
  );
};

export default Banner;
