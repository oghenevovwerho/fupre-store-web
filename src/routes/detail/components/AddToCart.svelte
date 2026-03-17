<script lang="ts">
  let {
    selectedSize,
    quantity = $bindable(1),
    onAdd,
  }: {
    selectedSize: string;
    quantity?: number;
    onAdd: () => void;
  } = $props();

  let addedToCart = $state(false);

  function changeQty(delta: number) {
    quantity = Math.max(1, Math.min(10, quantity + delta));
  }

  function handleAdd() {
    if (!selectedSize) return;
    addedToCart = true;
    onAdd();
    setTimeout(() => (addedToCart = false), 2200);
  }
</script>

<div class="flex gap-2.5">
  <!-- Quantity stepper -->
  <div class="flex items-center border border-[#ddd8cf] rounded-xl overflow-hidden bg-[#faf9f7]">
    <button
      onclick={() => changeQty(-1)}
      disabled={quantity <= 1}
      class="size-10 flex items-center justify-center text-lg text-[#4a4540] hover:bg-[#ede9e3] transition-colors disabled:text-[#ddd8cf] disabled:cursor-default bg-transparent border-0 cursor-pointer"
    >−</button>
    <span class="size-10 text-center text-sm text-[#1a1814] border-x border-[#e8e4de] leading-10">
      {quantity}
    </span>
    <button
      onclick={() => changeQty(1)}
      disabled={quantity >= 10}
      class="size-10 pb-0.5 flex items-center justify-center text-lg text-[#4a4540] hover:bg-[#ede9e3] transition-colors disabled:text-[#ddd8cf] disabled:cursor-default bg-transparent border-0 cursor-pointer"
    >+</button>
  </div>

  <!-- Add to cart CTA -->
  <button
    onclick={handleAdd}
    disabled={!selectedSize}
    class="
      flex-1 h-10 rounded-xl flex items-center justify-center gap-2 text-sm tracking-[.05em]
      font-medium transition-all duration-200 border-0 cursor-pointer
      {addedToCart                    ? 'bg-[#3b6d11] text-white'                             : ''}
      {!addedToCart &&  selectedSize  ? 'bg-[#1a1814] text-[#f7f5f2] hover:bg-[#2d2820]'     : ''}
      {!selectedSize                  ? 'bg-[#c8c2b8] text-[#f7f5f2] cursor-not-allowed'     : ''}
    "
  >
    {#if addedToCart}
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Added to cart
    {:else}
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
      Add to cart
    {/if}
  </button>

</div>
