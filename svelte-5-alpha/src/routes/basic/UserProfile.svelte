<script lang="ts">
	import { getContext } from 'svelte';

	//const { name: string = '', age: number = 0 , favouriteColors:string[] = [], isAvailable:boolean = false} = $props();

	const { name = '', age = 0, colors = [], isAvailable = false } = $props();
</script>

<div>
	<p>{name} , {age}, {[...colors].join(', ')}, {isAvailable ? '가능' : '불가능'}</p>
</div>
