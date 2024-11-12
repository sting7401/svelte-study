<script lang="ts">
	interface Props {
		title?: string;
		id?: string;
	}

	let { title = '', id = '' }: Props = $props();
</script>

<h1>
	{title}
</h1>
<button>add to cart</button>
