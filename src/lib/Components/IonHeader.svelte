<script>
	let searchinput = () => {
		console.log(`on search `);
	};
</script>

<ion-header>
	<ion-toolbar color="pea">
		<ion-buttons slot="secondary">
			<ion-button onclick={searchinput}>
				<ion-icon slot="icon-only" name="search" />
			</ion-button>
			<ion-button>
				<ion-icon slot="icon-only" name="person-circle" />
			</ion-button>
		</ion-buttons>
		<ion-title>Pea</ion-title>
		<ion-buttons slot="start">
			<ion-menu-toggle auto-hide="false">
				<ion-button>
					<ion-icon slot="icon-only" name="menu" />
				</ion-button>
			</ion-menu-toggle>
		</ion-buttons>
	</ion-toolbar>
</ion-header>

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */
</style>
