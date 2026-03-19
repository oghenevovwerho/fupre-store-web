<script lang="ts">
    import qrcodeImg from "$lib/assets/images/android_qr_code.png";

    interface Props {
        open?: boolean;
        playStoreUrl?: string;
        onclose?: () => void;
    }

    let {
        open = $bindable(true),
        playStoreUrl = "https://apps.apple.com/search?term=piviit",
        onclose,
    }: Props = $props();

    const ratings = [
        { stars: 5, pct: 88 },
        { stars: 4, pct: 8 },
        { stars: 3, pct: 3 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 1 },
    ];

    function close() {
        open = false;
        onclose?.();
    }
</script>

{#if open}
    <div
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Download Piviit"
    >
        <!-- Backdrop click closes -->
        <button
            class="absolute inset-0 w-full h-full cursor-default"
            onclick={close}
            aria-label="Close modal"
            tabindex="-1"
        ></button>

        <!-- Modal card -->
        <div
            class="relative z-10 w-75 rounded-2xl bg-white overflow-hidden border border-black/8 shadow-xl"
        >
            <!-- Header -->
            <div
                class="bg-[#f0f7f2] p-2 flex gap-2.5 items-start border-b border-black/6"
            >
                <div
                    class="h-20 aspect-square rounded-2xl bg-[#0a0a0a] flex items-center justify-center shrink-0 border border-black/8"
                >
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                        <circle
                            cx="19"
                            cy="19"
                            r="12"
                            stroke="white"
                            stroke-width="2"
                        />
                        <path
                            d="M14 19l4 4 7-7"
                            stroke="white"
                            stroke-width="2.2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
                <div class="pt-1 flex-1">
                    <p class="text-xl font-medium text-gray-950">Piviit</p>
                    <p class="text-[13px] text-gray-500 mb-1.5">
                        Online market place
                    </p>
                    <div class="flex justify-between flex-wrap">
                        {#each ["Free", "4+", "In-app purchases"] as tag}
                            <span
                                class="text-[11px] font-semibold text-[#1e5c31] bg-[#ddede1] rounded-md px-1.5 py-0.5"
                            >
                                {tag}
                            </span>
                        {/each}
                    </div>
                </div>
            </div>

            <!-- Ratings -->
            <div class="p-2 flex gap-5 border-b border-black/6">
                <div class="text-center">
                    <p class="text-[18px] font-medium text-gray-950">4.8</p>
                    <div class="flex gap-px justify-center my-0.5">
                        {#each Array(5) as _}
                            <span class="text-[13px] text-[#f0a500]">★</span>
                        {/each}
                    </div>
                    <p class="text-[11px] text-gray-400">2.4k ratings</p>
                </div>
                <div class="flex-1 flex flex-col gap-1 justify-center">
                    {#each ratings as { stars, pct }}
                        <div
                            class="flex items-center gap-1.5 text-[11px] text-gray-400"
                        >
                            {stars}
                            <div
                                class="h-[4px] flex-1 bg-gray-100 rounded-full overflow-hidden"
                            >
                                <div
                                    class="h-full bg-[#f0a500] rounded-full"
                                    style:width="{pct}%"
                                ></div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- QR code -->
            <div
                class="px-7 py-2 flex flex-col items-center gap-1 border-b border-black/6"
            >
                <img src={qrcodeImg} alt="qr code" class="aspect-square h-33" />
                <div
                    class="flex items-center gap-1.5 text-[11px] text-gray-400"
                >
                    Scan code to open play store
                </div>
            </div>

            <!-- Close button -->
            <button
                onclick={close}
                aria-label="Close"
                class="absolute cursor-pointer top-3.5 right-3.5 p-1 rounded text-gray-400 hover:bg-black/5 transition-colors"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                        d="M3 3l10 10M13 3L3 13"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    />
                </svg>
            </button>
        </div>
    </div>
{/if}
