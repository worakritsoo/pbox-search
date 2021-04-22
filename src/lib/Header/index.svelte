<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';

	import { toggle } from '$lib/stores.js';
</script>

<header>
	<div class="py-4">
		<a href=".">
			<h1 class="mx-10" on:click={toggle.toggle}>Pea</h1>
		</a>
		{#if $toggle}
			<nav>
				<ul>
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
				</ul>
			</nav>
		{/if}
	</div>
</header>
