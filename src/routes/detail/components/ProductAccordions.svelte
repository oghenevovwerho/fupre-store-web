<script lang="ts">
  import type { Review } from "../types.js";
  import StarRating from "./StarRating.svelte";
  import { FIT_DATA } from "../utils.js";

  let {
    description,
    details,
    shipping,
    rating,
    reviewCount,
    reviews,
  }: {
    description: string;
    details: string[];
    shipping: string[];
    rating: number;
    reviewCount: number;
    reviews: Review[];
  } = $props();

  type AccordionKey = "details" | "shipping" | "reviews" | null;
  let openAccordion = $state<AccordionKey>("details");

  function toggle(key: AccordionKey) {
    openAccordion = openAccordion === key ? null : key;
  }
</script>

{#snippet head(key: AccordionKey, label: string)}
  <button
    onclick={() => toggle(key)}
    class="w-fit flex items-center justify-between py-4 bg-transparent border-0 text-left"
  >
    <span class="text-lg font-medium text-[#1a1814] tracking-[.01em]">
      {label}
    </span>
  </button>
{/snippet}

{#snippet bulletList(items: string[])}
  <ul class="flex flex-col gap-1.5 list-none p-0">
    {#each items as item}
      <li
        class="
        text-[13px] text-[#4a4540] pl-4 relative leading-relaxed
        before:content-[''] before:absolute before:left-0 before:top-2.25
        before:w-1 before:h-1 before:rounded-full before:bg-[#c9a96e]
      "
      >
        {item}
      </li>
    {/each}
  </ul>
{/snippet}

<div
  class="grid grid-cols-1 border-t border-[#e8e4de] gap-y-10 gap-x-5 md:grid-cols-2 divide-[#e8e4de] mt-10 pt-5 w-full"
>
  <!-- Product details -->
  <div>
    {@render head("details", "Product details")}
    <div class="pb-5">
      <div class="text-[13.5px] text-[#4a4540] leading-[1.75] mb-3.5">
        {description}
      </div> 
      {@render bulletList(details)}
    </div>

    <!-- Delivery & returns -->
    <div>
      {@render head("shipping", "Delivery & returns")}
      <div class="pb-5">
        {@render bulletList(shipping)}
      </div>
    </div>
  </div>

  <!-- Reviews -->
  <div>
    {@render head("reviews", `Reviews (${reviewCount})`)}
    <div class="pb-5">
      <!-- Summary -->
      <div
        class="grid grid-cols-[auto_1fr] gap-6 bg-[#f0ede8] rounded-xl p-2.5 mb-5 items-center"
      >
        <div class="text-center">
          <div
            class="text-5xl font-light text-[#1a1814] leading-none mb-1.5"
          >
            {rating}
          </div>
          <StarRating {rating} />
          <div class="text-[11px] text-[#a09890] mt-1">
            {reviewCount} reviews
          </div>
        </div>

        <div>
          {#each FIT_DATA as f}
            <div class="flex items-center gap-2 mb-1.25">
              <span class="text-[11px] text-[#7a7068] w-10 shrink-0"
                >{f.starCount} stars</span
              >
              <div class="flex-1 h-1.25 bg-[#ddd8cf] rounded-full overflow-hidden">
                <div
                  class="h-full bg-[#c9a96e] rounded-full"
                  style="width:{f.pct}%"
                ></div>
              </div>
              <span class="text-[11px] text-[#7a7068] w-7 text-right shrink-0"
                >{`${f.pct < 10 ? "0" : ""}`}{f.pct}%</span
              >
            </div>
          {/each}
        </div>
      </div>

      <!-- Individual reviews -->
      {#each reviews as review}
        <div class="border-t border-[#e8e4de] py-4">
          <div class="flex justify-between items-start mb-2">
            <div>
              <div class="text-[13.5px] font-medium text-[#1a1814]">
                {review.author}
              </div>
              <div class="text-[11px] text-[#a09890] mt-0.5">
                Size {review.size} · {review.fit} · {review.date}
              </div>
            </div>
            <StarRating rating={review.rating} size="sm" />
          </div>
          <div class="text-[13px] text-[#4a4540] leading-[1.65]">{review.body}</div> 
        </div>
      {/each}
    </div>
  </div>
</div>
