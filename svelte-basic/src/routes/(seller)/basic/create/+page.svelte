<script lang="ts">
	let { form } = $props();
</script>

<form method="post" class="p-2">
	<input type="text" name="title" id="" placeholder="제목" class="border" />
	<textarea
		name="body"
		id=""
		cols="30"
		rows="10"
		placeholder="내용"
		class="border"></textarea>

	<button type="submit">쓰기</button>
</form>

<pre>
    {JSON.stringify(form, null, 2)}
</pre>
