<script lang="ts">
	import type { PageData } from './$types';
	import { onDestroy, onMount } from 'svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Movies from '$lib/components/Movies.svelte';
	import Event from '$lib/components/Event.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';

	export let data: PageData;
	let { list } = data;

	let eventText = ['1', '2', '3'];
	let eventIndex = 0;

	let data_temp = [...list];
	let likeCount = 0; // 좋아요 수를 저장할 변수

	const handleLike = (id) => {
		list = list.map((movie) => {
			if (movie.id === id) {
				movie.likeCount += 1;
			}
			return movie;
		});
		data_temp = list.filter((movie) => {
			return data_temp.includes(movie);
		});
	};

	let isModal: boolean = false;
	let selectedMovie: number = 0;

	const closeModal = () => {
		isModal = false;
	};

	const handleMovieNumber = (i) => {
		selectedMovie = i;
	};

	let alertText = '';

	let isEvent = true;
	let intervalEventText;

	$: {
		clearInterval(intervalEventText);

		intervalEventText = setInterval(() => {
			eventIndex += 1;

			if (eventIndex >= eventText.length) {
				eventIndex = 0;
			}
		}, 3000);
	}

	// onMount(() => {
	// 	intervalEventText = setInterval(() => {
	// 		if (eventIndex >= eventText.length) {
	// 			eventIndex = 0;
	// 		} else {
	// 			eventIndex += 1;
	// 		}
	// 	}, 3000);
	// });

	// onDestroy(() => {
	// 	clearInterval(intervalEventText);
	// });
</script>

{#if isEvent}
	<Event bind:isEvent {eventText} {eventIndex} />
{/if}

<button type="button" onclick={(e) => (isEvent = true)}>on</button>

<SearchBar {list} bind:data_temp bind:alertText />

<div class="container">
	<button
		type="button"
		onclick={(e) => {
			data_temp = [...list];
			alertText = '';
		}}>전체보기</button
	>
</div>

<Movies {data_temp} bind:isModal {handleMovieNumber} {handleLike} />

{#if isModal}
	<Modal {list} {selectedMovie} {closeModal}></Modal>
{/if}

<style>
	.container {
		text-align: center;
	}
</style>
