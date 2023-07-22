<script lang="ts">
	export let link = '#!';
	export let badge = '';
	export let text = '';
	export let date = '';
</script>

<li class="flex items-center w-full rounded-md bg-[#F3F6F8] mt-10 first:mt-0">
	<a href={link} class="flex items-center w-full px-20 py-10">
		<p
			class="flex justify-center items-center min-w-[4.75rem] p-10 bg-[#1000ef] rounded-md text-15 text-white font-w7"
		>
			{badge}
		</p>
		<p class="px-10 text-15 text-[#666]">{text}</p>
		<p class="ml-auto">{date}</p>
	</a>
</li>
