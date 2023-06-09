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
    <div class="container">
        <AppCard v-for="film in store.filmList[0]" :details="film" :key="film.id" />
    </div>
    <div class="container">
        <AppCard v-for="serie in store.filmList[1]" :details="serie" :key="serie.id" />
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-wrap: wrap;
}
</style>