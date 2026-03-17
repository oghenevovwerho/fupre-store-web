<script lang="ts">
  import type { Colour, ProductImage } from "../types.js";

  let {
    images,
    activeImage = $bindable(0),
    selectedColour,
    tag,
  }: {
    images: ProductImage[];
    activeImage?: number;
    selectedColour: Colour;
    tag: "new" | "sale" | null;
  } = $props();

  function prev() {
    activeImage = (activeImage - 1 + images.length) % images.length;
  }

  function next() {
    activeImage = (activeImage + 1) % images.length;
  }
</script>

<div
  class={`relative flex-1 rounded-xl border border-gray-300 flex items-center justify-center overflow-hidden aspect-square transition-colors duration-300`}
  style="background-color:{selectedColour.hex}22"
>
  <!-- Tag badge -->
  {#if tag === "new"}
    <span
      class="absolute top-2 left-2 text-[12px] px-1.5 py-1 rounded-lg bg-[#1a1814] text-[#f7f5f2] tracking-widest"
    >
      New arrival
    </span>
  {:else if tag === "sale"}
    <span
      class="absolute top-4 left-4 text-[12px] px-1.5 py-1 rounded-lg bg-red-600 text-white tracking-widest"
    >
      On sale
    </span>
  {/if}

  <!-- Placeholder garment illustration -->
  <div class="flex flex-col items-center gap-4 pointer-events-none select-none">
    <svg
      width="180"
      height="220"
      viewBox="0 0 180 220"
      fill="none"
      class="opacity-[.14]"
    >
      <path
        d="M60 10C60 10 40 20 20 30L10 70l30 5v135h100V75l30-5-10-40C130 20 120 10 120 10c-5 15-15 25-30 25S65 25 60 10z"
        stroke="#1a1814"
        stroke-width="2"
      />
      <line
        x1="40"
        y1="95"
        x2="140"
        y2="95"
        stroke="#1a1814"
        stroke-width="1"
      />
      <circle cx="80" cy="55" r="3" fill="#1a1814" />
      <circle cx="80" cy="70" r="3" fill="#1a1814" />
      <circle cx="80" cy="85" r="3" fill="#1a1814" />
      <rect
        x="55"
        y="40"
        width="25"
        height="18"
        rx="1"
        stroke="#1a1814"
        stroke-width="1"
      />
      <rect
        x="100"
        y="40"
        width="25"
        height="18"
        rx="1"
        stroke="#1a1814"
        stroke-width="1"
      />
    </svg>
    <span class="text-[11px] text-[#a09890] tracking-[.08em] uppercase">
      {images[activeImage].label} view · {selectedColour.name}
    </span>
  </div>

  <!-- Prev / Next arrows -->
  <button
    onclick={prev}
    aria-label="Previous image"
    class="absolute left-3 top-1/2 -translate-y-1/2 size-12 md:size-10 rounded-full border border-[#e8e4de] bg-white/70 flex items-center justify-center text-[#4a4540] hover:bg-white transition-colors cursor-pointer"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  </button>
  <button
    onclick={next}
    aria-label="Next image"
    class="absolute right-3 top-1/2 -translate-y-1/2 size-12 md:size-10 rounded-full border border-[#e8e4de] bg-white/70 flex items-center justify-center text-[#4a4540] hover:bg-white transition-colors cursor-pointer"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </button>

  <!-- Dot indicators -->
  <div class="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex gap-1.5">
    {#each images as _, i}
      <button
        onclick={() => (activeImage = i)}
        aria-label="Image {i + 1}"
        class="w-1.5 h-1.5 rounded-full border-0 p-0 transition-colors duration-150 cursor-pointer {activeImage ===
        i
          ? 'bg-[#1a1814]'
          : 'bg-[#1a181440]'}"
      ></button>
    {/each}
  </div>
</div>
