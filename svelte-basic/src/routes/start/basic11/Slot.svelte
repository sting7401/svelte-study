<script>
	export let slotText;

	console.log(slotText);
</script>

<style>
</style>

<div class="bg-slate-400">
	<slot><!-- optional fallback --></slot>

	<slot name="slotText"><!-- optional fallback --> 1112</slot>
</div>
