<script context="module" lang="ts">
	export const prerender = true;

	import type { Load } from '@sveltejs/kit';

	// see https://kit.svelte.dev/docs#loading
</script>

<script lang="ts">
	import Counter from '$lib/Counter/index.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>Pea</section>

<style style lang="postcss">
</style>
