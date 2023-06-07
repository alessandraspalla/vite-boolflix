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
        <img v-for="img in store.flagList" :src="img" :alt="img">
        <p>{{ details.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>
img {
    width: 15px;
}
</style>