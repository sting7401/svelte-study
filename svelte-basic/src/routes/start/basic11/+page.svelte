<script>
	import Slot from './Slot.svelte';
</script>

<style>
</style>

<div>
	<Slot>
		<span>슬롯 요소</span>
		<span slot="slotText">네이밍 있는 슬롯 요소</span>
	</Slot>
</div>
