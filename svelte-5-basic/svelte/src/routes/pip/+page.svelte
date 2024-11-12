<script>
	import { onMount } from 'svelte';
	import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers';

	env.allowLocalModels = false;

	let fileUpload = $state(null);
	let imageContainer = $state(null);
	let status = $state(null);
	let detector = $state(null);

	async function initModel() {
		status.textContent = 'Loading model...';
		detector = await pipeline('object-detection', 'Xenova/detr-resnet-50');
		status.textContent = 'Model loaded. You can now upload an image.';
	}

	async function detect(img) {
		status.textContent = 'Analyzing...';
		const output = await detector(img.src, {
			threshold: 0.5,
			percentage: true
		});
		status.textContent = 'Analysis complete';
		console.log('output', output);
	}

	onMount(() => {
		initModel();

		fileUpload.addEventListener('change', function (e) {
			const file = e.target.files[0];
			if (!file) return;

			const reader = new FileReader();

			reader.onload = function (e2) {
				imageContainer.innerHTML = '';
				const image = document.createElement('img');
				image.src = e2.target.result;
				imageContainer.appendChild(image);
				detect(image); // Run the model on the uploaded image
			};

			reader.readAsDataURL(file);
		});
	});
</script>

<style>
	html,
	body {
		font-family: Arial, Helvetica, sans-serif;
	}

	.container {
		margin: 40px auto;
		width: max(50vw, 400px);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.custom-file-upload {
		display: flex;
		align-items: center;
		gap: 10px;
		border: 2px solid black;
		padding: 8px 16px;
		cursor: pointer;
		border-radius: 6px;
	}

	#file-upload {
		display: none;
	}

	.upload-icon {
		width: 30px;
	}

	#image-container {
		width: 100%;
		margin-top: 20px;
		position: relative;
	}

	#image-container > img {
		width: 100%;
	}
</style>
