<script lang="ts">
  import type {
    Product,
    Colour,
    SimilarProduct,
    CartPayload,
    WishlistPayload,
  } from "./types.js";
  import { DEFAULT_PRODUCT, TRUST_ITEMS } from "./utils.js";
  import { DEFAULT_SIMILAR_PRODUCTS } from "./defaultSimilarProducts.js";
  import StarRating from "./components/StarRating.svelte";
  import ProductGallery from "./components/ProductGallery.svelte";
  import ColourSelector from "./components/ColourSelector.svelte";
  import SizeSelector from "./components/SizeSelector.svelte";
  import AddToCart from "./components/AddToCart.svelte";
  import ProductAccordions from "./components/ProductAccordions.svelte";
  import SimilarProducts from "./components/SimilarProducts.svelte";

  // ── Props ────────────────────────────────────────────────────────────────────
  let {
    product = DEFAULT_PRODUCT,
    similarProducts = DEFAULT_SIMILAR_PRODUCTS,
    onAddToCart = (_: CartPayload) => {},
    onWishlist = (_: WishlistPayload) => {},
    onQuickAdd = (_: { product: SimilarProduct; colour: Colour }) => {},
    onNavigate = (_: SimilarProduct) => {},
  }: {
    product?: Product;
    similarProducts?: SimilarProduct[];
    onAddToCart?: (payload: CartPayload) => void;
    onWishlist?: (payload: WishlistPayload) => void;
    onQuickAdd?: (payload: { product: SimilarProduct; colour: Colour }) => void;
    onNavigate?: (product: SimilarProduct) => void;
  } = $props();

  // ── State ────────────────────────────────────────────────────────────────────
  let selectedColour = $derived<Colour>(product.colours[0]);
  let selectedSize = $state("");
  let activeImage = $state(0);
  let quantity = $state(1);
  let savedToWishlist = $state(false);

  // ── Derived ──────────────────────────────────────────────────────────────────
  const saving = $derived(
    product.comparePrice ? product.comparePrice - product.price : 0,
  );

  // ── Handlers ─────────────────────────────────────────────────────────────────
  function handleColourChange(col: Colour) {
    selectedColour = col;
    activeImage = 0;
  }

  function handleAddToCart() {
    onAddToCart({
      product,
      colour: selectedColour,
      size: selectedSize,
      quantity,
    });
  }

  function toggleWishlist() {
    savedToWishlist = !savedToWishlist;
    onWishlist({ product, saved: savedToWishlist });
  }
</script>

<div
  class="flex flex-col justify-between bg-[#f7f5f2] px-2 md:px-4 lg:px-6 py-6 pb-10 text-[#1a1814]"
>
  <!-- Breadcrumb -->
  <nav
    class="flex items-center gap-1.5 text-xs text-[#a09890] mb-7 tracking-wide"
  >
    {#each ["Home", "Women", "Tops & blouses"] as crumb}
      <span>{crumb}</span>
      <span class="text-[#c8c2b8]">›</span>
    {/each}
    <span class="text-[#4a4540]">{product.name}</span>
  </nav>

  <!-- Two-column grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 items-start">
    <!-- LEFT — Gallery -->
    <ProductGallery
      images={product.images}
      bind:activeImage
      {selectedColour}
      tag={product.tag}
    />

    <!-- RIGHT — Product info -->
    <div class="flex flex-col max-md:gap-5 sm:justify-between h-full">
      <!-- Category -->
      <div class="text-[11px] text-[#a09890] tracking-[.08em] uppercase">
        {product.category}
      </div>

      <!-- Name + subtitle -->
      <div>
        <h1
          class="text-[38px] font-light leading-[1.1] tracking-[.04em] text-[#1a1814]"
        >
          {product.name}
        </h1>
        <div class="text-sm text-[#7a7068] leading-relaxed">
          {product.subtitle}
        </div> 
        <!-- Rating row -->
        <div class="flex items-center gap-2.5">
          <StarRating rating={product.rating} />
          <span class="text-[13px] text-[#7a7068]">
            {product.rating} · {product.reviewCount} reviews
          </span>
        </div>
      </div>

      <!-- Price -->
      <div class="flex items-baseline gap-2.5">
        <span class="text-[30px] font-medium text-[#1a1814]">
          {product.currency}{product.price.toLocaleString()}
        </span>
        {#if product.comparePrice}
          <div class="text-[13px]">
            <span class="text-[#b8b0a8] line-through">
              {product.currency}{product.comparePrice.toLocaleString()}
            </span>
            <span class="text-green-600">
              Save {product.currency}{saving.toLocaleString()}
            </span>
          </div>
        {/if}
      </div>

      <hr class="border-[#e8e4de]" />

      <div
        class="flex justify-between gap-5 flex-col md:flex-row md:items-center"
      >
        <!-- Colour selector -->
        <ColourSelector
          colours={product.colours}
          bind:selected={selectedColour}
        />

        <!-- Size selector -->
        <SizeSelector
          sizes={product.sizes}
          outOfStock={product.outOfStock}
          bind:selected={selectedSize}
        />
      </div>

      <!-- Qty + Add to bag -->
      <AddToCart {selectedSize} bind:quantity onAdd={handleAddToCart} />

      <!-- Trust signals -->
      <div class="flex flex-wrap justify-between items-center">
        {#each TRUST_ITEMS as t}
          <div
            class="flex items-center gap-0.5 sm:gap-1.5 text-xs text-gray-600"
          >
            <span class="size-1 rounded-full bg-gray-600"></span>
            {t.label}
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!-- Accordions -->
  <ProductAccordions
    description={product.description}
    details={product.details}
    shipping={product.shipping}
    rating={product.rating}
    reviewCount={product.reviewCount}
    reviews={product.reviews}
  />

  <!-- Similar products -->
  <SimilarProducts />
</div>
