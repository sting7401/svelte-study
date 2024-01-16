<script>
	let edit = {
		w: 0,
		h: 0,
		s: 0,
		t: ''
	};
</script>

<input type="range" bind:value={edit.s} name="" id="" />
<input type="text" name="" id="" bind:value={edit.t} />

<p>w, h : {edit.w} {edit.h}</p>

<div bind:clientWidth={edit.w} bind:clientHeight={edit.h}>
	<span style="font-size:{edit.s}px">{edit.t}</span>
</div>

<style>
	div {
		display: inline-flex;
	}
</style>
