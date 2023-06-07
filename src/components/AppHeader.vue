<script>
import { store } from './../store.js';
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <input type="text" placeholder="Cerca un film" v-model="store.userSearch">
    <button @click="$emit('search')">Cerca</button>
</template>

<style lang="scss" scoped></style>