<script>
	import { T, useFrame } from '@threlte/core';
	import { interactivity, useTexture } from '@threlte/extras';
	import { spring } from 'svelte/motion';

	interactivity();

	const scale = spring(1);
	let color = '#008800';

	let rotation = $state(0);
	useFrame((_, delta) => {
		rotation += delta * 0.5;
	});

	const map = useTexture('/static/cute_ghost/textures');
</script>

<style>
	canvas {
		min-width: 100vw;
		min-height: 100vh;
	}
</style>

<T.PerspectiveCamera
	makeDefault
	position="{[10, 10, 10]}"
	on:create="{({ ref }) => {
		ref.lookAt(0, 1, 0);
	}}"
/>

<T.DirectionalLight position="{[3, 10, 7]}" />

<T.Mesh
	position="{[0, 1, 0]}"
	scale="{$scale}"
	rotation.y="{rotation}"
	on:pointerenter="{() => {
		scale.set(1.5);
	}}"
	on:pointerleave="{() => scale.set(1)}"
>
	<T.BoxGeometry args="{[1, 2, 1]}" />
	<T.MeshStandardMaterial map="{$map}" />
</T.Mesh>

<T.Mesh
	position="{[3, 1, 0]}"
	scale="{$scale}"
	rotation.y="{rotation}"
	on:pointerenter="{() => {
		scale.set(1.5);
	}}"
	on:pointerleave="{() => scale.set(1)}"
>
	<T.BoxGeometry args="{[1, 2, 1]}" />
	<T.MeshToonMaterial color="{color}" />
</T.Mesh>
