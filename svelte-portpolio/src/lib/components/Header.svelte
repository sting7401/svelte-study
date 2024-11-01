<script lang="ts">
	let y: number = $props();

	let tabs = $state([
		{ name: 'Project', link: 'project' },
		{ name: 'About', link: 'about' }
	]);
</script>

<header
	class={'sticky top-0 z-[10] flex items-center justify-between border-solid px-6 duration-200' +
		(y > 0 ? 'bg-slate-950 py-4' : 'border-transparent bg-transparent py-6')}
>
	<h1 class="font-medium">
		<strong class="poppins font-bold">song</strong>
	</h1>
	<div class="hidden items-center gap-4 sm:flex">
		{#each tabs as tab, index}
			<a href={tab.link}>
				<p>{tab.name}</p>
			</a>
		{/each}
	</div>
</header>
