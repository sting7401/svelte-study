<script>
	let textValue = '';
	let number = '';
	let check = false;
	let checkList = ['1', '2', '3'];
	let checkInit = '1';
	let radioList = ['1', '2', '3'];
	let radioInit = '1';
	let textareaValue = '';
	let selectList = [
		{
			id: 1,
			text: 'a',
		},
		{
			id: 2,
			text: 'a1',
		},
		{
			id: 2,
			text: 'a2',
		},
	];
	let selectInit = {};
</script>

<style>
</style>

<input type="text" name="" id="" bind:value="{textValue}" />

<p>{textValue}</p>

<input type="number" name="" id="" bind:value="{number}" />
<input type="range" name="" id="" bind:value="{number}" />

<p>{number}</p>

<input type="checkbox" name="" id="" bind:checked="{check}" />
<p>{check}</p>

{#each checkList as item}
	<input
		type="checkbox"
		value="{item}"
		id="check{item}"
		bind:group="{checkInit}"
	/>
	<label for="check{item}">{item}</label>
{/each}
<p>{checkInit}</p>

{#each radioList as item}
	<input
		type="radio"
		value="{item}"
		id="radio{item}"
		bind:group="{radioInit}"
	/>
	<label for="radio{item}">{item}</label>
{/each}

<textarea name="" bind:value="{textareaValue}" id="" cols="30" rows="10"
></textarea>
<p>{textareaValue}</p>

<select name="" id="" bind:value="{selectInit}">
	{#each selectList as item}
		<option>{item.text}</option>
	{/each}
</select>
<p>{selectInit.id} {selectInit.text}</p>
