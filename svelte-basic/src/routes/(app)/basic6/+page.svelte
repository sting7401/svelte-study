<script>
	import Child from './Child.svelte';
	import ChildBind from './ChildBind.svelte';
	let number = $state(0);

	let person = {
		name: 'song',
		age: 20
	};

	let pValue = $state(1);
	let cValue = $state(1);
</script>

<div>
	<button onclick={() => (number += 1)}>+</button>
	<button onclick={() => (number -= 1)}>-</button>

	<Child {number} person="{person.name} {person.age}" />
	<Child {...person} />

	<ChildBind bind:cValue={pValue} />
	<ChildBind bind:cValue />
</div>
