<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function closeDetails() {
		dispatch('closeDetails');
	}

	export let userLogin: string;

	async function getUserDetails(userLogin: string): Promise<any> {
		const res = await fetch(`https://api.github.com/users/${userLogin}`);
		const userDetail = await res.json();

		if (res.ok) {
			return userDetail;
		} else {
			throw new Error(userDetail);
		}
	}
	let details = getUserDetails(userLogin);
</script>

<div class="m-2 border border-gray-400 rounded-lg p-4">
	{#await details then detail}
		<button on:click={closeDetails}>X</button>
		<p class="font-semibold">{detail.name}</p>
		<p class="text-sm">{detail.company}</p>
		<p class="text-sm">{detail.location}</p>
	{/await}
</div>
