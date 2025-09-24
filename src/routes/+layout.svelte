<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<style lang="scss">
    :global(body) {
        background-color: #110810;
        color: #ffefef;
    }
</style>

{@render children?.()}
