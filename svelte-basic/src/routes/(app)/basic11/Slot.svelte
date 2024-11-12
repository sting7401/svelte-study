<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot making the component unusable -->
<script>
	export let slotText;

	console.log(slotText);
</script>

<div class="bg-slate-400">
	<slot><!-- optional fallback --></slot>

	<slot name="slotText"><!-- optional fallback --> 1112</slot>
</div>
