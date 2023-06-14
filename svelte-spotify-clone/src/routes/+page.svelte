<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<input type="text" />
<select name="" id="">
	<option value="">option</option>
</select>
<button type="button">button</button>

<style lang="scss">
	h1 {
		font-size: functions.rem(36);

		@include breakpoint.up('lg') {
			color: blue;
		}
	}
</style>
