<script>
import { store } from './../store.js';
import AppFilm from './AppFilm.vue'
import AppSerie from './AppSerie.vue'
export default {
    name: 'ListFilm',
    components: {
        AppFilm,
        AppSerie
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
    <AppFilm v-for="film in store.filmList[0]" :detFilm="film" :key="film.id" />
    <h2>SERIE</h2>
    <AppSerie v-for="series in store.filmList[1]" :detSeries="series" :key="series.id" />
</template>

<style lang="scss" scoped></style>