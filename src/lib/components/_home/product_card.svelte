<script lang="ts">
  const images = import.meta.glob(
    "$lib/assets/images/*.{avif,gif,jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    },
  ) as Record<string, string>;
  import type { Product } from "../../../routes/data";
  import ImageComponent from "../image_component.svelte";
  let { name, image, amount, condition }: Product = $props();
</script>

<a
  data-sveltekit-preload-data={false}
  data-sveltekit-preload-code={false}
  href="/detail"
  class="relative overflow-hidden group cursor-pointer rounded-lg"
>
  {@render productImg()}
  {@render bottomInfo()}
</a>

{#snippet productImg()}
  <div class="relative overflow-hidden rounded-lg">
    <ImageComponent
      alt={name}
      duration={2000}
      class="aspect-square size-full group-hover:scale-110 transition-transform
      group-active:scale-105
      duration-350
      ease-in-out"
      src={images[`/src/lib/assets/images/${image}`]}
    />
    {@render hoverlay()}
  </div>
{/snippet}

{#snippet hoverlay()}
  <div
    class="
      absolute inset-0
      bg-black
      flex
      items-end
      opacity-10
      transition-opacity
      duration-300
      group-hover:opacity-55"
  ></div>
{/snippet}

{#snippet bottomInfo()}
  <div class="flex flex-col gap-0.75 px-0.5 mt-1">
    <!-- Name -->
    <div class="text-sm font-semibold text-[#1a1814]">
      {name}
    </div>

    <!-- Subtitle -->
    <div
      class="text-[12px] md:text-[10px] text-[#a09890] line-clamp-2 leading-snug"
    >
      Piste minima dolore excepturi deserunt autem voluptate excepturi deserunt
    </div>

    <!-- Price -->
    <div class="text-sm text-[#1a1814] flex justify-between items-center">
      <span class="font-semibold font-serif"
        >{`\u20A6${amount.toLocaleString("en-US")}`}</span
      >
      <div class="flex items-center gap-1">
        {#if condition == "used"}
          <span
            class={`
          bg-gray-100
          text-black/75 
          font-medium
          rounded-sm 
          text-[10px] 
          border border-gray-400
          h-3.75 px-0.75 
          flex 
          items-center`}
          >
            {condition}
          </span>
        {/if}
        <!-- VERIFIED BADGE -->
        <svg
          class="stroke-green-700 size-5.5 md:size-4.5"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          ><g
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          >
            <path
              d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"
            />
            <path d="m9 12l2 2l4-4" />
          </g>
        </svg>
      </div>
    </div>
  </div>
{/snippet}
