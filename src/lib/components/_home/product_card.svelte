<script lang="ts">
  const images = import.meta.glob(
    "$lib/assets/images/*.{avif,gif,jpg,jpeg,png,webp}",
    {
      eager: true,
      import: "default",
    },
  ) as Record<string, string>;
  import type { Product } from "../../../routes/data";
  import ImageComponent from "../image_component.svelte";
  let { name, image, amount, condition }: Product = $props();

  type Template = (name: string, condition: string, price: number) => string;

  const templates: Template[] = [
    (name, condition, price) =>
      `In ${condition} condition — ${name} going for just ₦${price.toLocaleString()}.`,
    (name, condition, price) =>
      `Only ₦${price.toLocaleString()} for this ${condition} ${name}. Don't sleep on it!`,
    (name, condition, price) =>
      `Great deal alert! A ${condition} ${name} priced at ₦${price.toLocaleString()}.`,
    (name, condition, price) =>
      `Up for grabs: a ${condition} ${name} — yours for ₦${price.toLocaleString()}.`,
    (name, condition, price) =>
      `Looking for a ${name}? Got one in ${condition} condition for ₦${price.toLocaleString()}.`,
    (name, condition, price) =>
      `Priced to sell at ₦${price.toLocaleString()} — ${condition} ${name}, available now.`,
    (name, condition, price) =>
      `Just listed: a ${condition} ${name}. Asking ₦${price.toLocaleString()}.`,
    (name, condition, price) =>
      `At ₦${price.toLocaleString()}, this ${condition} ${name} is a solid buy.`,
    (name, condition, price) =>
      `For sale — ${condition} ${name}. Walk away with it for ₦${price.toLocaleString()}.`,
    (name, condition, price) =>
      `Why pay more? This ${condition} ${name} is going for ₦${price.toLocaleString()}.`,
    (name, condition, price) =>
      `Affordable and ready — ${condition} ${name} available at ₦${price.toLocaleString()}.`,
    (name, condition, price) =>
      `First come, first served! ${condition} ${name} — ₦${price.toLocaleString()}.`,
    (name, condition, price) =>
      `Moving out sale: ${condition} ${name}, letting it go for ₦${price.toLocaleString()}.`,
    (name, condition, price) =>
      `A steal at ₦${price.toLocaleString()} — ${condition} ${name}, message to buy!`,
    (name, condition, price) =>
      `Condition: ${condition}. Item: ${name}. Price: ₦${price.toLocaleString()}. Interested?`,
    (name, condition, price) =>
      `Well worth it at ₦${price.toLocaleString()} — ${condition} ${name} up for grabs.`,
    (name, condition, price) =>
      `Clearance price: ₦${price.toLocaleString()} for a ${condition} ${name}.`,
    (name, condition, price) =>
      `Need a ${name}? This ${condition} one won't last long — ₦${price.toLocaleString()}.`,
    (name, condition, price) =>
      `Selling fast — ${condition} ${name} at ₦${price.toLocaleString()} or best offer.`,
    (name, condition, price) =>
      `Don't miss this: ${condition} ${name}, going for ₦${price.toLocaleString()}.`,
    (name, condition, price) =>
      `Budget-friendly at ₦${price.toLocaleString()} — ${condition} ${name} available now.`,
    (name, condition, price) =>
      `Hot deal: ${condition} ${name} for ₦${price.toLocaleString()}. Grab it today!`,
    (name, condition, price) =>
      `${condition} and ready to go — ${name} priced at ₦${price.toLocaleString()}.`,
    (name, condition, price) =>
      `Quick sale: ${condition} ${name}. Price is ₦${price.toLocaleString()}, no giveaway.`,
    (name, condition, price) =>
      `Fairly used and functional — ${name} in ${condition} condition at ₦${price.toLocaleString()}.`,
    (name, condition, price) =>
      `Come and get this ${condition} ${name} for ₦${price.toLocaleString()}. You won't regret it!`,
    (name, condition, price) =>
      `Tokunbo alert! ${condition} ${name} going for ₦${price.toLocaleString()}.`,
    (name, condition, price) =>
      `This ${condition} ${name} is listed at ₦${price.toLocaleString()} — serious buyers only.`,
    (name, condition, price) =>
      `Item: ${name} | Condition: ${condition} | Price: ₦${price.toLocaleString()} — DM to close.`,
    (name, condition, price) =>
      `Legit and clean — ${condition} ${name} for ₦${price.toLocaleString()}. Pay on delivery available.`,
  ];

  function generateDescription(): string {
    const template = templates[Math.floor(Math.random() * templates.length)];
    return template(name, condition, amount);
  }
</script>

<a
  data-sveltekit-preload-data={false}
  data-sveltekit-preload-code={false}
  href="/detail"
  class="relative overflow-hidden group cursor-pointer sm:rounded-lg"
>
  {@render productImg()}
  {@render bottomInfo()}
</a>

{#snippet productImg()}
  <div class="relative overflow-hidden sm:rounded-lg">
    <ImageComponent
      alt={name}
      duration={2000}
      class="aspect-square size-full group-hover:scale-110 transition-transform
      group-active:scale-105
      duration-350
      ease-in-out"
      src={images[`/src/lib/assets/images/${image}`]}
    />
    {@render hoverlay()}

    {#if condition == "used"}
      <span
        class={`
          text-white
          rounded-br-sm
          bg-black/70
          font-medium
          absolute
          top-0
          -left-1
          text-[10px]
          pl-1.5
          pr-0.5
          flex 
          items-center`}
      >
        {condition}
      </span>
    {/if}
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
  <div class="flex flex-col gap-0.75 px-px">
    <!-- Name -->
    <div class="font-semibold font-serif text-sm">
      {name}
    </div>

    <!-- Subtitle -->
    <div
      class="text-[12px] font-serif md:text-[10px] text-gray-600 line-clamp-2 leading-snug"
    >
      {generateDescription()}
    </div>

    <!-- Price -->
    <div class="text-sm text-[#1a1814] flex justify-between items-center">
      <span class="font-semibold font-serif"
        >{`\u20A6${amount.toLocaleString("en-US")}`}</span
      >
      <div class="flex items-center gap-1">
        <!-- VERIFIED BADGE -->
        <svg
          class="stroke-green-700 size-5.5 md:size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          ><g
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          >
            <path
              d="M3.85 8.62a4 4 0 0 1 4.78-4.77a4 4 0 0 1 6.74 0a4 4 0 0 1 4.78 4.78a4 4 0 0 1 0 6.74a4 4 0 0 1-4.77 4.78a4 4 0 0 1-6.75 0a4 4 0 0 1-4.78-4.77a4 4 0 0 1 0-6.76"
            />
            <path d="m9 12l2 2l4-4" />
          </g>
        </svg>
      </div>
    </div>
  </div>
{/snippet}
