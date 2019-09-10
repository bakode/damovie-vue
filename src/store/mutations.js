export default {
    SET_LOADING (state, status) {
        state.loading = status
    },
    SET_MOVIES (state,  items) {
        state.movies = items
    },
    CURRENT_PAGE (state,  item) {
        state.current_page = item
    },
    TOTAL_PAGES (state,  item) {
        state.total_pages = item
    }
}