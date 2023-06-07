<script>
import { store } from './../store.js';
import AppFilm from './AppFilm.vue'
export default {
    name: 'ListFilm',
    components: {
        AppFilm
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <AppFilm v-for="film in store.filmList" :details="film" :key="film.id" />
</template>

<style lang="scss" scoped></style>