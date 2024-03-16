import axios from 'axios';

const apiKey = '17b68fe90623d28accc825a20eb7f814';
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&page=1&sort_by=vote_average.desc&vote_count.gte=1000`;

export async function getRandomMovie() {
	try {
		const response = await axios.get(url);
		const movies = response.data.results;
		const randomIndex = Math.floor(Math.random() * movies.length);
		const randomMovie = movies[randomIndex];
		console.log(randomMovie);
		return randomMovie;
	} catch (error) {
		console.error('Erro:', error);
		throw error;
	}
}
