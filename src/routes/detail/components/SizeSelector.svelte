<script lang="ts">
  let {
    sizes,
    outOfStock,
    selected = $bindable(""),
  }: {
    sizes: string[];
    outOfStock: string[];
    selected?: string;
  } = $props();
</script>

<div class="flex flex-col items-start gap-1">
  <div
    class="text-[10px] uppercase text-[#a09890] ml-0.5 leading-relaxed"
  >
    Select size
  </div>
  <div class="flex gap-2 flex-wrap">
    {#each sizes as size}
      {@const oos = outOfStock.includes(size)}
      {@const active = selected === size}
      <button
        onclick={() => {
          if (!oos) selected = size;
        }}
        disabled={oos}
        aria-label="{size}{oos ? ' — not in stock' : ''}"
        class="
          relative size-10 sm:size-8 rounded-full text-sm flex justify-center items-center border transition-all duration-150 overflow-hidden
          {active ? 'bg-[#1a1814] text-[#f7f5f2] border-[#1a1814]' : ''}
          {!active && !oos
          ? 'bg-[#faf9f7] text-[#4a4540] border-[#ddd8cf] hover:border-[#1a1814] cursor-pointer'
          : ''}
          {oos
          ? 'bg-[#faf9f7] text-[#c8c2b8] border-[#ddd8cf] cursor-not-allowed'
          : ''}
        "
      >
        {size}
        {#if oos}
          <span
            class="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <span class="absolute w-[140%] h-px bg-[#ddd8cf] -rotate-12"></span>
          </span>
        {/if}
      </button>
    {/each}
  </div>
</div>
