<script>
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	const scene = new THREE.Scene();
	let canvasEl;

	const geometry = new THREE.BoxGeometry(1, 1, 1);
	const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
	const mesh = new THREE.Mesh(geometry, material);

	scene.add(mesh);

	const sizes = {
		width: window.innerWidth,
		height: window.innerHeight
	};

	const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000);
	scene.add(camera);

	const renderer = new THREE.WebGLRenderer({ canvas: canvasEl });
	renderer.setSize(sizes.width, sizes.height);
	renderer.render(scene, camera);
</script>

<canvas class="w-screen h-screen" bind:this={canvasEl}></canvas>
