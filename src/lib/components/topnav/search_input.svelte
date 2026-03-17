<script lang="ts">
    let query = $state("");
</script>

<form class="relative w-full flex-1 h-11.25">
    <input
        bind:value={query}
        name="search for products"
        placeholder="I'm shopping for..."
        type="text"
        autocomplete="off"
        class="h-full placeholder:text-sm placeholder:text-[#ebddc5] w-full text-gray-700 rounded-full pb-2 pt-1.5 bg-[#faf9f7] border-[1.25px] border-[#ebddc5] pl-4 text-sm outline-0"
    />
    <div
        class="absolute inset-y-0 right-1.5 h-full flex items-center justify-center"
    >
        <button
            type="submit"
            aria-label="button"
            class="bg-[#faf9f7] border-[1.25px] border-dashed border-[#ebddc5] shadow-blue-100 rounded-full p-2.25 cursor-pointer active:scale-[1.025]"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 48 48"
                ><g
                    fill="none"
                    stroke="#ebddc5"
                    stroke-linejoin="round"
                    stroke-width="3.5"
                    ><path
                        d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"
                    /><path
                        stroke-linecap="round"
                        d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"
                    /></g
                ></svg
            >
        </button>
    </div>
</form>
