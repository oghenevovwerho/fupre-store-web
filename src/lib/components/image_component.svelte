<script lang="ts">
    let {
        src,
        alt,
        class: className = "",
    }: {
        src: string;
        alt: string;
        class?: string;
        duration?: number;
    } = $props();
    let loaded = $state(false);
</script>

<div class={`relative overflow-hidden ${className}`}>
    <!-- Shimmer -->
    <div
        class={`
            absolute inset-0 transition-opacity duration-1500 ease-out 
            ${loaded ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
    >
        <div class="w-full h-full bg-neutral-200 relative overflow-hidden">
            <div
                class="
                absolute inset-0
                animate-shimmer
                bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)]"
            ></div>
        </div>
    </div>

    <!-- Image -->
    <img
        {src}
        {alt}
        loading="lazy"
        decoding="async"
        onload={() => (loaded = true)}
        onerror={() => (loaded = true)}
        class={`w-full h-full object-cover ease-out`}
    />
</div>
