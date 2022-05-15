import React, { useContext } from "react";

import { Link } from "react-router-dom";

import Input from "../components/input";
import { MovieContext } from "../context/MovieContext";
import Card from "../components/card";
import "../styles/home.css";

const Home = () => {
    const { setSearch, movies, favoriteHandler } = useContext(MovieContext);
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="home-container">
            <Input handleSearch={handleSearch} />
            { }
            {movies?.length > 0 ? (
                <div className="movies">
                    {movies?.map((movie) => {
                        return (
                            <Link
                                to={`movies/${movie.imdbID}`}
                                className="text-link"
                                key={movie.imdbID}
                            >
                                <Card
                                    key={movie.imdbID}
                                    image={movie.Poster}
                                    title={movie.Title}
                                    year={movie.Year}
                                    addFavorite={(e) => favoriteHandler(movie, e)}
                                    isFavorite={movie.isFavorite}
                                />
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <div className="search-warning">
                    <p>Search a movie!</p>
                </div>
            )}
        </div>
    );
};

export default Home;