<script>
	import { Canvas } from '@threlte/core';
	import { GLTF } from '@threlte/extras';
	import Scene from '$lib/components/Scene.svelte';
</script>

<svelte:body class="w-screen h-screen" />

<div class="w-screen h-screen overflow-hidden bg-[#000]">
	<Canvas>
		<Scene />
	</Canvas>
</div>
