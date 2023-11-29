<script lang="ts">
	import '$lib/css/app.css';
</script>

<slot><!-- optional fallback --></slot>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
