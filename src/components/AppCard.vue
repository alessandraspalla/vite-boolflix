<script>
import { store } from './../store.js';
export default {
    name: 'AppCard',
    props: {
        details: Object,
        details: Object
    },
    data() {
        return {
            store
        }
    },
    computed: {
        getStars() {
            return Math.round(this.details.vote_average / 2)
        }
    }
}
</script>

<template>
    <div class="card">
        <img :src="`${store.apiImageHttp}${details.poster_path}`" alt="">
        <h2>{{ details.title }}</h2>
        <h3>{{ details.original_title }}</h3>
        <h2>{{ details.name }}</h2>
        <h3>{{ details.original_name }}</h3>
        <img v-if="store.flag.includes(details.original_language)" :src="`${details.original_language}.png`"
            :alt="`${details.original_language}`">
        <p v-else>{{ details.original_language }}</p>
        <p>{{ getStars }}</p>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 30px;
}
</style>