<svelte:options customElement={{ tag: 'say-name-button', shadow: 'none' }} />

<script>
	export let name = '';
</script>

<button type="button" on:click={() => alert(name)} class="bg-red-600">Login with Email</button>
