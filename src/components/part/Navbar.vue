<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
            <img src="@/assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
            Da'Movie
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <!-- <li class="nav-item">
                    <router-link class="nav-link" to="/search">Search</router-link>
                </li> -->
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavbarComponent'
    }
</script>
