<script lang="ts">
	type ButtonEvent = {
		yes: (event: MouseEvent) => void;
		no: (event: MouseEvent) => void;
	};

	let { yes, no }: ButtonEvent = $props();
</script>

<button class="border rounded-sm p-2" onclick={yes}>yes</button>
<button class="border rounded-sm p-2" onclick={no}>no</button>
