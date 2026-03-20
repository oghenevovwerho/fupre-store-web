<script lang="ts">
    let query = $state("");
</script>

<form class="relative h-11 md:h-10.5 w-[55ch]">
    <input
        bind:value={query}
        name="search for products"
        placeholder="I'm shopping for..."
        type="text"
        autocomplete="off"
        class="h-full w-full sm:pb-0.5 pl-2 placeholder:text-sm placeholder:text-[#a09890] text-gray-700 rounded-2xl  border-[1.25px] border-[#a09890] text-sm outline-0"
    />
    <div
        class="absolute inset-y-0 right-0 h-full aspect-square flex items-center justify-center"
    >
        <button
            type="submit"
            aria-label="button"
            class=" h-[90%] w-[90%] flex items-center justify-center border-[1.25px] border-dashed border-[#a09890] shadow-blue-100 rounded-[14px] hover:border-solid cursor-pointer active:scale-105"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 48 48"
                ><g
                    fill="none"
                    stroke="#a09890"
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
