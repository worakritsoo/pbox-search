<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
	import '../app.postcss';
</script>

<Header />
<div class="flex flex-col h-screen justify-between">
	<div class="h-10 bg-blue-100" />

	<slot />
	<main class="mb-auto h-10 bg-green-500" />
	<!-- สำหรับใส่ลิ้งข้างล่าง เช่น  ลิ้งติดต่อ หรืออื่นๆ -->

	<footer class="h-10 bg-blue-500" />
</div>

<style>
</style>
