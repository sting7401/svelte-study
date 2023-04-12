<script>
	import {slide} from 'svelte/transition';
</script>

<style>
	span {
		display: inline-flex;
		position: relative;
		margin: 0 0.24rem;
		border-radius: 3px;
		border: 1px solid red;
		background-color: red;
		color: #fff;
		margin: 0 0.24rem;
		color: 0.8rem;
	}
</style>

<!-- markup (zero or more items) goes here -->
<span transition:slide>
	<slot />
</span>
