<script lang="ts">
	import '../app.postcss';
	import Menu from '$lib/Menu/menu.svelte';
</script>

<body>
	<ion-split-pane content-id="menu-content" when="xl">
		<ion-menu content-id="menu-content" side="start" type="overlay">
			<ion-header>
				<ion-toolbar color="primary">
					<ion-title>Menu</ion-title>
				</ion-toolbar>
			</ion-header>
			<ion-content>
				<Menu />
			</ion-content>
		</ion-menu>
		<div class="ion-page" id="menu-content">
			<ion-header>
				<ion-toolbar>
					<ion-buttons slot="start">
						<ion-menu-toggle>
							<ion-button>
								<ion-icon slot="icon-only" name="menu" />
							</ion-button>
						</ion-menu-toggle>
					</ion-buttons>
					<ion-title>Header</ion-title>
				</ion-toolbar>
			</ion-header>
			<ion-content class="no-padding">
				<slot />
			</ion-content>
		</div>
	</ion-split-pane>
</body>

<style>
	ion-menu{
		--side-max-width:180px;
	}
</style>
