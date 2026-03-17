<script lang="ts">
  let { onclick }: { onclick: () => void } = $props();
</script>

<div class="flex items-center justify-end gap-6">
  <button {onclick} title="open/close sidebar">
    <svg
      class="cursor-pointer active:scale-110 sm:hidden"
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 50 50"
    >
      <g
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
      >
        <path stroke="#344054" d="M6.25 25h37.5" />
        <path stroke="#344054" d="M6.25 12.5h25m-12.5 25h25z" />
      </g>
    </svg>
  </button>

  <svg
    class="cursor-pointer active:scale-110 max-sm:hidden"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    ><path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M6.8 2.2a2.5 2.5 0 0 0-3.8 2v15.6a2.5 2.5 0 0 0 3.8 2L21 13.7a2 2 0 0 0 0-3.4ZM3.2 3.5l12.8 13m-12.8 4L16 7.5"
    /></svg
  >
  <svg
    class="cursor-pointer active:scale-110 max-sm:hidden"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    ><g fill="none"
      ><path fill="currentColor" d="M10.904 13.794h2.024l-1.012-1.755z" /><path
        stroke="currentColor"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m8.843 17.367l-1.58 2.74A1.784 1.784 0 1 1 4.17 18.32l.55-.953m4.122 0H4.72m4.122 0h6.146m-10.268 0h-.466a1.786 1.786 0 0 1 0-3.573h2.527l3.073-5.327l-1.03-1.787a1.784 1.784 0 1 1 3.092-1.786a1.784 1.784 0 1 1 3.09 1.786l-1.03 1.786m-1.049 5.328h-2.024l1.012-1.755m1.012 1.755l2.061 3.573m-2.06-3.573l-1.013-1.755m3.073 5.328l1.58 2.74a1.784 1.784 0 1 0 3.092-1.787l-.55-.953h.634a1.786 1.786 0 0 0 0-3.573H17.05l-3.073-5.328m0 0l-2.06 3.573"
      /></g
    ></svg
  >
  <svg
    class="cursor-pointer active:scale-110 max-sm:hidden"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    ><path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M16.5 21a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-.927 0-1.742-.593-1.996-1.452zm0 0L3 3"
    /></svg
  >
  <svg
    class="cursor-pointer active:scale-110 max-sm:hidden size-7 md:size-6.5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    ><g fill="none" stroke="currentColor" stroke-width="1.5"
      ><path
        stroke-linejoin="round"
        d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
      /><circle cx="12" cy="7" r="3" /></g
    >
  </svg>
</div>
