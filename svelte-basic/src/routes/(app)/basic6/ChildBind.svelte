<script lang="ts">
	interface Props {
		cValue?: number;
	}

	let { cValue = $bindable(10) }: Props = $props();

	const childClick = () => {
		cValue *= 2;
	};
</script>

<button onclick={childClick}>자식 버튼</button>
<p>{cValue}</p>
