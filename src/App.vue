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
    getFilm() {
      let myURL = store.apiURL;

      if (store.userSearch !== '') {
        myURL += `&${store.apiSearchParameter}=${store.userSearch}`
      }

      axios.get(myURL)
        .then(res => {
          store.filmList = res.data.results;
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
}
</script>

<template>
  <AppHeader @search="getFilm" />
  <main>
    <ListFilm />
  </main>
</template>

<style lang="scss"></style>
