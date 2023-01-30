import React, { useEffect } from 'react'
import categories, { getMovies } from '../api';
import "./Banner.css"

function Banner() {
    const [movie, setMovie] = React.useState({});

    const fetchRandomMovie = async () => {
        try {
            const netflixOriginalsCategory = categories.find(
                (category) => category.name === "Netflix Originals"
            );
            const data = await getMovies(netflixOriginalsCategory.path);
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * movies.length);
            setMovie(movies[randomIndex]);
        } catch (error) {
            console.log("Banner FetchError: ", error);
        }
    };

    useEffect(() => {
        fetchRandomMovie();
    }, []);

    return (<header className="banner-container" style={{
        backgroundSize: "800px 600px",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        roundPosition: "center-center"
    }}
    >
        <div className="banner-content">
            <div className="banner-title">{movie?.title || movie?.name || movie?.original_name}</div>
            <div className="banner-button-container">
                <button className="banner-button"> Assistir</button>

                <button className="banner-button">Minha Lista</button>
            </div>
            <div className="banner-description"></div>
        </div>
    </header >
    )
}

export default Banner