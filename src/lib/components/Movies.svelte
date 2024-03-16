<script lang="ts">
	import Movie from '../../routes/+page.svelte';
	export let currentMovie: Movie;

	const IMG_URL = 'https://image.tmdb.org/t/p/w500';
</script>

<div class="flex flex-col items-start gap-9 md:w-[628px] md:flex-row">
	<img class="max-h-60 w-44" src={`${IMG_URL}${currentMovie.poster_path}`} alt="" />
	<div class="flex flex-col gap-5 px-4 text-slate-100 md:px-0">
		<h1 class="text-xl font-bold">{currentMovie.title}</h1>
		<p>{currentMovie.overview}</p>
	</div>
</div>
