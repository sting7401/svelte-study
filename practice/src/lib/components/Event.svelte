<script>
	import { fade, fly } from 'svelte/transition';

	export let isEvent = false;
	export let eventText = [''];
	export let eventIndex = 0;
</script>

<!-- <section class="event {isEvent ? ' _show' : ''}"> -->

<section
	class="event _show {isEvent ? '_show' : ''}"
	in:fade={{ duration: 1000 }}
	out:fly={{ y: -400, duration: 1000 }}
>
	<p>{eventText[eventIndex]}</p>
	<button type="button" onclick={(e) => (isEvent = false)}>X</button>
</section>

<style>
	.event {
		background: #666;
		padding: 5px 1em;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fff;
		text-align: center;
		margin-bottom: 1em;
		padding: 10px 20px;

		/* 창이 보이지 않게 */
		max-height: 0;
		opacity: 0;
		overflow: hidden;
		transition: all 0.4s;
	}

	/* 기본: 창이 보이게 */
	._show {
		opacity: 1;
		max-height: 100px;
	}

	.event button {
		padding: 2px;
	}

	.event p,
	.event button {
		margin: 0;
	}
	.event p {
		width: 100%;
	}
</style>
