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
@use './../styles/partials/variables.scss' as *;

header {
    padding-inline: 20px;
    height: 50px;
    background-color: $black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    #logo {
        font-size: 1.8rem;
        color: $logo-color;
    }

    input {
        height: 1.8rem;
    }
}
</style>