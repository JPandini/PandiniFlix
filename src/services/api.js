
//BASE:  https://api.themoviedb.org/3/
//APIURL:  https://api.themoviedb.org/3/movie/now_playing?api_key=53397b6c8682720e2de6f3e1fc8dfb12&language=pt-BR

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;