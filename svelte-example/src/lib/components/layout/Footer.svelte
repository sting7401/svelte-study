<script>
	import { footerSections } from '$lib/data/footer-section';
	import WhiteLogo from '$lib/icons/WhiteLogo.svelte';
</script>

<div
	class="bg-fw-darkblue text-white flex flex-col sm:flex-row padding-x pb-16 pt-12 gap-28 lg:gap-16 xl:gap-28"
>
	<div class="flex flex-col justify-between">
		<WhiteLogo />

		<span class="text-fw-darkgrey hidden sm:block">copyright</span>
	</div>

	{#each footerSections as section}
		<div class="flex flex-col gap-5">
			<span class="font-semibold text-lg">{section.title}</span>
			<div class="flex flex-col gap-3">
				{#each section.links as link}
					<a href={link.link}>{link.name}</a>
				{/each}
			</div>
		</div>
	{/each}

	<span class="text-fw-darkgrey sm:hidden block">copyright</span>
</div>
