<script>
	import Card from '$lib/Card/card.svelte';

	function ev() {
		console.log(ev);
	}
	const post = [
		{
			name: 'hiloow',
			version: 3,
			speed: 'blazing',
			website: 'https://svelte.dev'
		}
	];
</script>

{#each post as item}
	<Card>
		<span slot="name">{item.name}</span>
		<span slot="link">{item.website}</span>
	</Card>
{/each}

<style>
	/* your styles go here */
</style>
