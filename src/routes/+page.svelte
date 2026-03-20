<script lang="ts">
    import ImageComponent from "$lib/components/image_component.svelte";
  import Scroller from "$lib/components/scroller.svelte";
  import NavigationMenu from "$lib/components/topnav/navigationMenu.svelte";
  import Aside from "../lib/components/_home/aside.svelte";
  import ProductCard from "../lib/components/_home/product_card.svelte";
  import products from "./data";

  const images = import.meta.glob(
    "$lib/assets/images/*.{avif,gif,jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    },
  ) as Record<string, string>;
</script>

<div class="relative h-full w-full">
  <NavigationMenu />
  <div class="flex h-full w-full">
    <aside
      class="h-svh flex flex-col sticky sm:top-[12svh] top-[10svh] w-[25%]"
    >
      <div
        class="px-1 sticky top-0 bg-black text-white"
      >
        Categories
      </div>
      <div class="grid flex-1 gap-px border border-gray-300 rounded-b-lg grid-cols-1 sm:grid-cols-4 scrollbar-hide overflow-auto">
        {#each products as product (product.image)}
          <div class="aspect-square">
            <ImageComponent
            src={images[`/src/lib/assets/images/${product.image}`]}
            alt={product.name}
          />
          </div>
        {/each}
      </div>
    </aside>

    <div
      class="grid flex-1 grid-cols-2 px-0.5 sm:pt-1.5 sm:px-6 sm:gap-x-2 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
    >
      {#each products as product (product.image)}
        <ProductCard {...product} />
      {/each}
    </div>
  </div>
</div>
