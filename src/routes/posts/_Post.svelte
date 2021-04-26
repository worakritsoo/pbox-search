<script>
	export let name;

    let rando= Math.floor(Math.random()*100)+200
</script>

<!-- markup (zero or more items) goes here -->
<ion-card class="border-2">
	<ion-card-header class="flex justify-between">
		<div class="w-1/2">
			<ion-card-title> <h1>{name}</h1></ion-card-title>
			<ion-card-subtitle>
				<slot>Somecontent</slot>
			</ion-card-subtitle>
		</div>
		<ion-avatar>
			<img class="h-15" src="https://placekitten.com/{rando}/{rando}" alt="avt" />
		</ion-avatar>
	</ion-card-header>
	<details class="mx-5">
		<summary> more </summary>
		<ion-card-content> Awesome content </ion-card-content>
	</details>
</ion-card>

<style>
	/* your styles go here */

	summary {
		list-style-type: none;
	}
</style>
