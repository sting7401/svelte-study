<script lang="ts">
	import 'modern-normalize/modern-normalize.css';
	import '$lib/scss/main.scss';
	import type { LayoutData } from './$types';
	import { LogoutButton } from '$components';

	export let data: LayoutData;

	$: user = data.user;
</script>

{#if user}
	<p>hello {user.display_name}</p>

	<LogoutButton />
{/if}

<slot><!-- optional fallback --></slot>
