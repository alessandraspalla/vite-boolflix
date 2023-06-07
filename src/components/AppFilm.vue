<script>
export default {
    name: 'AppFilm',
    props: {
        details: Object
    }
}
</script>

<template>
    <div class="card">
        <h2>{{ details.title }}</h2>
        <h3>{{ details.original_title }}</h3>
        <p>{{ details.original_language }}</p>
        <p>{{ details.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped></style>