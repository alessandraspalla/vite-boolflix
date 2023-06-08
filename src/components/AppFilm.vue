<script>
import { store } from './../store.js';
export default {
    name: 'AppFilm',
    props: {
        details: Object
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
        <h2>{{ details.title }}</h2>
        <h3>{{ details.original_title }}</h3>
        <img v-if="store.flag.includes(details.original_language)" :src="`${details.original_language}.png`"
            :alt="`${details.original_language}`">
        <p v-else>{{ details.original_language }}</p>
        <p>{{ details.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 15px;
}
</style>