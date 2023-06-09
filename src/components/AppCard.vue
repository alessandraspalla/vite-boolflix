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
    <div class="wrapper">
        <div class="card">
            <!-- movie/serie cover -->
            <div class="image">
                <img :src="`${store.apiImageHttp}${details.poster_path}`" alt="">
            </div>

            <div class="text">
                <!-- title of movie/serie -->
                <div v-if="details.title"><strong>Titolo:</strong> {{ details.title }}</div>
                <div v-else><strong>Titolo:</strong> {{ details.name }}</div>

                <!-- original title of movie/serie -->
                <div v-if="details.original_title">
                    <strong>Titolo originale:</strong> {{ details.original_title }}
                </div>
                <div v-else>
                    <strong>Titolo originale:</strong> {{ details.original_name }}
                </div>

                <!-- flag or language -->
                <div class="flag" v-if="store.flag.includes(details.original_language)">
                    <img :src="`${details.original_language}.png`" :alt="`${details.original_language}`">
                </div>
                <p v-else>{{ details.original_language.toUpperCase() }}</p>

                <!-- rating -->
                <div class="star">
                    <span><strong>Voto: </strong></span>
                    <span v-for="n in getStars">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="n in 5 - getStars">
                        <i class="fa-regular fa-star"></i>
                    </span>
                </div>

                <!-- overview -->
                <div class="overview">
                    <strong>Overview: </strong>
                    {{ details.overview }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables.scss' as *;

.wrapper {
    width: calc(100% / 3 - 40px);
    height: 490px;
    margin-bottom: 50px;
    margin-inline: 20px;

    &:hover .card {
        transform: rotateY(180deg);
    }

    &:hover .image {
        display: none;
    }

    &:hover .card .text {
        display: block;
        padding: 30px;
    }

    .card {
        width: 100%;
        height: 100%;
        color: $white;
        background-color: $black;
        transition: 1s;

        div {
            margin-bottom: 12px;
        }

        .image img {
            height: 490px;
            object-fit: cover;
        }

        .text {
            display: none;
            transform: scaleX(-1);
        }

        .flag {
            width: 30px;
        }

        i {
            color: $stars;
        }

        .overview {
            height: 260px;
            overflow: auto;
        }
    }
}
</style>