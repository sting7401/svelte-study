<script lang="ts">
	import '$lib/css/app.css';

	const navLinks: string[] = ['home', 'basic', 'counter', 'rune'];
</script>

<nav>
	<ul class="grid grid-cols-4 bg-slate-100">
		{#each navLinks as navLink}
			<li class="border-b border-slate-300">
				<a
					href={navLink === 'home' ? '/' : navLink}
					class="flex justify-center items-center p-2 text-[1.25rem] text-center hover:underline"
					>{navLink}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<main class="relative">
	<slot><!-- optional fallback --></slot>
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
