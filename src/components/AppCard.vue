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
        <div class="image">
            <img :src="`${store.apiImageHttp}${details.poster_path}`" alt="">
        </div>
        <div class="text">
            <h2>{{ details.title }}</h2>
            <h3>{{ details.original_title }}</h3>
            <h2>{{ details.name }}</h2>
            <h3>{{ details.original_name }}</h3>
            <img class="flag" v-if="store.flag.includes(details.original_language)"
                :src="`${details.original_language}.png`" :alt="`${details.original_language}`">
            <p v-else>{{ details.original_language }}</p>
            <div class="star">
                <span v-for="n in getStars">
                    <i class="fa-solid fa-star"></i>
                </span>
                <span v-for="n in 5 - getStars">
                    <i class="fa-regular fa-star"></i>
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: 342px;
    height: 480px;
    color: white;
    background-color: #000;
    margin-bottom: 50px;

    &:hover .image {
        display: none;
    }

    &:hover .text {
        display: block;
        padding: 30px;
    }

    .image img {
        height: 480px;
        object-fit: cover;
    }

    .text {
        display: none;
    }

    img.flag {
        width: 30px;
    }
}

i {
    color: yellow;
}
</style>