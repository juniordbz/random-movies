<script lang="ts">
	import Stars from './Stars.svelte'

	import type { GetMovieResponse } from '../../lib/API/get-movies'
	export let currentMovie: GetMovieResponse

	const IMG_URL = 'https://image.tmdb.org/t/p/w500'
</script>

<div class="flex flex-col items-center gap-9 md:w-[628px] md:flex-row md:items-start">
	<div class="flex-1">
		<img class="mb-4 max-h-60 w-44" src={`${IMG_URL}${currentMovie.poster_path}`} alt="" />
		<Stars rating={currentMovie.vote_average} />
	</div>
	<div class="flex flex-col gap-5 px-4 text-slate-100 md:px-0">
		<h1 class="text-xl font-bold">{currentMovie.title}</h1>
		<p>{currentMovie.overview}</p>
	</div>
</div>
