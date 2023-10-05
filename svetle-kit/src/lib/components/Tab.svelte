<script>
	export let className = '';
	export let tabLists = [];

	$: tabList = tabLists;

	const handleClick = (id, target) => {
		const number = tabList.find((item) => {
			return item.target === id;
		});

		console.log(id, target);
	};
</script>

<div class="border-b">
	<ul class="flex gap-20 max-w-[1240px]">
		{#each tabLists as { target, text, check }, id}
			<li data-number={id} id={target} class="tab {className}">
				<button
					type="button"
					on:click|preventDefault={() => {
						handleClick(id, target);
					}}
					class="relative pb-20"
				>
					{text}
					{#if check}
						<span class="absolute left-0 bottom-0 w-full h-4 rounded bg-blue-700"></span>
					{/if}
				</button>
			</li>
		{/each}
	</ul>
</div>

<style>
</style>
