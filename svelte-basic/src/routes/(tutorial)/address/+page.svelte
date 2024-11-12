<script lang="ts">
	let address = $state('');
	let { data } = $props();
	const { addressList } = data;
</script>

<select bind:value={address}>
	<option value="">선택해주세요.</option>
	{#each addressList as addressOption}
		<option value={addressOption}>{addressOption}</option>
	{/each}
</select>
