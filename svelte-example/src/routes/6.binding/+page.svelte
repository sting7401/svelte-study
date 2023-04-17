<script>
	let name = '';

	let a = 1;

	let yes = false;

	let radioInit = '1';
	let checkInit = '1';
	let radio = ['1', '2', '3'];

	let textarea = 'text';

	let files;

	$: if (files) {
		console.log(files);

		for (const file of files) {
			console.log(`${file.name} ${file.size} bytes`);
		}
	}

	let selected;
	let selectList = ['webpage', 'sk '];
</script>

<input type="text" bind:value={name} id={name} />
<p>{name || '없음'}</p>

<input type="number" bind:value={a} name="" id="" />
<input type="range" bind:value={a} name="" id="" />

<input type="checkbox" bind:checked={yes} id="" />

{#if yes}
	체크
{:else}
	no
{/if}

<button disabled={!yes}>123</button>

{#each radio as item}
	<input type="radio" bind:group={radioInit} id={item} value={item} />
{/each}

{#each radio as item}
	<input type="checkbox" bind:group={checkInit} id={item} value={item} />
{/each}

<textarea name="" id="" bind:value={textarea} cols="30" rows="10" />
<p>{textarea}</p>

<input type="file" name="" id="" bind:files />

<input type="file" multiple bind:files />

{#if files}
	{#each [...files] as item}
		{item.name}
		{item.size}
	{/each}
{/if}

<select bind:value={selected} name="" id="">
	{#each selectList as item}
		<option value={item}>{item}</option>
	{/each}
</select>
