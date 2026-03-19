<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  type Direction = 'left' | 'right';

  interface Card {
    name: string;
    description: string;
    count: number;
    dark: boolean;
  }

  let {
    speed = 0.7,
    direction = 'left' as Direction,
    cards = [
      { name: 'Headphones',   description: 'Wireless & studio',    count: 48,  dark: false },
      { name: 'Laptops',      description: 'Ultra-thin to pro',     count: 35,  dark: true  },
      { name: 'Wearables',    description: 'Watches & rings',       count: 62,  dark: false },
      { name: 'Monitors',     description: '4K, OLED & curved',     count: 29,  dark: true  },
      { name: 'Smartphones',  description: 'Flagship & mid-range',  count: 54,  dark: false },
      { name: 'Speakers',     description: 'Portable & home audio', count: 41,  dark: true  },
      { name: 'Gaming',       description: 'Consoles, gear & VR',   count: 77,  dark: false },
      { name: 'Tablets',      description: 'Work & creative',       count: 23,  dark: true  },
      { name: 'Smart Home',   description: 'Lights, cams & hubs',   count: 58,  dark: false },
      { name: 'Accessories',  description: 'Cables, hubs & more',   count: 120, dark: true  },
      { name: 'Cameras',      description: 'DSLRs & action cams',   count: 31,  dark: false },
      { name: 'Networking',   description: 'Routers & mesh Wi-Fi',  count: 19,  dark: true  },
    ] as Card[]
  }: { speed?: number; direction?: Direction; cards?: Card[] } = $props();

  const CARD_W: number = 280;
  const GAP: number = 0;

  let cardEl: HTMLLIElement | null = $state(null);
  let resolvedCardW: number = $state(CARD_W);
  let ro: ResizeObserver | null = null;

  function updateCardW(): void {
    if (cardEl) resolvedCardW = cardEl.getBoundingClientRect().width;
  }

  function firstCard(node: HTMLLIElement): { destroy(): void } {
    if (cardEl) return { destroy() {} };
    cardEl = node;
    updateCardW();
    ro = new ResizeObserver(updateCardW);
    ro.observe(node);
    return { destroy() { ro?.disconnect(); cardEl = null; } };
  }

  let trackEl: HTMLUListElement | null = $state(null);
  let pos: number = $state(0);
  let hovered: boolean = $state(false);
  let dragging: boolean = $state(false);
  let dragStartX: number = 0;
  let dragStartPos: number = 0;
  let lastDragX: number = 0;
  let velocity: number = 0;
  let raf: number = 0;

  const totalW: number = $derived(cards.length * (resolvedCardW + GAP));
  const effectiveDirection: number = $derived(direction === 'right' ? -1 : 1);

  function animate(): void {
    if (!dragging) {
      if (!hovered) {
        velocity *= 0.92;
        pos += speed * effectiveDirection + velocity;
      }
      if (pos >= totalW) pos -= totalW;
      if (pos < 0) pos += totalW;
      if (trackEl) trackEl.style.transform = `translateX(${-pos}px)`;
    }
    raf = requestAnimationFrame(animate);
  }

  function onMouseEnter(): void { hovered = true; }
  function onMouseLeave(): void { if (!dragging) hovered = false; }

  function onMouseDown(e: MouseEvent): void {
    dragging = true;
    dragStartX = e.clientX;
    dragStartPos = pos;
    lastDragX = e.clientX;
    velocity = 0;
  }

  function onMouseMove(e: MouseEvent): void {
    if (!dragging) return;
    const dx = (dragStartX - e.clientX) * effectiveDirection;
    velocity = (lastDragX - e.clientX) * 0.3;
    lastDragX = e.clientX;
    pos = dragStartPos + dx;
    if (pos >= totalW) pos -= totalW;
    if (pos < 0) pos += totalW;
    if (trackEl) trackEl.style.transform = `translateX(${-pos}px)`;
  }

  function onMouseUp(): void {
    dragging = false;
    hovered = false;
  }

  function onTouchStart(e: TouchEvent): void {
    dragStartX = e.touches[0].clientX;
    dragStartPos = pos;
    lastDragX = e.touches[0].clientX;
    velocity = 0;
    hovered = true;
  }

  function onTouchMove(e: TouchEvent): void {
    const dx = (dragStartX - e.touches[0].clientX) * effectiveDirection;
    velocity = (lastDragX - e.touches[0].clientX) * 0.2;
    lastDragX = e.touches[0].clientX;
    pos = dragStartPos + dx;
    if (pos >= totalW) pos -= totalW;
    if (pos < 0) pos += totalW;
    if (trackEl) trackEl.style.transform = `translateX(${-pos}px)`;
  }

  function onTouchEnd(): void { hovered = false; }

  onMount(() => {
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  });

  onDestroy(() => { if (typeof cancelAnimationFrame !== 'undefined') cancelAnimationFrame(raf); });
</script>

<svelte:window onmousemove={onMouseMove} onmouseup={onMouseUp} />

<div
  class="relative w-full overflow-hidden {dragging ? 'cursor-grabbing' : 'cursor-grab'}"
  role="region"
  aria-label="Infinite product scroller"
  onmouseenter={onMouseEnter}
  onmouseleave={onMouseLeave}
  onmousedown={onMouseDown}
  ontouchstart={onTouchStart}
  ontouchmove={onTouchMove}
  ontouchend={onTouchEnd}
>

  <div class="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0E0E0F] to-transparent"></div>
  <div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0E0E0F] to-transparent"></div>

  <ul
    bind:this={trackEl}
    class="flex w-max list-none px-4 will-change-transform"
    style="gap:{GAP}px"
    aria-label="Store highlights"
  >
    {#each [0, 1] as _set}
      {#each cards as card}
        <li
          use:firstCard
          class="
            flex shrink-0 flex-col justify-center overflow-hidden
            px-2 py-1
            transition-colors duration-300 hover:bg-gray-800
            {card.dark ? 'bg-[#1A1A1C]' : 'bg-[#222226]'}
          "
        >
          <p class="text-[8px] font-medium uppercase text-[#B8962E]">{card.description}</p>
          <p class="font-serif mt-1 leading-snug text-[#F0EDE6]">{card.name}</p>
        </li>
      {/each}
    {/each}
  </ul>

</div>