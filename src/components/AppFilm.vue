<script>
import { store } from './../store.js';
export default {
    name: 'AppFilm',
    props: {
        detFilm: Object
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="card">
        <h2>{{ detFilm.title }}</h2>
        <h3>{{ detFilm.original_title }}</h3>
        <img v-if="store.flag.includes(detFilm.original_language)" :src="`${detFilm.original_language}.png`"
            :alt="`${detFilm.original_language}`">
        <p v-else>{{ detFilm.original_language }}</p>
        <p>{{ detFilm.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 15px;
}
</style>