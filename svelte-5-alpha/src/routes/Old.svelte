<script lang="ts">
	let width = 10;
	let height = 10;

	$: area = width * height;

	setTimeout(() => {
		width = 20;
		height = 20;
	}, 1000);

	const size = (width: number): number => {
		return width * height;
	};
</script>

<div>
	{width} * {height} = {area}
</div>

<div>
	{size(width)}
</div>

<style>
</style>
