<script lang="ts">
	import type { PageData } from './$types';
	import { setContext } from 'svelte';
	import createUserState from './createUserState.svelte';
	import useFetchUsers from './createUserFetch.svelte';

	import UserProfile from './UserProfile.svelte';
	import UserProfileStore from './UserProfileStore.svelte';
	import Button from './Button.svelte';
	import FunnyButton from './FunnyButton.svelte';

	let { data }: { data: PageData } = $props();
	let name: string = '이름';
	let count: number = $state(10);
	const colors: string[] = ['red', 'green', 'yellow'];
	let inputElement: HTMLInputElement;
	let pageTitle: string = $state('');

	$effect(() => {
		console.log(data.title);

		inputElement.focus();

		pageTitle = document.title;
	});

	let lightIndex: number = $state(0);

	let light = $derived(colors[lightIndex]);

	function nextLight() {
		lightIndex = (lightIndex + 1) % colors.length;
	}

	let time: string = $state(new Date().toLocaleDateString());

	$effect(() => {
		if (isHappy === true) {
			const timer = setInterval(() => {
				time = new Date().toLocaleTimeString();
			}, 1000);

			return () => clearInterval(timer);
		} else {
			time = '';
		}
	});

	let isHappy = $state(false);

	function onAnswerNo() {
		isHappy = false;
	}

	function onAnswerYes() {
		isHappy = true;
	}

	const user = createUserState({
		id: 1,
		username: 'unicorn42',
		email: 'unicorn42@example.com'
	});
	setContext('user', user);

	let text: string = $state('hello');

	let picked: string = $state('red');

	let selectedColorId: number = $state(2);

	const colorList = [
		{ id: 1, text: 'red' },
		{ id: 1, text: 'blue' },
		{ id: 1, text: 'green' },
		{ id: 1, text: 'gray', isDisabled: true }
	];

	const response = useFetchUsers();
</script>

<svelte:head>
	<title>title: {data.title}</title>
</svelte:head>

<p>{name} : {count}</p>

<button
	type="button"
	class="border rounded-sm p-2"
	onclick={() => {
		count += 1;
	}}>버튼</button
>

<div class="grid gap-2 grid-cols-3">
	{#each colors as color, i}
		<p style="background-color: {color};" data-id={i}>{color}</p>
	{/each}
</div>

<input type="text" bind:this={inputElement} class="border rounded-sm p-2" />

<button type="button" class="border rounded-sm p-2" onclick={nextLight}>버튼</button>
<p style="color: {light};">Light is: {light} {pageTitle} {time}</p>

<UserProfile name="이름" age={20} {colors} isAvailable={false} />

<Button type="button" class="border rounded-sm p-2" yes={onAnswerYes} no={onAnswerNo}
	>$props button</Button
>
<span>
	{isHappy ? 'Happy' : 'unHappy'}
</span>

<FunnyButton></FunnyButton>
<FunnyButton>click me!</FunnyButton>

<h1>Welcome back, {user.username}</h1>
<UserProfileStore />

<input type="text" name="" id="" bind:value={text} class="border p-1 mt-5" /> <span>{text}</span>

<p class=" p-1 mt-5">{picked}</p>
<input id="blue-pill" bind:group={picked} type="radio" value="blue" />
<label for="blue-pill">Blue pill</label>

<input id="red-pill" bind:group={picked} type="radio" value="red" />
<label for="red-pill">Red pill</label>

<select name="" id="">
	{#each colorList as element}
		<option value={element.id} disabled={element.isDisabled}> {element.text}</option>
	{/each}
</select>

{#if response.isLoading}
	<p>Fetching users...</p>
{:else if response.error}
	<p>An error occurred while fetching users</p>
{:else if response.users}
	<ul>
		{#each response.users as user}
			<li>
				<img src={user.picture.thumbnail} alt="user" />
				<p>
					{user.name.first}
					{user.name.last}
				</p>
			</li>
		{/each}
	</ul>
{/if}
