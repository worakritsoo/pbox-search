<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
	import '../app.postcss';
	import IonMenu from '$lib/Components/IonMenu.svelte';
	import IonHeader from '$lib/Components/IonHeader.svelte';
</script>

<body>
	<ion-app>
		<ion-split-pane content-id="main">
			<!--  the side menu  -->
			<IonMenu />

			<!-- the main content -->
			<div class="ion-page" id="main">
				<IonHeader />
				<ion-content class="ion-padding">
					<slot />
				</ion-content>
			</div>
		</ion-split-pane>
	</ion-app>
</body>

<!-- 
<div class="flex flex-col h-screen justify-between">
	<Header />

	<main class="mb-auto flex-grow bg-gray-100">
		<slot />
	</main>

	<footer class="h-10 bg-indigo-200" />
</div> -->
<style>
</style>
