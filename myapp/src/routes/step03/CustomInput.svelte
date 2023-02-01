<script>
	export let value = '';
	export let type = null;
	export let customInput = '';

	export function empty() {
		value = '';

		alert();
	}
</script>

<style>
</style>

<input type="text" bind:value="{value}" />
