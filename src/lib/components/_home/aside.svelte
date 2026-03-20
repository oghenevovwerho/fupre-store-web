<script lang="ts">
  let activeLink = "All products";
  let activeSubLink = "";
  let openSubmenu = "";

  const categories = [
    {
      name: "Women",
      count: 94,
      sub: [
        { name: "Tops & blouses", count: 28 },
        { name: "Trousers & skirts", count: 22 },
        { name: "Dresses", count: 18 },
        { name: "Outerwear", count: 14 },
        { name: "Knitwear", count: 121 },
        { name: "Knitwear1", count: 122 },
        { name: "Knitwear2", count: 123 },
        { name: "Knitwear3", count: 124 },
        { name: "Knitwear4", count: 125 },
      ],
    },
    {
      name: "Men",
      count: 76,
      sub: [
        { name: "Shirts", count: 24 },
        { name: "Trousers", count: 18 },
        { name: "Jackets", count: 16 },
        { name: "Knitwear", count: 10 },
        { name: "Accessories", count: 8 },
      ],
    },
    {
      name: "Accessories",
      count: 52,
      sub: [
        { name: "Bags & pouches", count: 19 },
        { name: "Scarves & wraps", count: 14 },
        { name: "Jewellery", count: 11 },
        { name: "Belts", count: 8 },
      ],
    },
  ];

  const collections = [
    { name: "December sales" },
    { name: "Spring 2025", badge: "new" },
    { name: "Linen edit" },
    { name: "Easter specials", badge: "sale", badgeText: "up to 40%" },
  ];

  const swatches = [
    { hex: "#1a1814", light: false },
    { hex: "#f7f5f2", light: true },
    { hex: "#c0a882", light: false },
    { hex: "#7a8c7e", light: false },
    { hex: "#8c6a5a", light: false },
    { hex: "#4a5568", light: false },
  ];

  const sizes = ["XS", "S", "M", "L", "XL"];

  let selectedSwatches = new Set(["#1a1814"]);
  let selectedSizes = new Set(["S", "M"]);
  let priceMin = 0;
  let priceMax = 500;
  let searchQuery = "";

  function setActive(name: any) {
    activeLink = name;
    activeSubLink = "";
  }

  function toggleSubmenu(name: any) {
    openSubmenu = openSubmenu === name ? "" : name;
    activeLink = name;
    activeSubLink = "";
  }

  function setSubActive(name: any) {
    activeSubLink = name;
  }

  function toggleSwatch(hex: any) {
    if (selectedSwatches.has(hex)) selectedSwatches.delete(hex);
    else selectedSwatches.add(hex);
    selectedSwatches = new Set(selectedSwatches);
  }

  function toggleSize(size: any) {
    if (selectedSizes.has(size)) selectedSizes.delete(size);
    else selectedSizes.add(size);
    selectedSizes = new Set(selectedSizes);
  }

  function clearFilters() {
    selectedSwatches = new Set();
    selectedSizes = new Set();
    priceMin = 0;
    priceMax = 500;
  }

  function applyFilters() {
    const filters = {
      swatches: [...selectedSwatches],
      sizes: [...selectedSizes],
      priceMin,
      priceMax,
    };
    // Emit to parent or handle internally
    console.log("Filters applied:", filters);
  }
</script>

<div
  class="bg-[#faf9f7] relative h-full px-2"
