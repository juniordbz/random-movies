<script lang="ts">
	import Star from 'lucide-svelte/icons/star'

	export let rating: number
</script>

<div class="flex items-center">
	{#each [1, 2, 3, 4, 5] as star}
		<Star class="h-6 w-6 fill-current {star <= rating / 2 ? 'text-yellow-400' : 'text-black'}" />
	{/each}
</div>
