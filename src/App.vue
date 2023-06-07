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
          store.langList = [];
          store.flagList = [];
          store.filmList.forEach(element => {
            this.store.langList.push(element.original_language);
          });

          store.langList.forEach(element => {
            if (element === 'it') {
              store.flagList.push("/italian-flag.png")
            } else if (element === 'en') {
              store.flagList.push("/english-flag.png")
            } else if (element === 'fr') {
              store.flagList.push("/france-flag.png")
            } else if (element === 'es') {
              store.flagList.push("/esp-flag.png")
            } else {
              store.flagList.push(element)
            }
          })
          console.log(store.flagList);

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
