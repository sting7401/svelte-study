<script lang="ts">
	let num: number = $state(0);
	let num2: number;

	$effect(() => {
		num2 = num + num;
	});

	const func = (e: Event) => {
		e.preventDefault();
		alert('Please');
	};
</script>

<button type="button" onclick={func}>
	<span>Save</span>
	{num2}
</button>
