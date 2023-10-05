<script>
	import { Canvas } from '@threlte/core';

	import Scene from './Scene.svelte';
</script>

<style>
	.warpper {
		overflow: hidden;
		min-width: 100vw;
		min-height: 100vh;
	}
</style>

<div class="warpper" style:background-color="#000">
	<Canvas>
		<Scene />
	</Canvas>
</div>
