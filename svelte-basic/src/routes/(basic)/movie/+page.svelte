<script lang="ts">
	const data = $state([
		{ title: '고질라', year: 2024, category: '어드벤처', like: 0 },
		{ title: '듄', year: 2024, category: '액션', like: 0 }
	]);

	let likeCount = 0;

	const handleLike = (i) => {
		data[i].like += 1;
	};
</script>

<main>
	<h1>영화 정보</h1>

	{#each data as { title, year, category, like }, i}
		<div>
			<h3 class="bg-yellow-50 p-2.5">{i}: {title}</h3>
			<p>{year}</p>
			<p>{category}</p>
			<button
				type="button"
				onclick={() => {
					handleLike(i);
				}}
			>
				좋아요 {like}</button
			>
		</div>
	{/each}
</main>

<style>
</style>
