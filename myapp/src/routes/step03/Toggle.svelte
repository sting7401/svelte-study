<script>
	export let choOption = 1;
</script>

<style>
</style>

<button
	disabled="{choOption === 1}"
	on:click="{() => {
		choOption = 1;
	}}">1</button
>
<button
	disabled="{choOption === 2}"
	on:click="{() => {
		choOption = 2;
	}}">2</button
>
