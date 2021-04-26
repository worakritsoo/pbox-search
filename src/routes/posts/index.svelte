<script>
	import Post from './_Post.svelte';

	let posts = [
		{
			name: 'Post1'
		},
		{
			name: 'Post2'
		}
	];
</script>

<!-- markup (zero or more items) goes here -->

{#each 'posts' as post}
	<Post>
		{post}
	</Post>
{/each}

<style>
	/* your styles go here */
</style>
