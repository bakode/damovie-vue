import {
    fetchMovies,
    searchMovie
} from '@/api'

export default {
    laodMovies ({commit}, page) {
        commit('SET_LOADING', true)
        return fetchMovies(page)
                .then(result => result.data)
                .then(items => {
                    console.log('load page: '+page)
                    commit('SET_MOVIES', items.results)
                    commit('CURRENT_PAGE', items.page)
                    commit('TOTAL_PAGES', items.total_pages)
                    commit('SET_LOADING', false)
                })
    },

    searchMovies ({commit}, param) {
        commit('SET_LOADING', true)
        return searchMovie(param)
                .then(result => result.data)
                .then(items => {
                    console.log('search movie with title: '+param)
                    commit('SET_MOVIES', items.results)
                    commit('CURRENT_PAGE', items.page)
                    commit('TOTAL_PAGES', items.total_pages)
                    commit('SET_LOADING', false)
                })
    }
}