<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<style lang="scss">
    @reference "tailwindcss";

    :global(body) {
        background-color: #110810;
        color: #ffefef;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    :global(.container) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100dvh;
        width: 100%;
    }
</style>

{@render children?.()}
