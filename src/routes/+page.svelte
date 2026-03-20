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
  <div class="flex h-full">
    <aside
      class="h-[90svh] sm:h-[88svh] flex flex-col px-0.5 py-1.5 sticky sm:top-[12svh] top-[10svh] w-[25%]"
    >
      <div
        class="px-1 py-0.5 sticky rounded-t-lg top-0 bg-black text-white"
      >
        Categories
      </div>
      <div class="grid flex-1 border rounded-b-lg grid-cols-1 sm:grid-cols-4 scrollbar-hide overflow-auto">
        {#each products as product (product.image)}
          <ImageComponent
            src={images[`/src/lib/assets/images/${product.image}`]}
            alt={product.name}
            class="aspect-square"
          />
        {/each}
      </div>
    </aside>

    <div
      class="grid flex-1 grid-cols-2 px-0.5 sm:px-6 pt-1.5 sm:pt-2.5 gap-x-1 sm:gap-x-2 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
    >
      {#each products as product (product.image)}
        <ProductCard {...product} />
      {/each}
    </div>
  </div>
</div>
