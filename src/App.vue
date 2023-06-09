<script>
import { store } from './store.js';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import ListFilm from './components/ListFilm.vue';

export default {
  components: {
    AppHeader,
    ListFilm
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getFilmAndSeries() {
      let myMovieURL = store.apiMovieURL;
      let mySeriesURL = store.apiSeriesURL;
      store.filmList = [];

      if (store.userSearch !== '') {
        myMovieURL += `${store.apiKey}&${store.apiSearchParameter}=${store.userSearch}`
        mySeriesURL += `${store.apiKey}&${store.apiSearchParameter}=${store.userSearch}`
      }

      axios.get(myMovieURL)
        .then(res => {
          store.filmList.push(res.data.results);
        })
        .catch(error => {
          console.log(error);
        })

      axios.get(mySeriesURL)
        .then(res => {
          store.filmList.push(res.data.results);
          console.log(store.filmList);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
}
</script>

<template>
  <AppHeader @search="getFilmAndSeries" />
  <main>
    <ListFilm />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
@use './styles/partials/variables.scss' as *;

main {
  height: calc(100vh - 50px);
  overflow: auto;
  background-color: $grey;
  padding-top: 30px;
  margin-top: 50px;
}
</style>
