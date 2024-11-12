<script lang="ts">
	const basicList: number[] = $state(Array.from({ length: 12 }));
	const stepList: number[] = $state(Array.from({ length: 2 }));
</script>

<nav class="flex items-center">
	{#each basicList as _, index (index)}
		<li>
			<a
				href="/basic{index + 1}"
				class="animate-bounce text-sm font-bold underline transition hover:text-lg"
			>
				{index + 1}
			</a>
		</li>
	{/each}
	{#each stepList as _, i (i)}
		<li>
			<a
				href="/step0{i + 1}"
				class="animate-bounce text-sm font-bold underline transition hover:text-lg"
			>
				{i + 1}
			</a>
		</li>
	{/each}
</nav>
