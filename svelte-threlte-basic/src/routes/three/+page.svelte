<script>
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/components/Scene.svelte';
</script>

<svelte:body class="w-screen h-screen" />

<div class="w-screen h-screen overflow-hidden">
	<Canvas>
		<Scene />
	</Canvas>
</div>
