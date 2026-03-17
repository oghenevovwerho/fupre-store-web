<script lang="ts">
	let { href, text, onclick }: { href: string; text: string; onclick?: () => void } = $props();
	import { page } from '$app/state';
</script>

<a
	{onclick}
	data-sveltekit-preload-data
	{href}
	class={`${page.url.pathname === href && 'text-[#C62828]'} 
		cursor-pointer text-lg hover:text-blue-600 active:opacity-50`}
>
	{text}
</a>
