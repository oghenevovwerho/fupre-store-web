<script lang="ts">
  import NavigationMenu from "$lib/components/topnav/navigationMenu.svelte";
  import Aside from "./components/aside.svelte";
  import ProductCard from "./components/product_card.svelte";
  import products from "./data";
</script>

<div class="relative h-full w-full bg-[#faf9f7]">
  <!-- <TopNavigation /> -->
  <NavigationMenu />
  <div class="flex h-full">
    <aside
      class="max-sm:hidden h-full bg-amber-700 sticky top-[12svh] w-40 md:w-52"
    >
      <Aside />
    </aside>
    <div
      class="grid flex-1 grid-cols-2 px-2 pt-3 gap-x-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
    >
      {#each products as product (product.image)}
        <ProductCard {...product} />
      {/each}
    </div>
  </div>
</div>
