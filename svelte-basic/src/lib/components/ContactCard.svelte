<script lang="ts">
	let {
		inputList1,
		inputList2,
		inputList3,
		inputList4
	} = $props();

	const initName = inputList1;
</script>

<div>
	<img src="" alt="" />
	<div>
		{inputList1} / {initName}
	</div>
	<div>
		{inputList2}
	</div>
	<div>
		{inputList3}
	</div>
	<div>
		{inputList4}
	</div>
</div>

<style>
	/* your styles go here */
</style>
