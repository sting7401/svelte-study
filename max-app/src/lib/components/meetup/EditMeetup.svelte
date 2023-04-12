<script>
	import { createEventDispatcher } from 'svelte';
	import { isEmpty, isValidEmail } from '$lib/helper/helper.js';
	import meetups from '$lib/stores/meetup-store.js';
	import Modal from '$lib/components/Ui/Modal.svelte';
	import TextInput from '$lib/components/Ui/TextInput.svelte';
	import Button from '$lib/components/Ui/Button.svelte';

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
		titleValid && subTitleValid && imageUrlValid && descValid && contactEmailValid && addressValid;

	function submitForm() {
		let meetupData = {
			title: title,
			subtitle: subtitle,
			desc: desc,
			imageUrl: imageUrl,
			address: address,
			contactEmail: contactEmail
		};

		if (id) {
			fetch(`https://svelte-max-658a0-default-rtdb.firebaseio.com/meetup/${id}.json`, {
				method: 'PATCH',
				body: JSON.stringify(meetupData),
				headers: { 'Content-Type': 'application/json' }
			});
			meetups.updatedMeetups(id, meetupData);
		} else {
			fetch('https://svelte-max-658a0-default-rtdb.firebaseio.com/meetup.json', {
				method: 'POST',
				body: JSON.stringify({ ...meetupData, isFavor: false }),
				headers: { 'Content-Type': 'application/json' }
			})
				.then((res) => {
					if (!res.ok) {
						throw new Error('error');
					}
				})
				.then((data) => {
					meetups.addMeetups({
						...meetupData,
						isFovr: false,
						id: data.name
					});
				})
				.catch((err) => {
					console.log(err);
				});
			// meetups.addMeetups(meetupData);
		}
		dispatch('save');
	}

	function del() {
		fetch(`https://svelte-max-658a0-default-rtdb.firebaseio.com/meetup/${id}.json`, {
			method: 'DELETE'
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error('error');
				}
				meetups.removeMeetups(id);
			})
			.catch((err) => {
				console.log(err);
			});
		dispatch('save');
	}

	function cancel() {
		dispatch('cancel');
	}
</script>

<Modal title="edit meetup" on:cancel>
	<form on:submit|preventDefault={submitForm}>
		<TextInput
			id="title"
			label="Title"
			value={title}
			valid={titleValid}
			validMessage="제목 입력해주세요."
			on:input={(event) => (title = event.target.value)}
		/>
		<TextInput
			id="subtitle"
			label="subtitle"
			value={subtitle}
			valid={subTitleValid}
			validMessage="소제목 입력해주세요."
			on:input={(event) => (subtitle = event.target.value)}
		/>
		<TextInput
			id="address"
			label="address"
			value={address}
			valid={addressValid}
			validMessage="주소 입력해주세요."
			on:input={(event) => (address = event.target.value)}
		/>
		<TextInput
			id="imageUrl"
			label="imageUrl"
			value={imageUrl}
			valid={imageUrlValid}
			validMessage="이미지 입력해주세요."
			on:input={(event) => (imageUrl = event.target.value)}
		/>
		<TextInput
			type="email"
			id="contactEmail"
			label="contactEmail"
			value={contactEmail}
			valid={contactEmailValid}
			validMessage="내용입력해주세요."
			on:input={(event) => (contactEmail = event.target.value)}
		/>
		<TextInput
			controlType="textarea"
			id="desc"
			label="desc"
			bind:value={desc}
			valid={descValid}
			validMessage="내용 입력해주세요."
			rows="30"
		/>
	</form>
	<div slot="footer">
		<Button type="button" on:click={cancel}>cancel</Button>
		<Button type="button" on:click={submitForm} disabled={!formIsValid}>save</Button>

		{#if id}
			<Button type="button" on:click={del}>del</Button>
		{/if}
	</div>
</Modal>

<style>
	/* your styles go here */

	form {
		width: 100%;
		max-width: 90%;
		margin: 0 auto;
	}
</style>
