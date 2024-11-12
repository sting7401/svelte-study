<script lang="ts">
	let { data, children } = $props();
</script>

<div class="p-4">
	<div class="flex">
		<a
			href="/basic"
			class="flex-1 flex justify-center align-middle w-full p-3 border rounded-sm hover:bg-slate-400"
		>
			홈
		</a>
		<a
			href="/basic/create"
			class="flex-1 flex justify-center align-middle w-full p-3 border rounded-sm hover:bg-slate-400"
		>
			글쓰기
		</a>


		
		<div
			class="flex-1 flex justify-center align-middle w-full p-3 border rounded-sm hover:bg-slate-400"
		>
			<form action="/basic/logout" method="post">
				<button
					type="submit"
					class="flex-1 flex justify-center align-middle w-full p-3"
					>로그아웃</button
				>
			</form>
		</div>
	</div>

	{@render children?.()}
</div>
