<script lang="ts">
  const images = import.meta.glob(
    "$lib/assets/images/*.{avif,gif,jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    },
  ) as Record<string, string>;
  import type { Product } from "../data";
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
    <img
      src={images[`/src/lib/assets/images/${image}`]}
      alt={name}
      class="
      aspect-square
      object-cover
      overflow-hidden
      transition-transform
      group-active:scale-105
      duration-350
      ease-in-out
      group-hover:scale-110"
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
    <div class="text-sm font-semibold font-serif text-[#1a1814]">
      {name}
    </div>

    <!-- Subtitle -->
    <div
      class="text-[12px] md:text-[10px] text-[#a09890] line-clamp-2 leading-snug"
    >
      Piste minima dolore excepturi deserunt autem voluptate excepturi deserunt
    </div>

    <!-- Price -->
    <div class="text-sm text-[#1a1814] font-serif flex justify-between">
      <span>{`\u20A6${amount.toLocaleString("en-US")}`}</span>
      <span
        class={`
      ${condition === "new" ? "bg-green-500" : "bg-gray-500"}
      text-white 
      rounded-[5px] 
      text-[10px] 
      h-3.75 px-1 
      flex 
      items-center`}
      >
        {condition}
      </span>
    </div>
  </div>
{/snippet}
