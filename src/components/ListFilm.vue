<script>
import { store } from './../store.js';
import AppCard from './AppCard.vue'

export default {
    name: 'ListFilm',
    components: {
        AppCard
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <h2>FILM</h2>
    <div class="container">
        <AppCard v-for="film in store.filmList[0]" :details="film" :key="film.id" />
    </div>
    <h2>SERIE</h2>
    <div class="container">
        <AppCard v-for="serie in store.filmList[1]" :details="serie" :key="serie.id" />
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
</style>