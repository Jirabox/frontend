<script lang="ts">
    import { upload } from '$lib/upload';

    let files = $state();
    let value = $state();

    $effect(() => {
        if (files) {
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

<h1>Jirabox</h1>

<h2>Welcome to Jirabox! File uploads up to 1 Gigabyte are allowed.</h2>

<label for="fileselect">Upload a file:</label>
<input bind:files bind:value type="file" id="fileselect">


<p>File retention algorithm taken from https://0x0.st</p>
