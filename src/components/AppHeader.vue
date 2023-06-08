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
    <header>
        <div id="logo">
            BOOLFLIX
        </div>
        <input type="text" placeholder="Cerca un film" v-model="store.userSearch" @keyup.enter="$emit('search')">
    </header>
</template>

<style lang="scss" scoped>
header {
    padding-inline: 20px;
    height: 50px;
    background-color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #logo {
        font-size: 1.8rem;
        color: red;
    }

    input {
        height: 1.8rem;
    }
}
</style>