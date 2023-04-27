<script>
	export let cValue = 10;

	const childClick = () => {
		cValue *= 2;
	};
</script>

<style>
</style>

<button on:click="{childClick}">자식 버튼</button>
<p>{cValue}</p>
