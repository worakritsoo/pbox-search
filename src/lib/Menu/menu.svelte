<script>
	import { page } from '$app/stores';
</script>


<ion-item >
	<ion-label><a sveltekit:prefetch href="/search">ค้นหา</a></ion-label>
</ion-item>
<ion-item>
	<ion-label><a sveltekit:prefetch href="/">หน้าแรก</a></ion-label>
</ion-item>
<ion-item>
	<ion-label><a sveltekit:prefetch href="/about">เกี่ยวกับ</a></ion-label>
</ion-item>
<ion-item>
	<ion-label><a sveltekit:prefetch href="/posts">ผู้ใช้</a></ion-label>
</ion-item>

<!-- markup (zero or more items) goes here -->
<style>
	/* your styles go here */


</style>
