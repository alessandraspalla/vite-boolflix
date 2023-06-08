<script>
import { store } from './../store.js';
export default {
    name: 'AppHeader',
    emits: ['search'],
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <input type="text" placeholder="Cerca un film" v-model="store.userSearch" @keyup.enter="$emit('search')">
    <button @click="$emit('search')">Cerca</button>
</template>

<style lang="scss" scoped></style>