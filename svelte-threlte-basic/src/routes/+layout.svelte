<script lang="ts">
	import '$lib/css/app.css';
</script>

<slot><!-- optional fallback --></slot>

<style>
	:global(html),
	:global(body) {
		width: 100%;
		height: 100%;
		padding: 0;
		margin: 0;
	}
</style>
