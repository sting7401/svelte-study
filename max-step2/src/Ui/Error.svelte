<script>
	import Modal from './Modal.svelte';

	export let message;
</script>

<style>
</style>

<Modal title="Error" on:cancel>
	<p>{message}</p>
</Modal>
