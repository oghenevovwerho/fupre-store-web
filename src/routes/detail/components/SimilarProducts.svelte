<script lang="ts">
  import ProductCard from "../../components/product_card.svelte";
  import products from "../../data";
</script>

<section class="sm:border-t border-[#e8e4de] pt-6">
  <!-- Section header -->
  <div class="flex items-end justify-between mb-8">
    <div>
      <div class="text-[10px] text-[#a09890] tracking-[.14em] uppercase mb-1">
        You may also like
      </div>
      <h2
        class="text-[28px] font-light leading-none tracking-[.05em] text-[#1a1814]"
      >
        Similar items
      </h2>
    </div>
    <button
      class="text-[12px] text-[#7a7068] underline underline-offset-2 hover:text-[#1a1814] transition-colors bg-transparent border-0 p-0 cursor-pointer tracking-wide"
    >
      View all →
    </button>
  </div>

  <div
    class="grid flex-1 grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
  >
    {#each products.slice(0, 10) as product (product.image)}
      <ProductCard {...product} />
    {/each}
  </div>
</section>
