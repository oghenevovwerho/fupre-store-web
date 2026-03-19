<script lang="ts">
  import Scroller from "$lib/components/scroller.svelte";
  import NavigationMenu from "$lib/components/topnav/navigationMenu.svelte";
  import Aside from "../lib/components/_home/aside.svelte";
  import ProductCard from "../lib/components/_home/product_card.svelte";
  import products from "./data";
</script>

<div class="relative h-full w-full bg-[#faf9f7]">
  <NavigationMenu />
  <div class="flex h-full">
    <aside
      class="max-sm:hidden h-full bg-amber-700 sticky top-[12svh] w-[20%]"
    >
      <Aside />
    </aside>

    <div class="flex-1 flex flex-col gap-2 w-[80%]">
      <Scroller />
      <div
        class="grid grid-cols-2 max-sm:px-1 gap-x-2 gap-y-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      >
        {#each products as product (product.image)}
          <ProductCard {...product} />
        {/each}
      </div>
    </div>
  </div>
</div>
