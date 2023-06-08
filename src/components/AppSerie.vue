<script>
import { store } from './../store.js';
export default {
    name: 'AppSerie',
    props: {
        detSeries: Object
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
        <img :src="`${store.apiImageHttp}${detSeries.poster_path}`" alt="">
        <h2>{{ detSeries.name }}</h2>
        <h3>{{ detSeries.original_name }}</h3>
        <img v-if="store.flag.includes(detSeries.original_language)" :src="`${detSeries.original_language}.png`"
            :alt="`${detSeries.original_language}`">
        <p v-else>{{ detSeries.original_language }}</p>
        <p>{{ detSeries.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 15px;
}
</style>