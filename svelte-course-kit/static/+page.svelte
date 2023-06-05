<script>
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';
	import { navigating } from '$app/stores';
	import { Button } from '$components';

	$: console.log($navigating);

	let text = '';

	beforeNavigate(() => {
		console.log('beforeNavigate', navigation);
	});

	afterNavigate(() => {
		console.log('afterNavigate', navigation);
	});

	const textChange = (event) => {
		if (text) {
			text = event.detail.text;
		} else {
			text = 'click';
		}
	};
</script>

<button
	on:click={async () => {
		await goto('/about');
	}}>이동 About</button
>

<Button on:disHover={textChange}>click {text}</Button>
<a href="/about">About</a>
