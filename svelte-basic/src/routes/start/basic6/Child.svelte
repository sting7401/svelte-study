<script lang="ts">
	interface Props {
		number?: number;
		person?: any;
		name?: string;
		age?: number;
	}

	let {
		number = 10,
		person = {
			name: '',
			age: 0
		},
		name = '',
		age = 0
	}: Props = $props();
</script>

<h1>{number}</h1>

<p>{person}</p>

<p>{name}</p>
<p>{age}</p>
