<script>
	import Inner from '$lib/components/Inner.svelte';

	let mapPos = {
		x: 0,
		y: 0,
	};

	const pos = e => {
		mapPos.x = parseInt(e.clientX);
		mapPos.y = parseInt(e.clientY);
	};

	const click = () => {
		alert();
	};

	const dispatchMessage = e => {
		console.log(e.detail.text);
	};
</script>

<p on:mousemove={pos}>{mapPos.x} {mapPos.y}</p>

<p on:mousemove={e => (mapPos = { x: e.clientX, y: e.clientY })}>
	{mapPos.x}
	{mapPos.y}
</p>

<button on:click|once={click}>클릭</button>

<Inner on:message={dispatchMessage} />
