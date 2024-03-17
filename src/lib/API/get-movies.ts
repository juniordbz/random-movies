import axios, { AxiosError } from 'axios'

const apiKey = '17b68fe90623d28accc825a20eb7f814'
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&page=1`

export interface GetMovieResponse {
	title: string
	poster_path: string
	overview: string
	vote_average: number
}

interface MovieApiResponse {
	results: GetMovieResponse[]
}

export async function getRandomMovie(): Promise<GetMovieResponse> {
	try {
		const response = await axios.get<MovieApiResponse>(url)
		const movies = response.data?.results
		if (!movies || movies.length === 0) {
			throw new Error('Nenhum filme encontrado na resposta da API.')
		}
		const randomIndex = Math.floor(Math.random() * movies.length)
		const randomMovie = movies[randomIndex]
		return randomMovie
	} catch (error) {
		const axiosError = error as AxiosError
		if (axiosError.response) {
			console.error('Erro de resposta da API:', axiosError.response.data)
		} else if (axiosError.request) {
			console.error('Erro de requisição:', axiosError.request)
		} else {
			console.error('Erro:', axiosError.message)
		}
		throw new Error('Falha ao obter filme aleatório.')
	}
}
