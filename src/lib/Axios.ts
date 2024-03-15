import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/movie/11?api_key=17b68fe90623d28accc825a20eb7f814'
});
