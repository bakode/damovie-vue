<template>
    <div id="app">
        <navbar-component/>
        <router-view/>
        <footer-component/>
    </div>
</template>

<script>
    import NavbarComponent from '@/components/part/Navbar'
    import FooterComponent from '@/components/part/Footer'

    export default {
        components: {
            NavbarComponent,
            FooterComponent
        }
    }
</script>