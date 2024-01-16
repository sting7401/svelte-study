<script lang="ts">
	let items = [1, 2, 3, 4];
	let selected = 1;

	function onSelect(item: number) {
		selected = item;
	}
</script>

<ul>
	{#snippet liDom(item)}
		<li>
			<button onclick={() => onSelect(item)} area-selected={item === selected}>선택 {item}</button>
		</li>
	{/snippet}
</ul>

<ul>
	{#each items as item}
		{@render liDom(item)}
	{/each}
</ul>

<style>
	li[area-selected='true'],
	button[area-selected='true'] {
		background-color: blue;
		color: white;
	}
</style>
