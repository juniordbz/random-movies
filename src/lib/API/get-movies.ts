import axios, { AxiosError } from 'axios'

const apiKey = '17b68fe90623d28accc825a20eb7f814'

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
		// Gera números aleatórios para a página e o índice
		const randomPageIndex = Math.floor(Math.random() * 50) + 1
		const randomIndex = Math.floor(Math.random() * 20)

		const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&page=${randomPageIndex}&sort_by=vote_average.desc&vote_count.gte=1000`
		const response = await axios.get<MovieApiResponse>(url)
		const movies = response.data?.results

		if (!movies || movies.length === 0) {
			throw new Error('Nenhum filme encontrado na resposta da API.')
		}

		// Obtém o filme da lista usando o índice aleatório
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
