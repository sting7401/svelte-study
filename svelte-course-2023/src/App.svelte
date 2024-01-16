<script>
	import svelteLogo from './assets/svelte.svg';

	let name = 'bob';
	let favoriteColor = 'red';
	let favoriteNumber = 20;
	let fontSize = 20;

	import Counter from './lib/Counter.svelte';

	setTimeout(() => {
		favoriteColor = 'blue';
		fontSize = 100;
	}, 1000);
</script>

<main>
	<h1>title svelte</h1>

	<img src={svelteLogo} alt="" />

	<Counter />

	<p style="color: {favoriteColor};">{name.toLocaleUpperCase()}</p>
	<p>{favoriteNumber / 10}</p>
	<p style="font-size: {fontSize}px;">{fontSize}</p>
</main>
