import { reactive } from 'vue';

export const store = reactive({
    apiMovieURL: 'https://api.themoviedb.org/3/search/movie?api_key=',
    apiSeriesURL: 'https://api.themoviedb.org/3/search/tv?api_key=',
    apiKey: '45eba019e8ad9626cf4eeca6931e2dc7',
    filmList: [],
    flag: [
        'en',
        'es',
        'it',
        'fr',
        'ja'
    ],
    userSearch: '',
    apiSearchParameter: 'query'
});