<script lang="ts">
	import Button from '../../components/Button.svelte';
	import ContactCard from '../../components/ContactCard.svelte';

	let inputList = $state([
		{ name: 'inputList1', label: 'User Name', type: 'input', value: 'song' },
		{ name: 'inputList2', label: 'Job Title', type: 'input', value: '' },
		{ name: 'inputList3', label: 'Image URL', type: 'input', value: '' },
		{ name: 'inputList4', label: 'Description', type: 'textarea', value: '' }
	]);
	let done = $state(false);
	let formState = 'empty';
	let { createContacts = $bindable([]) } = $props();

	const addContact = () => {
		createContacts = [
			...createContacts,
			{
				id: Math.random(),
				name: inputList[0].value,
				job: inputList[1].value,
				image: inputList[2].value,
				desc: inputList[3].value
			}
		];

		console.log(createContacts);

		done = !done;
	};

	function del() {
		createContacts = createContacts.slice(1);
	}

	function last() {
		createContacts = createContacts.slice(0, -1);
	}
</script>



{#each inputList as { name, label, type, value }}
	<div>
		<label for={name}>{label}</label>
		{#if type === 'textarea'}s
			<textarea {name} id={name} bind:value cols="30" rows="10"></textarea>
		{:else if type === 'input'}
			<input id={name} bind:value type="text" />
		{/if}
	</div>
{/each}
<Button on:buttonEvent={addContact}>더하기</Button>

{#if done}
	<p>활성화</p>
{/if}

{#each createContacts as contactList, index (contactList.id)}
	<h2># {index + 1}</h2>
	<ContactCard
		inputList1={contactList.name}
		inputList2={contactList.job}
		inputList3={contactList.image}
		inputList4={contactList.desc}
	/>
{:else}
	<p>게시글이 없습니다.</p>
{/each}

<style>
	/* your styles go here */
</style>
