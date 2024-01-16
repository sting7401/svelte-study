<script>
	import { onMount } from 'svelte';
	import 'aframe';
	import './color-toggle';
	import './target-maker';
	import './mover';
	import './return-emitter';
</script>

<!-- <a-scene>



	<a-sky src="https://img.freepik.com/free-photo/white-cloud-on-blue-sky_74190-7709.jpg"></a-sky>
</a-scene> -->

<a-scene
	cursor="rayOrigin: mouse"
	inspector="url: https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js"
	s
>
	<a-assets>
		<a-asset-item id="model" src="./Creatures/scene.gltf"></a-asset-item>
	</a-assets>

	<a-box
		position="-1.5 1 -1.5"
		rotation="0 45 0"
		color="#4CC3D9"
		target-maker
		return-emitter
		animation="property: rotation; to: 0 360 0; easing: linear; dur: 5000; loop: true "
	></a-box>
	<a-sphere position="0 4 -3" radius="1.25" color="#EF2D5E" mover></a-sphere>
	<a-cylinder
		position="2 0.75 -3"
		radius="0.5"
		height="3.5"
		color="#FFC65D"
		color-toggle
		return-emitter
	></a-cylinder>
	<a-plane position="0 0 -4" rotation="-90 0 0" width="8" height="8" color="#7BC8A4" return-emitter
	></a-plane>
	<a-sky color="#eeeeee"></a-sky>

	<a-entity position="0 1.5 -1" gltf-model="#model"></a-entity>

	<a-entity id="rig">
		<a-entity camera position="0 2 0" look-controls wasd-controls>
			<a-cursor id="cursor" raycaster fuse="true" fusetimeout="3000"></a-cursor>
		</a-entity>
	</a-entity>
</a-scene>