>
  <div class="flex flex-col flex-1">
    <button
      class="nav-link"
      class:active={activeLink === "All products"}
      on:click={() => setActive("All products")}
    >
      <div class="link-left">
        <div class="link-dot"></div>
        <span class="link-name">All products</span>
      </div>
    </button>

    {#each categories as cat}
      {#if cat.sub.length > 0}
        <button
          class="nav-link
        flex
        items-center
        justify-between
        cursor-pointer
        text-[#4a4540]
        w-full
        text-left
        "
          class:active={activeLink === cat.name}
          class:open={openSubmenu === cat.name}
          on:click={() => toggleSubmenu(cat.name)}
        >
          <div class="link-left">
            <div class="link-dot"></div>
            <span class="link-name">{cat.name}</span>
          </div>
          <div class="link-right">
            <svg
              class="arrow"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </button>

        <div class="submenu" class:open={openSubmenu === cat.name}>
          {#each cat.sub as sub}
            <button
              class="sub-link"
              class:active={activeSubLink === sub.name}
              on:click={() => setSubActive(sub.name)}
            >
              <span>{sub.name}</span>
              <span class="sub-count">{sub.count}</span>
            </button>
          {/each}
        </div>
      {:else}
        <button
          class="nav-link"
          class:active={activeLink === cat.name}
          on:click={() => setActive(cat.name)}
        >
          <div class="link-left">
            <div class="link-dot"></div>
            <span class="link-name">{cat.name}</span>
          </div>
          <!-- <span class="link-count">{cat.count}</span> -->
        </button>
      {/if}
    {/each}

    <div
      class="text-[10px] tracking-[0.14e] uppercase text-[#b8b0a8] p-3 font-medium"
    >
      Collections
    </div>
    {#each collections as col}
      <button
        class="nav-link"
        class:active={activeLink === col.name}
        on:click={() => setActive(col.name)}
      >
        <div class="link-left">
          <div class="link-dot"></div>
          <span class="link-name">{col.name}</span>
        </div>
      </button>
    {/each}
  </div>

  <!-- <div class="pl-4 pt-2  pb-1 bg-[#faf9f7]">
    <div class="filter-label">filter by price</div>
    <div class="filter-group">
      <div class="price-range">
        <input
          class="price-input px-3 py-3 sm:py-1.5 sm:text-sm rounded-2xl sm:rounded-xl"
          type="text"
          name="min price input"
          inputmode="numeric"
          bind:value={priceMin}
          placeholder="Min"
        />
        <span class="price-sep">to</span>
        <input
          name="max price input"
          class="price-input px-3 py-3 sm:py-1.5 sm:text-sm rounded-2xl sm:rounded-xl"
          type="text"
          inputmode="numeric"
          bind:value={priceMax}
          placeholder="Max"
        />
      </div>
    </div>
  </div> -->
</div>

<style>
  .nav-link {
    transition: background 0.15s;
  }
  .nav-link:hover {
    color: #ecd0a5;
  }
  .nav-link.active {
    color: #1a1814;
    font-weight: 900;
    /* background: #e8e3db; */
  }
  .nav-link.active .link-name {
    font-weight: 500;
  }

  .link-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .link-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .link-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #c9a96e;
    min-width: 5px;
    flex-shrink: 0;
  }
  .link-name {
    font-size: 13.5px;
    letter-spacing: 0.01em;
  }

  .arrow {
    transition: transform 0.22s;
    color: #b8b0a8;
  }
  .nav-link.open .arrow {
    transform: rotate(90deg);
  }

  .submenu {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.28s ease;
  }
  .submenu.open {
    max-height: 800px;
  }

  .sub-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 24px 7px 44px;
    cursor: pointer;
    font-size: 13px;
    color: #7a7068;
    transition:
      color 0.15s,
      background 0.15s;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
  }
  .sub-link:hover {
    color: #1a1814;
    background: #ede9e3;
  }
  .sub-link.active {
    color: #1a1814;
    font-weight: 500;
  }
  .sub-count {
    font-size: 11px;
    color: #b8b0a8;
  }

  .filter-label {
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #b8b0a8;
    margin-bottom: 10px;
    font-weight: 500;
  }
  .filter-group {
    margin-bottom: 10px;
  }
  .filter-group:last-child {
    margin-bottom: 0;
  }

  .price-range {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .price-input {
    width: 100%;
    border: 1px solid #ddd8cf;
    color: #312d26;
    background: #faf9f7;
    outline: none;
  }
  .price-input:focus {
    border-color: #a09890;
  }
  .price-sep {
    color: #b8b0a8;
    font-size: 12px;
  }
</style>
