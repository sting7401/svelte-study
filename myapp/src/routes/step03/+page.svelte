<script>
	import CustomInput from './CustomInput.svelte';
	import Toggle from './Toggle.svelte';
	import { isEmail } from './validation.js';

	// your script goes here
	let value = 'song';
	let price = 0;
	let selectionOption = '1';
	let agreed = false;
	let colors = 'red';
	let colors2 = 'red';
	let selectColor = 'red';
	let usernameInput = '';
	let someDiv = '';
	let customInput;
	let enterEmail = '';
	let formIsValue = false;

	$: if (isEmail(enterEmail)) {
		formIsValue = true;
	} else {
		formIsValue = false;
	}

	$: console.log(value);
	$: console.log(price);
	$: console.log(agreed);
	$: console.log(colors, colors2, selectColor);
	$: console.log(selectionOption, customInput);

	const setValue = event => {
		value = event.target.value;
	};

	const saveData = () => {
		console.log(usernameInput.value);

		console.dir(usernameInput);
		console.dir(someDiv);

		customInput.empty();
	};
</script>

<style>
	.invalid {
		border: 1px solid red;
	}
</style>

<!-- // <input type="text" value="{value}" on:input="{setValue}" />

// <input type="text" bind:value="{value}" /> -->

<CustomInput bind:value="{value}" bind:this="{customInput}" />

<Toggle bind:choOption="{selectionOption}" />

<input type="number" bind:value="{price}" />

<label for=""
	><input type="checkbox" bind:checked="{agreed}" />
	agree to term?
</label>

<h1>radio</h1>
<label for=""
	><input type="radio" name="color" value="red" bind:group="{colors}" />
	red
</label>
<label for=""
	><input type="radio" name="color" value="green" bind:group="{colors}" />
	green
</label>
<label for=""
	><input type="radio" name="color" value="blue" bind:group="{colors}" />
	blue
</label>

<label for=""
	><input type="checkbox" name="color" value="red" bind:group="{colors2}" />
	red
</label>
<label for=""
	><input type="checkbox" name="color" value="green" bind:group="{colors2}" />
	green
</label>
<label for=""
	><input type="checkbox" name="color" value="blue" bind:group="{colors2}" />
	blue
</label>

<select name="" id="" bind:value="{selectColor}">
	<option value="green">green</option>
	<option value="red">red</option>
	<option value="blue">blue</option>
</select>

<input type="text" id="username" bind:this="{usernameInput}" />
<button on:click="{saveData}">saveData</button>

<div bind:this="{someDiv}"></div>

email
<form on:submit|preventDefault>
	<input
		type="email"
		bind:value="{enterEmail}"
		class="{isEmail(enterEmail) ? '' : 'invalid'}"
	/>
	<button type="submit" disabled="{!formIsValue}">save</button>
</form>
