<script>
	let pass = '';
	let passLength = 'short';

	let passArray = [];

	$: if (pass.trim().length < 5) {
		passLength = 'short';
	} else if (pass.trim().length > 10) {
		passLength = 'long';
	} else {
		passLength = 'valid';
	}

	function confirm() {
		if (passLength === 'valid') {
			passArray = [...passArray, pass];
		}
	}

	function remove(index) {
		passArray = passArray.filter((pwd) => {
			return pwd != passArray[index];
		});
	}
</script>

<input type="password" name="" id="" bind:value={pass} />

<button on:click={confirm}> 확인</button>

{#if passLength === 'short'}
	<p>텍스트가 짧음</p>
{:else if passLength === 'long'}
	<p>텍스트가 길다</p>
{:else}
	<p>{pass}</p>
{/if}

<ul>
	{#each passArray as pw, i (pw)}
		<li on:click={() => remove(i)}>{pw}</li>
	{/each}
</ul>

<style>
</style>
