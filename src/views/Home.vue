<template>
    <div class="container mb-5">
        <news-list-component/>
    </div>
</template>

<script>
    import NewsListComponent from '@/components/news/List'

    export default {
        name: 'List',
        components: {
            NewsListComponent
        }
    }
</script>
