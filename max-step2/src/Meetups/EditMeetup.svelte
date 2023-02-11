<script>
	import meetups from './meetup-store.js';
	import Modal from './../Ui/Modal.svelte';
	// your script goes here
	import { createEventDispatcher } from 'svelte';
	import TextInput from '../Ui/TextInput.svelte';
	import Button from '../Ui/Button.svelte';
	import { isEmpty, isValidEmail } from '../helper/helper.js';

	// let title = '';
	// let titleValid = false;
	// let subtitle = '';
	// let subTitleValid = false;
	// let imageUrl = '';
	// let imageUrlValid = false;
	// let desc = '';
	// let descValid = false;
	// let contactEmail = '';
	// let contactEmailValid = false;
	// let address = '';
	// let addressValid = false;

	export let id = null;

	let title = '';
	let subtitle = '';
	let imageUrl = '';
	let desc = '';
	let contactEmail = '';
	let address = '';

	if (id) {
		const unsubscribe = meetups.subscribe((items) => {
			const selectedMeetup = items.find((i) => i.id === id);

			console.log(id);
			title = selectedMeetup.title;
			subtitle = selectedMeetup.subtitle;
			address = selectedMeetup.address;
			contactEmail = selectedMeetup.contactEmail;
			desc = selectedMeetup.desc;
			imageUrl = selectedMeetup.imageUrl;
		});
		unsubscribe();
	}

	const dispatch = createEventDispatcher();

	$: titleValid = !isEmpty(title);
	$: subTitleValid = !isEmpty(subtitle);
	$: imageUrlValid = !isEmpty(imageUrl);
	$: descValid = !isEmpty(desc);
	$: contactEmailValid = !isValidEmail(contactEmail);
	$: addressValid = !isEmpty(address);
	$: formIsValid =
		titleValid &&
		subTitleValid &&
		imageUrlValid &&
		descValid &&
		contactEmailValid &&
		addressValid;

	function submitForm() {
		let meetupData = {
			title: title,
			subtitle: subtitle,
			desc: desc,
			imageUrl: imageUrl,
			address: address,
			contactEmail: contactEmail,
		};

		if (id) {
			meetups.updatedMeetups(id, meetupData);
		} else {
			meetups.addMeetups(meetupData);
		}
		dispatch('save');
	}
	function del() {
		meetups.removeMeetups(id);
		dispatch('save');
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
			valid="{titleValid}"
			validMessage="제목 입력해주세요."
			on:input="{(event) => (title = event.target.value)}"
		/>
		<TextInput
			id="subtitle"
			label="subtitle"
			value="{subtitle}"
			valid="{subTitleValid}"
			validMessage="소제목 입력해주세요."
			on:input="{(event) => (subtitle = event.target.value)}"
		/>
		<TextInput
			id="address"
			label="address"
			value="{address}"
			valid="{addressValid}"
			validMessage="주소 입력해주세요."
			on:input="{(event) => (address = event.target.value)}"
		/>
		<TextInput
			id="imageUrl"
			label="imageUrl"
			value="{imageUrl}"
			valid="{imageUrlValid}"
			validMessage="이미지 입력해주세요."
			on:input="{(event) => (imageUrl = event.target.value)}"
		/>
		<TextInput
			type="email"
			id="contactEmail"
			label="contactEmail"
			value="{contactEmail}"
			valid="{contactEmailValid}"
			validMessage="내용입력해주세요."
			on:input="{(event) => (contactEmail = event.target.value)}"
		/>
		<TextInput
			controlType="textarea"
			id="desc"
			label="desc"
			bind:value="{desc}"
			valid="{descValid}"
			validMessage="내용 입력해주세요."
			rows="30"
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
		<Button type="button" on:click="{submitForm}" disabled="{!formIsValid}"
			>save</Button
		>

		{#if id}
			<Button type="button" on:click="{del}">del</Button>
		{/if}
	</div>
</Modal>
