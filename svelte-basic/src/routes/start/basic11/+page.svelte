<script>
	import Slot from './Slot.svelte';
</script>

<div>
	<Slot>
		<span>슬롯 요소</span>
		{#snippet slotText()}
			<span>네이밍 있는 슬롯 요소</span>
		{/snippet}
	</Slot>
</div>
