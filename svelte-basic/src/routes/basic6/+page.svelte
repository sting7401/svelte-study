<script>
	import Child from './Child.svelte';
	import ChildBind from './ChildBind.svelte';
	let number = 0;

	let person = {
		name: 'song',
		age: 20,
	};

	let pValue = 1;
	let cValue = 1;
</script>

<style>
</style>

<div>
	<button on:click="{() => (number += 1)}">+</button>
	<button on:click="{() => (number -= 1)}">-</button>

	<Child number="{number}" person="{person.name} {person.age}" />
	<Child {...person} />

	<ChildBind bind:cValue="{pValue}" />
	<ChildBind bind:cValue="{cValue}" />
</div>
