<script>
	import { T } from '@threlte/core';

	import CuteGhost from './CuteGhost.svelte';
	import { Environment } from '@threlte/extras';
</script>

<T.PerspectiveCamera makeDefault fov={10} position={[0, 0, 40]} />

<!-- <T.Mesh>
	<T.BoxGeometry />
	<T.MeshBasicMaterial />
</T.Mesh> -->

<Environment files="M_Ghost_baseColor.png" />

<CuteGhost />
