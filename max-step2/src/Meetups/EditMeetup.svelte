<script>
	import Modal from './../Ui/Modal.svelte';
	// your script goes here
	import { createEventDispatcher } from 'svelte';
	import TextInput from '../Ui/TextInput.svelte';
	import Button from '../Ui/Button.svelte';
	import { prevent_default } from 'svelte/internal';

	let title = '';
	let subtitle = '';
	let imageUrl = '';
	let desc = '';
	let contactEmail = '';
	let address = '';

	const dispatch = createEventDispatcher();

	function submitForm() {
		dispatch('save', {
			title: title,
			subtitle: subtitle,
			desc: desc,
			imageUrl: imageUrl,
			address: address,
			contactEmail: contactEmail,
		});
	}
	function cancel() {
		dispatch('cancel');
	}
</script>

<style>
	/* your styles go here */

	form {
		width: 100%;
		max-width: 90%;
		margin: 0 auto;
	}
</style>

<Modal title="edit meetup" on:cancel>
	<form on:submit|preventDefault="{submitForm}">
		<TextInput
			id="title"
			label="Title"
			value="{title}"
			on:input="{(event) => (title = event.target.value)}"
		/>
		<TextInput
			id="subtitle"
			label="subtitle"
			value="{subtitle}"
			on:input="{(event) => (subtitle = event.target.value)}"
		/>
		<TextInput
			id="address"
			label="address"
			value="{address}"
			on:input="{(event) => (address = event.target.value)}"
		/>
		<TextInput
			id="imageUrl"
			label="imageUrl"
			value="{imageUrl}"
			on:input="{(event) => (imageUrl = event.target.value)}"
		/>
		<TextInput
			type="email"
			id="contactEmail"
			label="contactEmail"
			value="{contactEmail}"
			on:input="{(event) => (contactEmail = event.target.value)}"
		/>
		<TextInput
			controlType="textarea"
			id="desc"
			label="desc"
			value="{desc}"
			rows="30"
			on:input="{(event) => (desc = event.target.value)}"
		/>

		<!-- <div class="form-control">
            <label for="title">title</label><input type="text" bind:value={title} id="title" />
        </div>
        <div class="form-control">
            <label for="subtitle">subtitle</label><input type="text" bind:value={subtitle} id="subtitle" />
        </div>
        <div class="form-control">
            <label for="desc">desc</label><textarea row="3" id="desc" bind:value={desc} />
        </div>
        <div class="form-control">
            <label for="address">address</label><input type="text" id="address" bind:value={address} />
        </div>
        <div class="form-control">
            <label for="contactEmail">contactEmail</label><input type="email" id="contactEmail" bind:value={contactEmail} />
        </div> -->
	</form>
	<div slot="footer">
		<Button type="button" on:click="{cancel}">cancel</Button>
		<Button type="button" on:click="{submitForm}">save</Button>
	</div>
</Modal>
