<script lang="ts">
    import Upload from '$lib/components/Upload.svelte'
</script>

<div class="absolute top-0 left-1/2 -translate-x-1/2 text-center">
    <h1 class="text-9xl">Jirabox</h1>

    <h2 class="mb-12">Welcome to Jirabox! File uploads up to 1 Gigabyte are allowed.</h2>
</div>

<div class="container">
    <Upload/>
</div>

<p class="absolute bottom-0 left-1/2 -translate-x-1/2 mt-6">File retention algorithm taken from https://0x0.st</p>

