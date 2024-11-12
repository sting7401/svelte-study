<!-- @migration-task Error while migrating Svelte code: Unexpected token -->
<script lang="ts">
	import type { Album } from './types';
    export let albums: Album[];
    let hideText = $state(false);
    let preloadBehavior = 'tap'| 'hover' = $state('tap');
    let loading = $state(false);
</script>

{#if loading}
	<ul class="grid ablums gap-4">
		{#each Array(12) as _}
			<li>
				<div class="placeholder animate-pulse"></div>
			</li>
		{/each}
	</ul>
{:else}
	<ul>
		<li class="grid ablnums gap-4">
			<div class="relative pb-2">
				<img src={release.imageUrl} alt="" />
				<div class="absolute bottom-3 right-1 z-10">
					<slot name="action" {release} />
				</div>
			</div>

			<a class="after:absolute after:inset-0" href={release?.url || undefined}>
				<span class:sr-only={hideText}>
					{release.title}
					{#if release.year}({release.year}){/if}
				</span>
			</a>
		</li>
	</ul>
{/if}

<style>
	.albums {
		grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
	}

	.placeholder {
		min-height: 160px;
	}
</style>
