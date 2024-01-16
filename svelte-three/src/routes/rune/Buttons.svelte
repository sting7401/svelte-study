<script lang="ts">
	let { ...props } = $props();

	console.log(props);
</script>

<button type="button" {...props}>
	<slot><!-- optional fallback --></slot>
</button>
