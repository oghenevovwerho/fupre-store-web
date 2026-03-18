<script lang="ts">
	import { navigating } from '$app/state';
	let visible = $state(false);
	let progress = $state(0);
	let interval: any;

	function clearTimerInterval() {
		if (interval) {
			clearInterval(interval);
			interval = null;
		}
	}

	function start() {
		clearTimerInterval();
		progress = 0;
		visible = true;

		interval = setInterval(() => {
			progress = Math.min(progress + Math.random() * 10, 90);
		}, 200);
	}

	function finish() {
		clearTimerInterval();
		progress = 100;

		setTimeout(() => {
			visible = false;
			progress = 0;
		}, 250); // allow transition to complete
	}

	$effect(() => {
		if (navigating.to) {
			start();
		}

		return () => navigating.complete?.finally(finish);
	});
</script>

{#if visible}
	<div class="fixed top-0.5 left-0 z-9999 h-[1.25px] w-full bg-transparent">
		<div
			class="h-full bg-linear-to-r from-red-500 to-[#1651af] shadow-[0_0_10px_#1651af] transition-all duration-200 ease-out"
			style="width: {progress}%"
		></div>
	</div>
{/if}
