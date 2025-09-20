export async function upload(bodyformdata: FormData) {
	const res = await fetch('http://localhost:8000/upload',
        {
            method: "POST",
            body: bodyformdata,
        }
    );
    const suceeded = res.json();
    return suceeded;
}
