import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL
const API_KEY = process.env.VUE_APP_API_KEY
const SORT_BY = 'popularity.desc'

export function fetchMovies(page) {
    var url =  API_URL+'discover/movie?'
                +"api_key="+API_KEY
                +'&page='+page
                +'&sort_by='+SORT_BY
    return axios.get(url)
}

export function searchMovie(param) {
    var url =  API_URL+'search/movie?'
    +"api_key="+API_KEY
    +'&query='+param
    return axios.get(url)
}
