const API_KEY = "5aec72ce817dbb6ea64f59a610877e3f";

const categories = [
    {
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        isLarge: true,
    },
    {
        name: "Netflix Originals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        isLarge: false,
    },
    {
        name: "Top rated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false,
    },
    {
        name: "Comedy",
        title: "Comédia",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
        isLarge: false,
    },
    {
        name: "Romance",
        title: "Romance",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
        isLarge: false,
    },
    {
        name: "Documentários",
        title: "Documentários",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
        isLarge: false,
    },
];

export const getMovies = async (path) => {
    try {
        let url = `https://api.themoviedb.org/3/${path}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("error getMovies: ", error)
    }
}

export default categories;