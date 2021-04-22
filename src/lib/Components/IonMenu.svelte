<script lang="ts">
	import { page } from '$app/stores';

	import { toggle } from '$lib/stores.js';
</script>

<ion-menu content-id="main">
	<ion-header>
		<ion-toolbar color="pea">
			<ion-title>User</ion-title>
		</ion-toolbar>
	</ion-header>
	<ion-content>
		<ion-list>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">หน้าแรก</a></li>
			<li class:active={$page.path === '/login'}>
				<a sveltekit:prefetch href="/login">เข้าใช้งาน</a>
			</li>
			<li class:active={$page.path === '/about'}>
				<a sveltekit:prefetch href="/about">เกี่ยวกับเรา</a>
			</li>
			<li class:active={$page.path === '/todos'}>
				<a sveltekit:prefetch href="/todos">รายการที่่ต้องทำ</a>
			</li>
			<li class:active={$page.path === '/search'}>
				<a sveltekit:prefetch href="/search">ค้นหา</a>
			</li>
			<ion-item>
				<ion-label>Toggle</ion-label>
				<ion-toggle slot="end" />
			</ion-item>
		</ion-list>
	</ion-content>
</ion-menu>

<style>
	ion-menu {
		@apply bg-purple-200;
	}
</style>
