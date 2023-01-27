const API_KEY = "5aec72ce817dbb6ea64f59a610877e3f";

const categories = [
    {
        name: "trending",
        title: "em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`
    },
    {
        name: "Netflix originals",
        title: "Originais Neflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`
    },
    {
        name: "Top rated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`
    },
    {
        name: "Comedy",
        title: "Comédia",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`
    },
    {
        name: "Romance",
        title: "Romance",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=1074`
    },
    {
        name: "Romance",
        title: "Documentários",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`
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