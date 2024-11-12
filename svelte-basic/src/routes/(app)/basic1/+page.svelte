<script>
	import Child from './Child.svelte';

	let name = $state('child');
</script>

{name}

<Child {name} />
