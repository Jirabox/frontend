<script lang="ts">
    import { upload } from '$lib/upload.ts';

    let files = $state();
    let value = $state();

    $effect(() => {
        if (files && files.length > 0) {
            const formData: FormData = new FormData();
            formData.append("file", files[0]);
            upload(formData).then(result => {
                const filename = result.file
                console.log(filename);
                navigator.clipboard.writeText(`http://127.0.0.1:8000/download?file=${filename}`);
            });
            files = null;
            value = "";
        }
    });
</script>

<label for="fileselect">Upload</label>
<input bind:files bind:value type="file" id="fileselect">

<style>
    input[type="file"] {
        display: None;
    }
</style>
