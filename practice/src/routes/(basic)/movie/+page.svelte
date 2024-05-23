<script lang="ts">
	import type { PageData } from './$types';
	import Modal from '$lib/components/Modal.svelte';

	export let data: PageData;
	let { list } = data;

	const handleLike = (i) => {
		list[i].likeCount += 1;
	};

	let isModal: boolean = false;
	let selectedMovie: number = 0;
	let { title, story } = list[selectedMovie];

	const closeModal = () => {
		isModal = false;
	};
</script>

<main class="container">
	<h1>영화정보</h1>
	{#each list as movie, i}
		<div class="item">
			<figure>
				<img src={movie.imgUrl} alt={movie.title} />
			</figure>
			<div class="info">
				<h3 class="bg-yellow">{movie.title}</h3>
				<p>개봉: {movie.year}</p>
				<p>장르: {movie.category}</p>
				<button
					onclick={() => {
						handleLike(i);
					}}>좋아요 {list[i].likeCount}</button
				>
				<button
					onclick={() => {
						isModal = true;
						selectedMovie = i;
					}}
					class="btn btn-primary">상세보기</button
				>
			</div>
		</div>
	{/each}
</main>

{#if isModal}
	<Modal {title} {story} {closeModal}></Modal>
{/if}

<style>
	.bg-yellow {
		background: gold;
		padding: 10px;
		color: #333;
	}

	.item {
		width: 100%;
		border: 1px solid #ccc;
		display: flex;
		margin-bottom: 20px;
		padding: 1rem;
	}

	.item figure {
		width: 30%;
		margin-right: 1rem;
	}

	.item img {
		width: 100%;
	}

	.item .info {
		width: 100%;
	}
</style>
