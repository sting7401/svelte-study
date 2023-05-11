<script>
	let address = '';
	export let data;
	const { addressList } = data;
</script>

<style>
</style>

<select bind:value="{address}">
	<option value="">선택해주세요.</option>
	{#each addressList as addressOption}
		<option value="{addressOption}">{addressOption}</option>
	{/each}
</select>
