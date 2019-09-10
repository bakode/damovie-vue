<template>
    <section>
        <div class="d-flex justify-content-center align-items-center">
            <section id="search" class="p-5">
                <div class="description text-center">
                    <h1>Search</h1>
                    <p>Search yout favorite movie by typing some title on this input field</p>
                </div>
                <div class="field mt-3">
                    <input class="form-control form-control-lg text-center" type="text" placeholder="Your favorite movie (e.g. Avengers)" v-model="search">
                </div>
            </section>
        </div>

        <section id="list-popular-movie">
            <div class="title">
                <section v-if="search">
                    <h3>Search Result</h3>
                    <p>Return result from <a href="https://themoviedb.org">themoviedb.org</a> with query {{search}} </p>
                </section>

                <section v-else>
                    <h3>Popular Movies</h3>
                    <p>Popular movie from <a href="https://themoviedb.org">themoviedb.org</a>.</p>
                </section>
            </div>

            <div class="d-flex justify-content-center align-items-center mt-5 mb-5" v-if="loading">
                <span class="spinner-border" role="status"></span>
            </div>

            <div class="mt-5 mb-5" v-else>
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch" v-for="movie in movies" :key="movie.id">
                        <a href="#" style="text-decoration: none !important" class="text-dark mb-5">
                            <div class="card">
                                <img :src="getImageUrl(movie.poster_path)" class="card-img-top" alt="movie-picture">
                                <div class="card-body">
                                    <h5 class="card-title">{{movie.title}}</h5>
                                    <p class="card-text">{{movie.overview | truncate(100, '...') }}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item" v-if="current_page != 1">
                                <a class="page-link" v-on:click="goToPage(current_page - 1)" href="#">Prev</a>
                            </li>
                            <li class="page-item mr-1 ml-1">
                                <p class="page-link bg-dark text-white">
                                    {{current_page + ' / ' + total_pages}}
                                </p>
                            </li>
                            <li class="page-item" v-if="current_page != total_pages">
                                <a class="page-link" v-on:click="goToPage(current_page + 1)" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </section>

    </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
        name: 'List',
        props: {
            msg: String
        },
        data() {
            return {
                default_page: 1,
                search: ''
            }
        },
        computed: mapState([
            'movies',
            'current_page',
            'total_pages',
            'loading'
        ]),
        mounted() {
            this.$store.dispatch('laodMovies', this.default_page)
        },
        filters: {
            truncate: function (text, length, suffix) {
                return text.substring(0, length) + suffix;
            },
        },
        methods: {
            getImageUrl(path) {
                var url = process.env.VUE_APP_API_IMAGE_URL
                var size = process.env.VUE_APP_API_IMAGE_POSTER_SIZE
                return url+size+path
            },
            goToPage(page) {
                this.$store.dispatch('laodMovies', page)
            }
        },
        watch: {
            search: function(value) {
                if (value.length > 0) {
                    this.$store.dispatch('searchMovies', value)
                } else {
                    this.$store.dispatch('laodMovies', this.default_page)
                }
            }
        },
    }
</script>