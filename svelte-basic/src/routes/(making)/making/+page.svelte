<!-- @migration-task Error while migrating Svelte code: can't migrate `let state: State = '시작';` to `$state` because there's a variable named state.
     Rename the variable and try again or migrate by hand. -->
<script lang="ts">
	import { tick } from 'svelte';
	import { emoji } from './emoji';
	import { fade, fly } from 'svelte/transition';

	type State = '시작' | '놀이' | '일시 중지' | '승리' | '실패';

	let state: State = $state('시작');
	let size = $state(20);
	let time = $state(60);
	let selected: number[] = $state([]);
	let matches: string[] = $state([]);
	let timerId: number | null = $state(null);

	const createGrid = () => {
		let cards = new Set<string>();
		let maxSize = size / 2;

		while (cards.size < maxSize) {
			const randomIndex = Math.floor(Math.random() * emoji.length);
			cards.add(emoji[randomIndex]);
		}

		return shuffle([...cards, ...cards]);
	};

	const shuffle = <Emoji,>(array: Emoji[]) => {
		return array.sort(() => Math.random() - 0.5);
	};

	let grid = createGrid();
	let maxMatches = grid.length / 2;

	const startGameTimer = () => {
		const countDown = () => state !== '일시 중지' && (time -= 1);

		timerId = setInterval(countDown, 2000);
	};

	const selectCard = (cardIndex: number) => {
		selected = [...selected, cardIndex];
	};

	const matchCards = () => {
		const [first, second] = selected;

		if (grid[first] === grid[second]) {
			matches = [...matches, grid[first]];
		}

		tick();
		setTimeout(() => {
			return (selected = []);
		}, 300);
	};

	const reset = () => {
		timerId && clearInterval(timerId);
		grid = createGrid();
		maxMatches = grid.length / 2;
		selected = [];
		matches = [];
		timerId = null;
		time = 60;
	};

	const gameWon = () => {
		state = '승리';
		reset();
	};

	const gameLost = () => {
		state = '실패';
		reset();
	};

	const gamePause = (e: KeyboardEvent) => {
		if (e.key !== 'Escape') return;

		if (state === '놀이') {
			state = '일시 중지';
		} else if (state === '일시 중지') {
			state = '놀이';
		}
	};

	$: if (state === '놀이') {
		!timerId && startGameTimer();
	}

	$: selected.length === 2 && matchCards();
	$: maxMatches === matches.length && gameWon();
	$: time === 0 && gameLost();

	$: console.log(state, selected, matches);
</script>

<svelte:window on:keydown={gamePause} />

{#if state === '일시 중지'}
	<p>일시 중지</p>
{/if}

{#if state === '시작'}
	<h1>매칭 게임</h1>
	<button type="button" on:click={() => (state = '놀이')}>시작</button>
{/if}

{#if state === '놀이'}
	<h1 class="timer" class:pulse={time < 10}>
		{time}
	</h1>

	{#if matches.length}
		<div class="matches" transition:fade|local>
			정답:
			{#each matches as card}
				<div transition:fly|local={{ y: 20, duration: 1000 }}>{card}</div>
			{/each}
		</div>
	{/if}

	<div class="cards">
		{#each grid as card, cardIndex}
			{@const indexFind = (index = 0) => index === cardIndex}
			{@const indexCard = (item = '') => item === card}
			{@const isSelected = selected?.find(indexFind) !== undefined}
			{@const isSelectedOrMatched = selected.find(indexFind) || matches.find(indexCard)}
			{@const match = matches.find(indexCard)}
			<button
				type="button"
				class="card"
				class:selected={isSelected}
				class:flip={isSelectedOrMatched}
				disabled={isSelectedOrMatched}
				on:click={() => selectCard(cardIndex)}
				data-id="emoji{cardIndex}"
			>
				<span class="back" class:match>{card}</span>
			</button>
		{/each}
	</div>
{/if}

{#if state === '실패'}
	<h1>{state}</h1>
	<button type="button" on:click={() => (state = '놀이')}>재시작</button>
{/if}

{#if state === '승리'}
	<h1>{state}</h1>
	<button type="button" on:click={() => (state = '놀이')}>재시작</button>
{/if}

<style>
	.cards {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 0.4rem;
	}

	.card {
		width: 140px;
		height: 140px;
		font-size: 4rem;
		background-color: var(--bg-2);
		transition: rotate 0.3s ease-out;
		transform-style: preserve-3d;

		&.selected {
			border: 4px solid var(--border);
		}

		&.flip {
			rotate: y 180deg;
			pointer-events: none;
		}

		& > .back {
			position: absolute;
			inset: 0;
			display: grid;
			place-content: center;
			backface-visibility: hidden;
			rotate: y 180deg;
		}

		& > .match {
			transition: opacity 0.4s ease-in-out;
			opacity: 0.4;
		}
	}

	.matches {
		display: flex;
		gap: 1rem;
		margin-block: 2rem;
		font-size: 3rem;
	}

	.timer {
		transition: color 0.4s ease-in-out;
	}

	.pulse {
		color: var(--pulse);
		animation: pulse 1s infinite ease;
	}

	@keyframes pulse {
		to {
			scale: 1.4;
		}
	}
</style>
