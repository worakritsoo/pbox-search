<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import '../app.css';
</script>

<body>

	<ion-split-pane content-id="menu-content" when="lg">
		<ion-menu content-id="menu-content" side="start" type="overlay">
			<ion-header>
				<ion-toolbar>
					<ion-title>Awesome avocado menu</ion-title>
				</ion-toolbar>
			</ion-header>
			<ion-content>
				Awesome avocado content
			</ion-content>
		</ion-menu>
		<ion-content id="menu-content">
			<ion-header>
				<ion-toolbar>
					<ion-buttons slot="start">
						<ion-menu-button menuId="menu-content"></ion-menu-button>
					</ion-buttons>
					
					<ion-title>Pbox</ion-title>
				</ion-toolbar>
			</ion-header>
			<slot />
		</ion-content>
	</ion-split-pane>
</body>


<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	
</style>
