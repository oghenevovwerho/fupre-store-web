<script lang="ts">
	import NavigationIcons from "./navigation_icons.svelte";
	import { onMount } from "svelte";
	import Loading from "../loading.svelte";
	import Aside from "../../../routes/components/aside.svelte";
	import SearchInput from "./search_input.svelte";

	let isopen = $state(true);
	let collapsible: HTMLElement;

	onMount(() => {
		collapsible = document.getElementById("collapsible")!;
	});

	function open() {
		document.body.classList.remove("overflow-hidden");
		collapsible.classList.add("-translate-x-full");
		isopen = true;
	}

	function close() {
		document.body.classList.add("overflow-hidden");
		collapsible.classList.remove("-translate-x-full");
		isopen = false;
	}

	function toggle() {
		isopen ? close() : open();
	}
</script>

<Loading />

<nav
	class="
	sticky inset-x-0
	top-0
	z-50
	flex
	h-[12svh] w-full
	items-center
	justify-between
	bg-[#faf9f7]
	shadow-md
	px-2
	gap-2.5
	transition-all
	duration-700
	"
>
	<a href="/" class="h-full text-left">
		<div class="tracking-[0.21em] text-[22px] font-semibold">TOBORE</div>
		<div
			class="
			text-[10px]
			tracking-[0.15em]
			sm:tracking-[0.18em]
			md:tracking-[0.17em]
			uppercase
			text-[#a09890]"
		>
			BUY | SELL | EARN
		</div>
	</a>

	<div class="sm:w-80 md:w-120 w-full sm:mx-auto">
		<SearchInput />
	</div>

	<NavigationIcons onclick={() => toggle()} />
</nav>

<div
	id="collapsible"
	class="fixed z-9999 inset-x-0 top-16 bottom-0
		flex-1 -translate-x-full transform
		transition-transform duration-500"
>
	<Aside />
</div>
