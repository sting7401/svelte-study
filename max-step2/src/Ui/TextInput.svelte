<script>
	export let controlType = null;
	export let id = null;
	export let label = null;
	export let rows = null;
	export let value = null;
	export let type = 'text';
	export let valid = true;
	export let validMessage = '';

	let focused = false;
</script>

<style>
	label {
		display: block;
		margin-bottom: 0.5rem;
		width: 100%;
	}
	.form-control {
		padding: 0.5rem 0;
		width: 100%;
		margin: 0.25rem 0;
	}
	textarea,
	input {
		width: 100%;
		border: 1px solid #eee;
		border-bottom: 1px solid #ddd;
	}
	.invalid {
		border: red;
		background: #ddd;
	}

	.error-message {
		color: red;
		margin: 1rem 0;
	}
</style>

<div>
	<label for="{id}">{label}</label>
	{#if controlType === 'textarea'}
		<div class="form-control">
			<textarea
				class:invalid="{!valid && focused}"
				row="{rows}"
				id="{id}"
				bind:value="{value}"
				on:blur="{() => (focused = true)}"></textarea>
		</div>
	{:else}
		<div class="form-control">
			<input
				class:invalid="{!valid && focused}"
				type="{type}"
				id="{id}"
				value="{value}"
				on:input
				on:blur="{() => (focused = true)}"
			/>
		</div>
	{/if}

	{#if validMessage && !valid && focused}
		<p class="error-message">{validMessage}</p>
	{/if}
</div>
