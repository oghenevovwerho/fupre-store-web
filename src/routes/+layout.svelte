<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	let { children } = $props();
	import "./layout.css";
</script>

<svelte:head>
	<title>Fupre shop</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
	{@render children()}
</main>
