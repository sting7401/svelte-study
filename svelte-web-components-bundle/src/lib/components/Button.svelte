<svelte:options customElement={{ tag: 'say-name-button', shadow: 'none' }} />

<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [name]
	 */

	/** @type {Props} */
	let { name = '' } = $props();
</script>

<button type="button" onclick={() => alert(name)} class="bg-red-600">Login with Email</button>
