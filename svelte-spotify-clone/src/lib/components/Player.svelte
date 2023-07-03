<script lang="ts" context="module">
	let current: HTMLAudioElement;
</script>

<script lang="ts">
	type Track = SpotifyApi.TrackObjectFull | SpotifyApi.TrackObjectSimplified;
	import { createEventDispatcher } from 'svelte';
	import { Pause, Play } from 'lucide-svelte';
	export let track: Track;

	const dispatch = createEventDispatcher<{
		play: { track: Track };
		pause: { track: Track };
	}>();

	let audio: HTMLAudioElement;
	let paused = true;

	const onPlay = () => {
		if (current && current !== audio) {
			current.currentTime = 0;
			current.pause();
		}

		current = audio;
		dispatch('play', { track });
	};

	const onPause = () => {
		dispatch('pause', { track });
	};
</script>

<div class="player">
	<audio
		on:play={onPlay}
		on:pause={onPause}
		src={track.preview_url}
		bind:this={audio}
		bind:paused
		controls
		preload="none"
		class="hidden"
	/>

	<button
		type="button"
		class="w-12 h-12 p-0"
		aria-label={paused ? `Play ${track.name}` : `Pause ${track.name}`}
		on:click={() => {
			if (paused) {
				audio.play();
			} else {
				audio.pause();
			}
		}}
	>
		{#if paused}
			<Play
				color="var(--text-color)"
				aria-hidden
				focusable="false"
				class="w-12 h-12 fill-[--text-color]"
			/>
		{:else}
			<Pause
				color="var(--text-color)"
				aria-hidden
				focusable="false"
				class="w-12 h-12 fill-[--text-color]"
			/>
		{/if}
	</button>
</div>

<style lang="scss">
	:global(html.no-js) {
		audio {
			display: block;
			width: 100%;
		}

		button {
			display: none;
		}
	}
</style>
