<script lang="ts">
	let { data } = $props();

	console.log(data);
</script>

<div>
	<h2>{data.post.title}</h2>
	<p>{data.post.body}</p>
</div>
