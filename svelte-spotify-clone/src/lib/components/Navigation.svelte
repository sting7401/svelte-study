<script lang="ts">
	import { Home, Search, ListMusic, type Icon } from 'lucide-svelte';
	import { type ComponentType } from 'svelte';
	export let desktop: boolean;

	const menuitems: { path: string; label: string; icon: ComponentType<Icon> }[] = [
		{
			path: '/',
			label: 'HOME'
            icon: Home
		},
		{
			path: '/search',
			label: 'Search'
            icon: Search
		},
		{
			path: '/playlists',
			label: 'Playlists'
            icon: ListMusic
		}
	];
</script>

<div class="nav__content" class:desktop class:mobile={!desktop}>
	<nav aria-label="Main" />
</div>
