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
    <AppCard v-for="film in store.filmList[0]" :details="film" :key="film.id" />
    <h2>SERIE</h2>
    <AppCard v-for="serie in store.filmList[1]" :details="serie" :key="serie.id" />
</template>

<style lang="scss" scoped></style>