import axios from 'axios'

const API_URL = process.env.VUE_APP_API_URL
const API_KEY = process.env.VUE_APP_API_KEY

function api () {
    return axios.create({
        baseURL: API_URL
    })
}

export function fetchMovies(page) {
    var uri = 'discover/movie?api_key='+API_KEY+'&page='+page+'&sort_by=popularity.desc'
    return api().get(uri)
}

export function searchMovie(param) {
    var uri = 'search/movie?api_key='+API_KEY+'&query='+param
    return api().get(uri)
}
