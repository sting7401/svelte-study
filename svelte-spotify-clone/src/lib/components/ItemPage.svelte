<script lang="ts">
	import { Music } from 'lucide-svelte';

	export let color: string | null;
	export let image: string | undefined;
	export let title: string;
	export let type: string | undefined;
</script>

<div
	class="banner flex flex-col gap-20 sm:gap-x-40 relative mt-[calc(-1*(30px+var(--header-height)))] -mx-30 p-[calc((30px+var(--header-height)))_30px_20px] sm:flex-row sm:items-end"
>
	<div
		class="banner-gradient absolute top-0 left-0 w-full h-full"
		style:background-image="linear-gradient(0deg, transparent, {color || 'var(--light-gray)'})"
	/>
	<div class="cover z-10">
		{#if image}
			<img
				loading="lazy"
				src={image}
				alt={title}
				class="w-full aspect-square object-cover shadow-[0_0_50px_0_rgba(0,0,0,0.5)] sm:w-230 md:w-200 lg:w-230"
			/>
		{:else}
			<div
				class="cover-placeholder flex items-center justify-center w-2/5 bg-[--medium-gray] sm:w-230 md:w-200 lg:w-230"
			>
				<Music focusable="false" aria-hidden color="var(--light-gray)" />
			</div>
		{/if}
	</div>

	<div class="info z-10">
		{#if type}
			<p class="type m-0 text-12 font-w6 uppercase">{type}</p>
		{/if}
		<h3 class="title mt-1 text-12 md:text-36 lg:text-54">
			{title}
		</h3>
		<slot name="meta" />
	</div>
</div>

<div
	class="content relative z-10 min-h-300 mx-[-30px] px-30 bg-gradient-to-b from-[--bg-color] to-[rgba(0,0,0,1)]"
>
	<slot><!-- optional fallback --></slot>
</div>
