<script lang="ts">
  import type { Colour } from "../types.js";

  let {
    colours,
    selected = $bindable(),
  }: {
    colours: Colour[];
    selected: Colour;
  } = $props();
</script>

<div class="flex flex-col items-start gap-1">
  <div
    class="text-[10px] uppercase text-[#a09890] ml-0.5 leading-relaxed"
  >
    Select color
  </div>
  <div class="flex gap-2 items-center flex-wrap">
    {#each colours as col}
      <button
        onclick={() => (selected = col)}
        aria-label={col.name}
        title={col.name}
        class="
          size-10 sm:size-8 rounded-full border-2 p-0 cursor-pointer transition-all duration-150 hover:scale-110
          {selected.name === col.name
          ? 'border-[#2f2b24]'
          : 'border-transparent'}
        "
        style="background-color:{col.hex};{col.hex === '#f0ede8'
          ? 'box-shadow:inset 0 0 0 1px #d0cbc3'
          : ''}"
      ></button>
    {/each}
  </div>
</div>
