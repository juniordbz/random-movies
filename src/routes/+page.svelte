<!-- RandomMovieGenerator.svelte -->
<script lang="ts">
	import Movies from './../lib/components/Movies.svelte';
	import logo from '../public/assets/logo.svg';
	import { getRandomMovie } from '$lib/API/get-movies';
	import { onMount } from 'svelte';

	// Definir a interface para os dados do filme
	interface Movie {
		title: string;
		poster_path: string;
		overview: string;
	}

	// Declaração do estado reativo para o filme atual
	let currentMovie: Movie | null = null;

	// Função para carregar um filme aleatório ao montar o componente
	onMount(loadRandomMovie);

	// Função para carregar um filme aleatório
	async function loadRandomMovie() {
		currentMovie = await getRandomMovie();
	}
</script>

<svelte:head>
	<title>Random Movies</title>
</svelte:head>

<div
	class="via-63% flex flex-col items-center gap-8 bg-gradient-to-tr from-[#1E46A3] from-10% via-[#000000] to-[#C12A23] to-100% py-32 md:min-h-screen"
>
	<header class="flex flex-col items-center gap-3">
		<img src={logo} alt="logo" />
		<h1 class="text-center text-4xl font-bold text-slate-100">Não sabe o que assistir?</h1>
	</header>
	{#if currentMovie}
		<Movies {currentMovie} />
	{:else}
		<p class="text-slate-100">Carregando...</p>
	{/if}
	<button
		type="button"
		on:click={loadRandomMovie}
		class="flex min-h-12 w-44 items-center justify-center gap-4 rounded-md border border-transparent bg-[#E9E6E3] duration-100 hover:border-rose-600"
	>
		<img src={logo} width={35} height={25} alt="" />
		<p class="text-xs font-bold text-black">Encontrar filme</p>
	</button>
	<div>
		<p class="px-4 text-center text-sm text-zinc-100">
			Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.
		</p>
	</div>
</div>
