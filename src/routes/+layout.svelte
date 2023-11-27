<script lang="ts">
	export const ssr = false;
	import '../app.pcss';
	import '@fontsource-variable/montserrat';
	import Header from './header.svelte';
</script>

<div class="layout">
	<Header />
	<main class="max-w-screen-2xl m-auto">
		<slot />
	</main>
</div>
