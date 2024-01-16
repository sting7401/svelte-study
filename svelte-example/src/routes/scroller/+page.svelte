<script lang="ts">
	import Story from './Story.svelte';
	import Chapter from './Chapter.svelte';

	import { percent } from './helper';

	let index = 0;
	let id = '';
</script>

<p>
	<strong>{index ?? '?'} - {id ?? '???'}</strong>
</p>

<main>
	<Story bind:index bind:id>
		<Chapter id="intro" --color="orangered">
			<h1>📜 Svelte Storyscrolling</h1>
			<p>There aren't really great libraries for this...</p>
		</Chapter>
		<Chapter id="middle" --color="steelblue">
			<h1>😀 But guess what?</h1>
			<p>
				I made this example based on <a
					href="https://svelte.dev/repl/3d3736e634c9404ea8ec2ef7b87e2053?version=3.42.4"
					>a lovely REPL</a
				>.
			</p>
		</Chapter>
		<Chapter id="bindings" --color="mediumvioletred">
			<h1>⚡ Active State</h1>
			<p>You can track the active node's index and id...</p>
		</Chapter>
		<div class="spacer">
			<h1>✋ Query Parameter</h1>
			<p>This spacer is excluded since it's not queried...</p>
		</div>
		<Chapter id="transitions" --color="rebeccapurple" let:visible let:intro let:outro>
			<h1>🕊️ Visible, Intro & Outro</h1>
			<p>Visible: {percent(visible)} Intro: {percent(intro)} Outro: {percent(outro)}</p>
		</Chapter>
		<Chapter id="offset" --color="sienna" let:offset>
			<h1>📏 Centered Offset</h1>
			<p>Offset: {percent(offset)}</p>
		</Chapter>
		<Chapter id="conclusion" --color="seagreen">
			<h1>👍 Seems to work OK!</h1>
			<p>But there's always room for improvement...</p>
		</Chapter>
	</Story>
</main>
